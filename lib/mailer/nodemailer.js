import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, message }) {
  const user = process.env.EMAIL_ADDRESS;
  const pass = process.env.GMAIL_PASSKEY;

  if (!user || !pass) {
    throw new Error("Missing EMAIL_ADDRESS or GMAIL_PASSKEY");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: `Portfolio Contact <${user}>`,
    to: user,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
}