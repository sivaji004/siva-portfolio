import axios from "axios";
import { NextResponse } from "next/server";

// API Route to verify reCAPTCHA
export async function POST(req) {
  try {
    // Parse the request body for the reCAPTCHA token
    const { token } = await req.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Set this in your environment variables

    // Send the token to Google reCAPTCHA verification API
    const result = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: secretKey,
        response: token,
      },
    });

    if (result.data.success) {
      return NextResponse.json({
        success: true,
        message: "reCAPTCHA verification successful!",
      });
    }

    return NextResponse.json({
      success: false,
      message: "reCAPTCHA verification failed!",
    }, { status: 400 });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message);
    return NextResponse.json({
      success: false,
      message: "reCAPTCHA verification failed!",
    }, { status: 500 });
  }
}
