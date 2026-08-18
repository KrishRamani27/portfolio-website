// Single source of truth for portfolio content.
// Content synced from KR_Resume.pdf (Aug 2026).

export const PROFILE = {
  name: "Krish Ramani",
  tagline: "CS junior at Rutgers building ML systems and shipping them.",
  site: "https://itskrishramani.vercel.app",
  links: {
    github: "https://github.com/KrishRamani27",
    linkedin: "https://www.linkedin.com/in/krishramani27/",
    email: "krishbrd1@gmail.com",
    // Drop the PDF at public/KR_Resume.pdf and set this to "/KR_Resume.pdf".
    // Left null so the site never ships a link to a missing file.
    resume: null,
  },
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "now", label: "Now" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Toolkit" },
];

export const HERO = {
  role: "ML / AI Engineer",
  intro:
    "I'm a junior at Rutgers studying computer science. I like machine learning, but I like it most when the model ends up somewhere a person can actually open it.",
  stats: [
    { k: "focus", v: "ML / AI engineering" },
    { k: "shipped", v: "3 deployed projects" },
    { k: "gpa", v: "3.91" },
    { k: "starting sep", v: "research + teaching" },
    { k: "seeking", v: "Summer 2027 internship", signal: true },
  ],
  contents:
    "Three projects you can open right now, two Rutgers roles starting in September, and an honest list of what I'm still stuck on.",
};

export const ABOUT = {
  body: [
    "I'm a Computer Science junior at Rutgers, minoring in Economics. Most of my time goes to machine learning, though the part that actually hooks me is what comes after the model works: getting it behind an API, into a container, and onto a URL someone can open.",
    "So none of my projects are notebooks. MedRisk has a FastAPI service and a React frontend. ArXiv Navigator runs in Docker on Hugging Face Spaces. Patchwork sandboxes the code it writes. Training the model is the fun part, but shipping it is where I've learned the most.",
    "This September I start two things at Rutgers: computational research at Robert Wood Johnson Medical School, writing image-analysis pipelines for microscopy data, and teaching Data Structures as a Learning Assistant to about eighty students a week.",
  ],
  facts: [
    { k: "Major", v: "Computer Science" },
    { k: "Minor", v: "Economics" },
    { k: "Class of", v: "2028" },
    { k: "GPA", v: "3.91", mono: true },
  ],
  coursework: [
    "Data Structures",
    "Discrete Structures I & II",
    "Computer Architecture",
    "Introduction to Artificial Intelligence",
    "Introduction to Data Science",
    "Data Management for Data Science",
  ],
  certification: {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online",
    when: "May 2026",
  },
};

export const PROJECTS = [
  {
    name: "MedRisk AI",
    blurb: "Heart disease risk, with its reasoning shown",
    when: "May 2026",
    description:
      "Predicts heart disease risk from the 918-patient heart failure dataset. XGBoost gets 0.92 ROC-AUC on a held-out split. The part I cared about more is the SHAP layer, which shows which factors pushed a given prediction up or down, so someone without an ML background can see why the number came out the way it did.",
    hard: "Reporting ROC-AUC instead of accuracy. The classes are imbalanced enough that accuracy looked great and meant very little.",
    metrics: [
      { label: "roc-auc", value: "0.92" },
      { label: "dataset", value: "918 patients" },
      { label: "explainability", value: "SHAP" },
    ],
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "React", "Render", "Vercel"],
    links: {
      live: "https://medrisk-ai-three.vercel.app",
      repo: "https://github.com/KrishRamani27/medrisk-ai",
    },
    status: "live",
  },
  {
    name: "ArXiv Navigator",
    blurb: "Answers grounded in real papers",
    when: "June 2026",
    description:
      "Ask a question and get an answer grounded in actual arXiv papers rather than whatever the model half-remembers. It embeds 200 CS abstracts locally with all-MiniLM-L6-v2, pulls the top 3 chunks out of Pinecone, and has Claude synthesize from those. End to end it comes back in about 2.4 seconds at p50.",
    hard: "I went with local embeddings instead of an embeddings API so a query costs nothing to run. More setup, but it means I can leave the thing switched on.",
    metrics: [
      { label: "corpus", value: "200 abstracts" },
      { label: "p50 latency", value: "2.4s" },
      { label: "vector db", value: "Pinecone" },
    ],
    stack: [
      "Python",
      "sentence-transformers",
      "Pinecone",
      "Claude API",
      "FastAPI",
      "Docker",
      "React",
    ],
    links: {
      live: "https://arxiv-navigator.vercel.app",
      repo: "https://github.com/KrishRamani27/arxiv-navigator",
    },
    status: "live",
  },
  {
    name: "Patchwork",
    blurb: "Three agents that repair their own code",
    when: "June 2026",
    description:
      "A writer agent turns a plain-English task into code, a runner executes it, and a fixer reads the traceback and patches. They loop up to five times. On a 25-case benchmark I wrote, it fixed 24 and failed honestly on the last one instead of handing back something unverified. Generated code runs in Docker containers with no network access.",
    hard: "The tests come from the user, not the model. Letting an LLM write its own tests and then grade itself against them produces very confident nonsense.",
    metrics: [
      { label: "benchmark", value: "24 / 25" },
      { label: "max iterations", value: "5" },
      { label: "sandbox", value: "Docker, no network" },
    ],
    stack: ["Python", "LangGraph", "Claude API", "FastAPI", "Docker", "React", "Render"],
    links: {
      live: "https://patchwork-hazel.vercel.app",
      repo: "https://github.com/KrishRamani27/patchwork",
    },
    status: "live",
  },
];

export const NOW = {
  updated: "August 2026",
  items: [
    {
      title: "Making ArXiv Navigator's retrieval better",
      detail:
        "Cross-encoder reranking gives better results and costs about 400ms. I want it under 100. Right now I'm losing that fight. Next attempt is a smaller model and a semantic cache.",
    },
    {
      title: "Building an evaluation harness I actually trust",
      detail:
        "Reading the output and going \"yeah that looks right\" stops working almost immediately. I'm building a proper retrieval eval so I can tell whether a change actually helped or I just got lucky with the query I happened to type.",
    },
    {
      title: "Applying for Summer 2027",
      detail:
        "Looking for an ML or AI engineering internship. If you're hiring, my inbox is open and I answer fast.",
    },
  ],
};

export const EXPERIENCE = [
  {
    role: "Research Assistant",
    org: "Rutgers Robert Wood Johnson Medical School",
    location: "New Brunswick, NJ",
    when: "Sep 2026",
    incoming: true,
    tags: ["Python", "NumPy", "image segmentation", "microscopy"],
    detail:
      "Selected to do computational research under Dr. Eleanna Kara, building Python image-analysis pipelines for fluorescence microscopy data in neurodegenerative disease research. I'm writing segmentation and thresholding pipelines in NumPy to quantify fluorescence signal across images, replacing measurement that was being done by hand.",
  },
  {
    role: "Learning Assistant, Data Structures",
    org: "Rutgers University",
    location: "New Brunswick, NJ",
    when: "Sep 2026",
    incoming: true,
    tags: ["Java", "data structures", "algorithms", "teaching"],
    detail:
      "I lead weekly recitations for CS 112 — stacks, queues, linked lists, trees and Big-O — for about eighty students. It was a competitive process to get on the staff, and I mostly took it because explaining this stuff out loud is the fastest way to find out what you only half-understand.",
  },
  {
    role: "Product Marketing Fellow",
    org: "Blueprint",
    location: "New Brunswick, NJ",
    when: "Oct – Dec 2025",
    honor: "1st place",
    tags: ["go-to-market", "positioning", "cross-functional"],
    detail:
      "Built the go-to-market pitch for a product launch with a cross-functional team, and we won the fellowship. Not an engineering role, but it taught me how to explain a technical thing to people who don't want the technical version.",
  },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "SQL (PostgreSQL)", "Java", "C/C++", "HTML/CSS"],
  },
  {
    group: "Machine Learning & AI",
    items: [
      "Machine Learning",
      "Computer Vision",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "XGBoost",
      "scikit-learn",
      "SHAP",
      "sentence-transformers",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "FastAPI", "Flask", "pandas", "NumPy", "Matplotlib"],
  },
  {
    group: "Data & Tools",
    items: [
      "Pinecone (vector database)",
      "Docker",
      "Git",
      "Claude API",
      "Render",
      "Vercel",
      "Hugging Face Spaces",
      "VS Code",
      "PyCharm",
    ],
  },
];
