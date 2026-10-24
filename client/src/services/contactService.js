import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

/**
 * Validates and sends contact form data directly to email via EmailJS.
 *
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendContactMessage({ name, email, message }) {
  const trimmedName = (name || "").trim();
  const trimmedEmail = (email || "").trim();
  const trimmedMessage = (message || "").trim();

  // Basic validation
  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return {
      success: false,
      message: "Please fill out your name, email, and message.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (trimmedName.length > 100 || trimmedEmail.length > 254 || trimmedMessage.length > 5000) {
    return {
      success: false,
      message: "One or more inputs exceed allowed length limits.",
    };
  }

  // Check if EmailJS credentials are configured
  const isUnconfigured =
    !SERVICE_ID ||
    !TEMPLATE_ID ||
    !PUBLIC_KEY ||
    SERVICE_ID.includes("your_") ||
    TEMPLATE_ID.includes("your_") ||
    PUBLIC_KEY.includes("your_");

  if (isUnconfigured) {
    console.warn(
      "[EmailJS] Missing credentials. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your client/.env file."
    );
    return {
      success: false,
      message:
        "EmailJS is not configured yet. Please add your EmailJS Service ID, Template ID, and Public Key to client/.env.",
    };
  }

  try {
    const templateParams = {
      name: trimmedName,
      from_name: trimmedName,
      user_name: trimmedName,
      email: trimmedEmail,
      from_email: trimmedEmail,
      user_email: trimmedEmail,
      reply_to: trimmedEmail,
      message: trimmedMessage,
      to_name: "Gitesh Patidar",
      to_email: "giteshpatidar2207@gmail.com",
      timestamp: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200 || response.text === "OK") {
      return {
        success: true,
        message: "Message sent successfully! Thank you for reaching out.",
      };
    }

    return {
      success: false,
      message: "Could not send message. Please try again or email giteshpatidar2207@gmail.com directly.",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    const errorMessage =
      error?.text ||
      error?.message ||
      "Could not connect to EmailJS service. You can also reach me directly at giteshpatidar2207@gmail.com.";

    return {
      success: false,
      message: errorMessage,
    };
  }
}
