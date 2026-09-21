import React from "react";
import { SolutionPage } from "./solution-page.jsx";

const page = {
  slug: "real-estate",
  label: "INDUSTRY",
  headline: "AI that keeps real estate moving.",
  description: "From lead qualification to property inquiries and appointment scheduling, SkyGentic helps real estate teams respond faster and automate the work behind every customer interaction.",
  heroCta: "Schedule Demo",
  visualNodes: [
    { label: "New Lead", title: "Property inquiry received", copy: "Budget, location, property type, and timing enter the flow." },
    { label: "AI Conversation", title: "Requirements captured", copy: "Preferences become structured lead context." },
    { label: "Property Match", title: "Site visit proposed", copy: "Relevant next steps are prepared." },
    { label: "CRM", title: "Follow-up queued", status: "Lead ready" }
  ],
  mainLabel: "REAL ESTATE, REIMAGINED",
  mainHeading: "Turn every inquiry into an opportunity.",
  capabilities: [
    { title: "Lead qualification", copy: "Engage new leads instantly and understand their requirements." },
    { title: "Property discovery", copy: "Help prospects find properties based on location, budget, type, and preferences." },
    { title: "Site visit scheduling", copy: "Coordinate availability and schedule property visits." },
    { title: "Lead follow-ups", copy: "Keep conversations moving with timely and personalized follow-ups." },
    { title: "CRM automation", copy: "Capture information and update your CRM automatically." },
    { title: "Property inquiries", copy: "Answer questions about availability, pricing, amenities, and property details." }
  ],
  journey: {
    label: "FROM LEAD TO NEXT STEP",
    heading: "Keep every opportunity moving forward.",
    steps: ["New Lead", "AI Conversation", "Requirements", "Property Match", "Site Visit", "CRM", "Follow-Up"]
  },
  ctaHeading: "Keep your agents focused on closing.",
  ctaButton: "Schedule Demo"
};

export default function RealEstatePage() {
  return <SolutionPage page={page} />;
}
