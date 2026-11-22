const caseStudies = {
  "modal-signal": {
    tag: "01 / SIGNAL — B2B SaaS · Data Experience",
    title: "Make the Invisible Visible: Customer Journey Explorer",
    sections: [
      {
        heading: "1. Problem & Research Discovery",
        body: "E-commerce merchants stare at static repeat-purchase percentages without knowing why shoppers churn between Order 1 and Order 2. Auditing existing dashboards revealed heavy metric overload with zero narrative context."
      },
      {
        heading: "2. Concept Exploration (3 Directions)",
        body: "Explored (A) dense KPI tables, (B) complex multi-branch Sankey charts, and (C) a focused Node-Based Journey Map paired with a contextual Evidence Drawer. Selected Option C so merchants can isolate drop-off moments without losing sight of the broader customer lifecycle."
      },
      {
        heading: "3. Signature Interaction & Prototyping",
        body: "Built an interactive coded prototype using real anonymized e-commerce order cohorts. Clicking any drop-off node dynamically opens an Evidence Drawer displaying time-to-next-order distributions and an interactive 'What-If' retention simulator."
      },
      {
        heading: "4. Validation & Key Iteration",
        body: "In usability testing, 4/5 participants identified the primary revenue leak in under 45 seconds. Based on early feedback, I added tabular-numeral alignment and clear delta badges so simulated retention lifts are immediately scannable."
      }
    ],
    aiNote: "AI Workflow Note: Used AI coding tools in VS Code to scaffold the interactive cohort state logic and parse real CSV order data into the live prototype."
  },
  "modal-loop": {
    tag: "02 / LOOP — Consumer Experience · Mobile",
    title: "Make Loyalty Feel Rewarding",
    sections: [
      {
        heading: "1. Problem & Research Discovery",
        body: "Standard loyalty widgets look like bank statements—showing abstract point balances ('1,250 pts') that require mental math and fail to excite shoppers."
      },
      {
        heading: "2. Concept Exploration (3 Directions)",
        body: "Explored (A) a gamified streak ladder, (B) a digital punch card, and (C) a tactile Reward Wallet with a live comparison dial. Selected Option C for effortless mobile speed and instant visual clarity."
      },
      {
        heading: "3. Visual Craft & Motion Spec",
        body: "Created a bold, high-contrast mobile visual language with custom badge illustrations, expressive display typography, and spring-physics transitions. Toggling between rewards animates point deductions and previews the discount directly on the active cart."
      },
      {
        heading: "4. Validation & Key Iteration",
        body: "Tested with mobile shoppers; updated the balance header to separate 'Available Now' from 'Pending Order Points' after noticing users hesitated before redeeming."
      }
    ],
    aiNote: "AI Workflow Note: Used AI to rapidly test spring animation curves and generate edge-case cart states (insufficient points, split redemptions) for usability testing."
  },
  "modal-launchpad": {
    tag: "03 / LAUNCHPAD — Creative Tools · SaaS Onboarding",
    title: "Build by Seeing, Not by Filling Forms",
    sections: [
      {
        heading: "1. Problem & Research Discovery",
        body: "Merchants frequently abandon loyalty program setup wizards because filling out 15+ disconnected form fields without seeing the end customer experience feels overwhelming."
      },
      {
        heading: "2. Concept Exploration (3 Directions)",
        body: "Compared (A) a linear 6-step form wizard, (B) a prompt-only chat setup, and (C) a template-assisted Visual Builder with a synchronized Live Shopper Preview. Selected Option C to combine starter speed with full visual control."
      },
      {
        heading: "3. Design System & Direct Manipulation",
        body: "Architected a multi-state Figma component library (auto-layout rule cards, color/spacing tokens, hover/focus/error states). Merchants drag cards onto a dot-grid canvas, edit reward values inline, and receive instant margin guardrail warnings."
      },
      {
        heading: "4. Validation & Key Iteration",
        body: "Observed first-time users completing setup in under 2 minutes. Added visible drag handles and an Undo/Redo history bar after watching testers experiment freely with reward thresholds."
      }
    ],
    aiNote: "AI Workflow Note: Translated Figma component states into a working React/JS interactive builder in VS Code so stakeholders could test live drag-and-drop and guardrail validation."
  }
};

const modal = document.getElementById("case-study-modal");
const modalTag = document.getElementById("modal-tag");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal");

document.querySelectorAll(".open-case-study").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-target");
    const data = caseStudies[key];
    if (!data) return;

    modalTag.textContent = data.tag;
    modalBody.innerHTML = `
      <h2 style="font-size: 1.75rem; margin-bottom: 24px;">${data.title}</h2>
      ${data.sections
        .map(
          (sec) => `
        <div class="case-section">
          <h4>${sec.heading}</h4>
          <p>${sec.body}</p>
        </div>
      `
        )
        .join("")}
      <div class="ai-callout">
        <p style="font-size: 0.9rem; color: #111827;"><strong>${data.aiNote}</strong></p>
      </div>
    `;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});
