"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendContactEmail(formData) {

  const { name, email, message } = Object.fromEntries(formData);
  
  if(!name || !email || !message) throw new Error("Missing required fields");

  const res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["bahaa.abouzahr@gmail.com"],
    subject:"Portfolio Contact Form",
    replyTo: email,
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #00abf0;">New Contact Message</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <hr style="margin: 16px 0;" />

      <p><strong>Message:</strong></p>
      <p style="background:#f5f5f5; padding:12px; border-radius:8px;">
        ${message}
      </p>
    </div>
  `
});

  if(res.error) return {ok: false, error: res.error}

  return {ok: true}

}