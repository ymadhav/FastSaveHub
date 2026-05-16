import { NextResponse } from "next/server";
import { resolveUrlSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";
import { resolveDirectMedia } from "@/lib/providers/DirectMediaProvider";

export async function POST(request: Request) {
  try {
    // Basic Rate Limiting based on IP
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "20", 10);
    const windowSeconds = parseInt(process.env.RATE_LIMIT_WINDOW_SECONDS || "60", 10);

    if (!rateLimit(ip, maxRequests, windowSeconds)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = resolveUrlSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid request data. Please provide a valid URL." },
        { status: 400 }
      );
    }

    const { url } = result.data;
    
    // Resolve media
    const mediaData = await resolveDirectMedia(url);

    return NextResponse.json(mediaData);
  } catch (error: any) {
    // Return safe errors to the client
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred." },
      { status: 400 }
    );
  }
}
