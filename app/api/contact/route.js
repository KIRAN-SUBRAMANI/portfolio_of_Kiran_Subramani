import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";
import { rateLimit } from "@/lib/rate-limit/basic";
import { sendContactEmail } from "@/lib/mailer/nodemailer";

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

export async function POST(req) {
  try {
    const ip = getClientIp(req);

    const rl = rateLimit(ip, { limit: 5, windowMs: 60_000 });
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues?.[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    const message =
      error?.message ||
      error?.response ||
      "Server error. Please try again later.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}