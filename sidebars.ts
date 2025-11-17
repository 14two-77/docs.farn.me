import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "Computer Programming",
      items: ["com-prog/quiz1"],
    },
    {
      type: "category",
      label: "Intro to CEDT",
      items: ["i2cedt/final", "i2cedt/final-project"],
    },
    {
      type: "category",
      label: "Digital Computer Logic",
      items: ["dcl/quiz3_2024","dcl/gpt_abb","dcl/notebook_abb","dcl/notebook_sum","dcl/final_project_asm","dcl/final_project_suggestion"],
    },
    {
      type: "category",
      label: "Shared Resources",
      items: ["share/data-in-dgb", "share/cybersec-in-dgb", "share/jwt"],
    },
    {
      type: "category",
      label: "CEDT Internship 2026 Resources",
      items: ["internship/job-description", ],
    }
  ],
};

export default sidebars;
