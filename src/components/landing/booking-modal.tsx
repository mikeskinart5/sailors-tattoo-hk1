"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Check, AlertCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useBookingStore } from "@/lib/booking-store";
import {
  createBooking,
} from "@/lib/actions/booking";
import {
  BookingSchema,
  TATTOO_STYLES,
  TATTOO_SIZES,
  type BookingInput,
} from "@/lib/booking-schema";
import { useToast } from "@/hooks/use-toast";

const SIZE_LABELS: Record<(typeof TATTOO_SIZES)[number], string> = {
  small: "Small — under 5cm",
  medium: "Medium — 5 to 15cm",
  large: "Large — 15 to 30cm",
  sleeve: "Sleeve — full arm or leg",
  "back-piece": "Back piece — half-sleeve+",
};

export function BookingModal() {
  const isOpen = useBookingStore((s) => s.isOpen);
  const close = useBookingStore((s) => s.close);
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useForm<BookingInput>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      style: undefined,
      placement: "",
      size: undefined,
      description: "",
      preferredDates: "",
      referenceUrl: "",
    },
  });

  async function onSubmit(values: BookingInput) {
    setIsSubmitting(true);
    setRootError(null);

    try {
      const result = await createBooking(values);

      if (result.ok) {
        toast({
          title: "Booking request sent",
          description:
            "Mike will be in touch within 2–3 days. Check your email (and spam folder).",
        });
        form.reset();
        close();
      } else {
        for (const [field, messages] of Object.entries(result.errors)) {
          if (field === "_root") {
            setRootError(messages[0] ?? "Something went wrong.");
          } else {
            form.setError(field as keyof BookingInput, {
              type: "server",
              message: messages[0],
            });
          }
        }
      }
    } catch {
      setRootError(
        "Network error. Please try again or email mikeskinart5@icloud.com directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          form.reset();
          setRootError(null);
          close();
        }
      }}
    >
      <DialogContent className="max-h-[92vh] overflow-y-auto overflow-x-hidden border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-[640px]">
        <DialogHeader className="border-b border-white/10 px-6 pb-6 pt-7">
          <DialogTitle className="font-black uppercase text-3xl tracking-tight text-foreground">
            Book a Session
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tell Mike about the piece you have in mind. He&apos;ll get back to
            you within 2–3 days to discuss design, sizing, and availability.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 px-6 py-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        autoComplete="name"
                        className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@email.com"
                        autoComplete="email"
                        className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-eyebrow text-foreground/80">
                    Phone / WhatsApp
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+852 ..."
                      autoComplete="tel"
                      className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Tattoo Style
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-lg border-white/10 bg-white/[0.03] text-foreground focus:border-foreground/40 focus:ring-0">
                          <SelectValue placeholder="Select a style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-white/10 bg-popover/95 backdrop-blur-xl">
                        {TATTOO_STYLES.map((style) => (
                          <SelectItem
                            key={style}
                            value={style}
                            className="focus:bg-white/5 focus:text-foreground"
                          >
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Approximate Size
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-lg border-white/10 bg-white/[0.03] text-foreground focus:border-foreground/40 focus:ring-0">
                          <SelectValue placeholder="Select a size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-white/10 bg-popover/95 backdrop-blur-xl">
                        {TATTOO_SIZES.map((size) => (
                          <SelectItem
                            key={size}
                            value={size}
                            className="focus:bg-white/5 focus:text-foreground"
                          >
                            {SIZE_LABELS[size]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="placement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-eyebrow text-foreground/80">
                    Placement
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Left inner forearm, upper back, ribs..."
                      className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-eyebrow text-foreground/80">
                    Describe Your Idea
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What do you want? A compass, a portrait, a tribute piece? Tell Mike the story — the more detail, the better the first sketch will be."
                      rows={5}
                      className="resize-none rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between text-[0.65rem] text-muted-foreground">
                    <span>Min 20 characters</span>
                    <span>{field.value?.length ?? 0} / 2000</span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="preferredDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Preferred Dates <span className="text-muted-foreground/60">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. weekends in Oct, anytime in Nov"
                        className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referenceUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-eyebrow text-foreground/80">
                      Reference Image URL <span className="text-muted-foreground/60">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://..."
                        className="rounded-lg border-white/10 bg-white/[0.03] text-foreground placeholder:text-muted-foreground/60 focus-visible:border-foreground/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <AnimatePresence>
              {rootError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{rootError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                We&apos;ll never share your details.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(244,241,234,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
