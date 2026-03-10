import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, message }) {
  if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
    throw new Error("Missing EMAIL_ADDRESS or GMAIL_PASSKEY");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });

  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
}