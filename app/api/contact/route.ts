import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    
    // Stricter rate limit for contact forms
    if (!rateLimit(`contact_${ip}`, 5, 3600)) {
      return NextResponse.json(
        { success: false, error: "Too many messages sent. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    // In a real app, send an email or save to DB here.
    // MVP: Just log safely.
    console.log("Contact form submission:", {
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      // Avoid logging full message in production if sensitive
    });

    return NextResponse.json({ success: true, message: "Your message has been sent successfully." });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
