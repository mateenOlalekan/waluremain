import { z } from "zod";

export const personalDetailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^\+?[\d\s-]+$/, "Please enter a valid phone number"),
  addons: z.string().min(1, "Please choose an add-on option"),
  duration: z.coerce.number().min(1, "Duration is required"), // 🔥 corrected
  number: z.coerce.number().min(1, "At least 1 person is required").max(50, "Maximum 50 people allowed"),
});

export const bookingDetailsSchema = z.object({
  roomType: z.string().min(1, "Please select a room type"),
  date: z.string().min(1, "Please select a date"),
  time: z.array(z.string()).min(1, "Please select at least one time slot"),
  guests: z.coerce.number().min(1, "At least 1 guest is required").max(100, "Maximum 100 guests allowed"),
  duration: z.coerce.number().min(1, "Duration must be at least 1 hour").max(24, "Maximum 24 hours allowed"),
  requests: z.string().max(500, "Special requests cannot exceed 500 characters").optional(),
});

// 🔥 Fixed to match Bank Transfer UI
export const paymentDetailsSchema = z.object({
  bankName: z.string().min(1, "Bank name is required"),
  accountName: z.string().min(1, "Account name is required"),
  accountNumber: z.string().min(8, "Account Number is required"),
  amount: z.string().min(3, "Amount is required"),
});

export const bookingSchema = personalDetailsSchema
  .merge(bookingDetailsSchema)
  .merge(paymentDetailsSchema);
