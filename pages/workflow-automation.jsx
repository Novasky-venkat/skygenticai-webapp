import React from "react";
import { SolutionPage } from "./solution-page.jsx";

const page = {
  slug: "workflow-automation",
  label: "USE CASE",
  headline: "Automate the work behind your business.",
  description: "Turn repetitive processes into intelligent workflows with AI agents that understand instructions, make decisions, use your systems, and complete tasks.",
  heroCta: "Schedule Demo",
  visualNodes: [
    { label: "New Request", title: "Intake structured", copy: "Capture instructions, documents, and context." },
    { label: "AI Agent", title: "Understand and plan", copy: "Determine required actions, rules, and systems." },
    { label: "Update Systems", title: "Work moves forward", copy: "Records, messages, and tasks stay aligned." },
    { label: "Complete", title: "Workflow closed", status: "Verified and logged" }
  ],
  mainLabel: "INTELLIGENT AUTOMATION",
  mainHeading: "From manual processes to intelligent workflows.",
  mainDescription: "Your teams shouldn't spend hours moving information between systems or following repetitive processes. SkyGentic brings AI intelligence and workflow automation together to execute work from beginning to end.",
  capabilities: [
    { title: "Data & document processing", copy: "Extract, validate, classify, and move information across your systems." },
    { title: "Business operations", copy: "Automate repetitive operational tasks and coordinate work between teams and applications." },
    { title: "Approvals & escalations", copy: "Route tasks to the right people based on business rules, context, and priority." }
  ],
  process: {
    label: "HOW IT WORKS",
    heading: "How intelligent automation works.",
    steps: [
      { title: "Understand", copy: "Read the request, documents, and context." },
      { title: "Plan", copy: "Choose the right sequence of actions." },
      { title: "Execute", copy: "Use connected systems to complete the work." },
      { title: "Verify", copy: "Check output quality and record the outcome." },
      { title: "Escalate", copy: "Bring in the right person when judgment is needed." }
    ]
  },
  integrations: {
    label: "YOUR SYSTEMS",
    heading: "Your systems. One intelligent workflow.",
    items: ["CRM", "ERP", "Email", "Documents", "Databases", "APIs"]
  },
  ctaHeading: "Give your team back their time.",
  ctaButton: "Build an Automated Workflow"
};

export default function WorkflowAutomationPage() {
  return <SolutionPage page={page} />;
}
