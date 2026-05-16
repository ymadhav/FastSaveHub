import { z } from "zod";

export const resolveUrlSchema = z.object({
  url: z.string().url("Please enter a valid URL").refine((val) => val.startsWith("https://") || val.startsWith("http://"), {
    message: "URL must be HTTP or HTTPS",
  }),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ResolveUrlRequest = z.infer<typeof resolveUrlSchema>;
export type ContactFormRequest = z.infer<typeof contactFormSchema>;
