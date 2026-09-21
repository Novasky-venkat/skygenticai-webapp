import React from "react";
import { SolutionPage } from "./solution-page.jsx";

const page = {
  slug: "travel-hospitality",
  label: "INDUSTRY",
  headline: "AI that makes every journey easier.",
  description: "Deliver personalized travel and hospitality experiences with AI agents that assist customers before, during, and after their journey.",
  heroCta: "Schedule Demo",
  visualNodes: [
    { label: "Discover", title: "Guest intent understood", copy: "Preferences, timing, booking context, and questions are captured." },
    { label: "Book", title: "Reservation supported", copy: "Changes, confirmations, policies, and next steps stay organized." },
    { label: "Stay", title: "Service request routed", copy: "Guest needs move to the right team with context intact." },
    { label: "Support", title: "Follow-up personalized", status: "Journey supported" }
  ],
  mainLabel: "TRAVEL & HOSPITALITY, REIMAGINED",
  mainHeading: "From booking to checkout, your AI concierge is always available.",
  capabilities: [
    { title: "Booking assistance", copy: "Help customers discover options, answer questions, and navigate booking workflows." },
    { title: "Reservation management", copy: "Handle changes, cancellations, confirmations, and reservation requests." },
    { title: "Guest services", copy: "Assist with check-in information, amenities, transportation, and service requests." },
    { title: "Travel information", copy: "Provide relevant information about bookings, properties, policies, and destinations." },
    { title: "24/7 travel support", copy: "Give travelers assistance before, during, and after their journey." },
    { title: "Personalized recommendations", copy: "Use customer context and preferences to provide relevant suggestions." }
  ],
  journey: {
    label: "THE CUSTOMER JOURNEY",
    heading: "Support every step of the journey.",
    steps: ["Discover", "Book", "Prepare", "Travel", "Stay", "Support", "Follow-Up"]
  },
  ctaHeading: "Create experiences that feel personal.",
  ctaButton: "Build Your AI-Powered Guest Experience"
};

export default function TravelHospitalityPage() {
  return <SolutionPage page={page} />;
}
