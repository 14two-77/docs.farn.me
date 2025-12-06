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
      items: [
        "dcl/quiz3_2024",
        "dcl/gpt_abb",
        "dcl/notebook_abb",
        "dcl/notebook_sum",
        "dcl/final_project_asm",
        "dcl/final_project_suggestion",
      ],
    },
    {
      type: "category",
      label: "Shared Resources",
      items: [
        {
          type: "category",
          label: "BitKa",
          items: [
            {
              type: "category",
              label: "Guide",
              items: [
                "share/bitka/guide/project-structure",
                "share/bitka/guide/jwt",
                "share/bitka/guide/read-go-docs",
                "share/bitka/guide/logging", "share/bitka/guide/kafka-topics",
              ],
            },
            {
              type: "category",
              label: "Role",
              items: [
                "share/bitka/role/data-in-dgb",
                "share/bitka/role/cybersec-in-dgb",
                "share/bitka/role/bitka-data",
                "share/bitka/role/bitka-audit",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "CEDT Internship 2026 Resources",
      items: ["internship/job-description"],
    },
    {
      type: "category",
      label: "Data Structures & Algorithms",
      items: ["dsa/dsa67", "dsa/cheatsheet"],
    },
  ],
};

export default sidebars;
