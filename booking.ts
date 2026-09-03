"use server";

import { db } from "@/lib/db";
import {
  BookingSchema,
  type BookingActionResult,
} from "@/lib/booking-schema";
import { Resend } from "resend";

export async function createBooking(
  raw: unknown,
): Promise<BookingActionResult> {
  const parsed = BookingSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "_root";
      (errors[key] ??= []).push(issue.message);
    }
    return { ok: false, errors };
  }

  const data = parsed.data;

  try {
    const booking = await db.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        style: data.style,
        placement: data.placement,
        size: data.size,
        description: data.description,
        preferredDates: data.preferredDates || null,
        referenceUrl: data.referenceUrl || null,
      },
      select: { id: true },
    });

    const apiKey = process.env.RESEND_API_KEY;
    console.log("Resend API key loaded:", apiKey ? "YES" : "NO");

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in .env file!");
      return { ok: true, id: booking.id };
    }

    try {
      const resend = new Resend(apiKey);

      const emailMessage = `NEW BOOKING REQUEST

Name: ${data.name}
Email: ${data.email}
Phone/WhatsApp: ${data.phone}

TATTOO DETAILS:
- Style: ${data.style}
- Size: ${data.size}
- Placement: ${data.placement}

DESCRIPTION:
 ${data.description}

PREFERRED DATES: ${data.preferredDates || "Not specified"}
REFERENCE URL: ${data.referenceUrl || "None"}

---
Booking ID: ${booking.id}
Submitted via Sailors Tattoo HK website`;

      console.log("Sending email via Resend...");

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: "Sailors Tattoo HK <onboarding@resend.dev>",
        to: "mikeskinart5@gmail.com",
        subject: `New Booking Request from ${data.name}`,
        text: emailMessage,
        reply_to: data.email,
      });

      if (emailError) {
        console.error("Resend error:", emailError);
      } else {
        console.log("Email sent successfully! ID:", emailData?.id);
      }

    } catch (emailError) {
      console.error("Email notification failed (booking was still saved):", emailError);
    }

    return { ok: true, id: booking.id };
  } catch (err) {
    console.error("[createBooking] DB insert failed:", err);
    return {
      ok: false,
      errors: {
        _root: [
          "Could not save your request. Please try again or email mikeskinart5@gmail.com directly.",
        ],
      },
    };
  }
}