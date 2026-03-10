import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";
import { verifyRecaptcha } from "@/lib/validators/recaptcha";
import { rateLimit } from "@/lib/rate-limit/basic";
import { sendContactEmail } from "@/lib/mailer/nodemailer";
import { sendTelegramMessage } from "@/lib/mailer/telegram";

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

export async function POST(req) {
  try {
    const ip = getClientIp(req);

    const allowed = rateLimit(ip, { limit: 5, windowMs: 60_000 });
    if (!allowed.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
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

    const { name, email, message, captchaToken } = parsed.data;

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "Captcha verification failed." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message });
    await sendTelegramMessage({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
  console.error("CONTACT API ERROR:", error);
  return NextResponse.json(
    { error: "Server error. Please try again later." },
    { status: 500 }
  );
}
}