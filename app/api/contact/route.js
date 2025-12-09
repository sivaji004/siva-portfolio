import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Setup the transporter for sending email via Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Set this in your environment variables
    pass: process.env.GMAIL_PASSKEY, // Set this in your environment variables
  },
});

// Function to send email
async function sendEmail(name, email, userMessage) {
  const mailOptions = {
    from: `"Portfolio" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New Message From ${name}`,
    text: userMessage,
    html: `
      <h2>New Message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px;">${userMessage}</blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error.message);
    return false;
  }
}

// API Route handler
export async function POST(req) {
  try {
    // Parse the request body
    const { name, email, message: userMessage } = await req.json();

    // Check for empty fields
    if (!name || !email || !userMessage) {
      return NextResponse.json(
        { success: false, message: "Name, Email, and Message are required." },
        { status: 400 }
      );
    }

    // Prepare the email message
    const message = `
New message from ${name}

Email: ${email}

Message:
${userMessage}
`;

    // Send the email
    const emailSuccess = await sendEmail(name, email, userMessage);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully to email!",
      });
    }

    // Return failure if email fails to send
    return NextResponse.json(
      { success: false, message: "Failed to send message or email." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
