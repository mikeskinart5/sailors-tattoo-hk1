import { z } from "zod";

export const TATTOO_STYLES = [
  "Tribal & Pattern",
  "Portraits",
  "Black & Grey Realism",
  "Color Realism",
  "Graffiti",
  "Custom",
] as const;

export const TATTOO_SIZES = [
  "small",
  "medium",
  "large",
  "sleeve",
  "back-piece",
] as const;

export const BOOKING_STATUSES = [
  "pending",
  "contacted",
  "scheduled",
  "completed",
  "declined",
] as const;

export const BookingSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name is too long." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(6, { message: "Please enter a valid phone number." })
    .max(30, { message: "Phone number is too long." }),
  style: z.enum(TATTOO_STYLES, {
    message: "Please select a tattoo style.",
  }),
  placement: z
    .string()
    .min(2, { message: "Tell us where you want the tattoo." })
    .max(100, { message: "Placement text is too long." }),
  size: z.enum(TATTOO_SIZES, {
    message: "Please select an approximate size.",
  }),
  description: z
    .string()
    .min(20, { message: "Please describe your idea in at least 20 characters." })
    .max(2000, { message: "Description is too long (max 2000 characters)." }),
  preferredDates: z
    .string()
    .max(200, { message: "Preferred dates text is too long." })
    .optional()
    .or(z.literal("")),
  referenceUrl: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
});

export type BookingInput = z.infer<typeof BookingSchema>;
export type BookingActionResult =
  | { ok: true; id: string }
  | { ok: false; errors: Record<string, string[]> };
