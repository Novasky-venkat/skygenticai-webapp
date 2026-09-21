import React from "react";
import { SolutionPage } from "./solution-page.jsx";

const page = {
  slug: "customer-care",
  label: "USE CASE",
  headline: "Customer care that thinks, acts, and resolves.",
  description: "Give your customers fast, intelligent support with AI agents that understand their needs, take action, and resolve requests across every interaction.",
  heroCta: "Schedule Demo",
  visualNodes: [
    { label: "Customer Message", title: "Can you help me reschedule my appointment?" },
    { label: "AI Agent", title: "Understand Intent", copy: "Identify request context and the next best action." },
    { label: "Take Action", title: "Tomorrow at 10:30 AM is available.", copy: "The agent updates the connected schedule." },
    { label: "Resolution", title: "Appointment rescheduled", status: "Customer updated" }
  ],
  mainLabel: "CUSTOMER CARE, REIMAGINED",
  mainHeading: "Go beyond answering questions.",
  mainDescription: "Traditional chatbots answer questions. SkyGentic AI agents understand context, make decisions, and take action across your business systems.",
  capabilities: [
    { title: "24/7 customer support", copy: "Give customers instant assistance across every channel, whenever they need it." },
    { title: "Intelligent resolution", copy: "Understand customer intent and move conversations toward meaningful resolutions." },
    { title: "Action, not just answers", copy: "Let AI agents perform tasks across your connected systems." }
  ],
  process: {
    label: "HOW IT WORKS",
    heading: "From conversation to resolution.",
    steps: [
      { title: "Understand", copy: "Understand the customer's request, intent, and context." },
      { title: "Decide", copy: "Determine the right response and next step." },
      { title: "Act", copy: "Connect with your systems and perform the required action." },
      { title: "Resolve", copy: "Complete the request or bring in the right person." }
    ]
  },
  journey: {
    label: "CUSTOMER JOURNEYS",
    heading: "One AI layer. Multiple customer workflows.",
    steps: ["Service requests", "Appointment support", "Account support"]
  },
  ctaHeading: "Turn every customer interaction into a resolution.",
  ctaButton: "Schedule Demo"
};

export default function CustomerCarePage() {
  return <SolutionPage page={page} />;
}
