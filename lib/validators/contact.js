import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  captchaToken: z.string().optional()
});