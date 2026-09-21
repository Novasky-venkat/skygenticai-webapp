import React from "react";
import { SolutionPage } from "./solution-page.jsx";

const page = {
  slug: "home-services",
  label: "INDUSTRY",
  headline: "AI-powered operations for home services.",
  description: "From the first customer request to scheduling, technician coordination, service updates, and follow-ups, SkyGentic helps home service businesses automate the customer journey.",
  heroCta: "Schedule Demo",
  visualNodes: [
    { label: "Customer Request", title: "Service need captured", copy: "Issue, location, urgency, and preferred time enter the flow." },
    { label: "Qualification", title: "Schedule prepared", copy: "The agent gathers details and identifies the next available path." },
    { label: "Technician", title: "Job coordinated", copy: "Availability, location, and job type stay connected." },
    { label: "Completion", title: "Follow-up ready", status: "Customer informed" }
  ],
  mainLabel: "HOME SERVICES, REIMAGINED",
  mainHeading: "Every service request, handled intelligently.",
  capabilities: [
    { title: "Service requests", copy: "Capture customer requirements and understand the service they need." },
    { title: "Appointment scheduling", copy: "Find suitable time slots and schedule service visits automatically." },
    { title: "Technician coordination", copy: "Coordinate jobs based on availability, location, and service requirements." },
    { title: "Customer updates", copy: "Keep customers informed about appointments and service progress." },
    { title: "Quotes & estimates", copy: "Collect information required to initiate quotation workflows." },
    { title: "Follow-ups", copy: "Follow up after service completion to collect feedback and identify additional needs." }
  ],
  journey: {
    label: "FROM REQUEST TO COMPLETION",
    heading: "From service request to completed job.",
    steps: ["Customer Request", "Qualification", "Scheduling", "Technician", "Service", "Completion", "Follow-Up"]
  },
  ctaHeading: "Give your team fewer things to coordinate.",
  ctaButton: "Automate Your Operations"
};

export default function HomeServicesPage() {
  return <SolutionPage page={page} />;
}
