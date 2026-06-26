// Single source of truth for portfolio content.
// PLACEHOLDER markers flag values for Krish to swap later.

export const PROFILE = {
  name: "Krish Ramani",
  tagline: "CS junior at Rutgers building ML/AI systems and full-stack applications.",
  // PLACEHOLDER: drop a real headshot at /public/headshot.jpg and set photo below.
  photo: "public/headshot.png",
  links: {
    github: "https://github.com/KrishRamani27",
    linkedin: "https://www.linkedin.com/in/krishramani27/",
    // PLACEHOLDER: replace with real email if you want a mailto in the footer.
    email: "krishbrd1@gmail.com",
  },
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "now", label: "Now" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export const ABOUT = {
  body: [
    "I'm a Computer Science junior at Rutgers University (Class of 2028), minoring in Economics and carrying a 3.91 GPA. I'm a software engineer who builds production systems end-to-end — grounded in core CS fundamentals, with a specialty in ML/AI.",
    "My projects aren't models stuck in a notebook. Each is a complete application: FastAPI backends, React frontends, Dockerized services, REST APIs, and real deployment. I care as much about system design, clean architecture, and shipping reliably as I do about the model itself.",
    "Across them I've worked through model training, RAG pipelines, and multi-agent systems. This fall I'm joining the Data Structures (CS 112) teaching staff as a Learning Assistant — reinforcing the fundamentals every week.",
  ],
  facts: [
    { k: "Major", v: "Computer Science" },
    { k: "University", v: "Rutgers" },
    { k: "Class of", v: "2028" },
    { k: "GPA", v: "3.91", mono: true },
  ],
};

export const PROJECTS = [
  {
    name: "MedRisk AI",
    blurb: "Heart disease risk predictor",
    description:
      "An XGBoost model that predicts heart-disease risk and explains every prediction with SHAP, so a clinician sees which factors drove the score — not just the number.",
    metrics: [
      { label: "accuracy", value: "92%" },
      { label: "model", value: "XGBoost" },
      { label: "explainability", value: "SHAP" },
    ],
    stack: ["XGBoost", "SHAP", "FastAPI", "React", "Render", "Vercel"],
    deployment: "FastAPI backend on Render · React frontend on Vercel",
    links: {
      live: "https://medrisk-ai-three.vercel.app",
      repo: "https://github.com/KrishRamani27/medrisk-ai",
    },
    status: "live",
  },
  {
    name: "ArXiv Navigator",
    blurb: "RAG search over ArXiv abstracts",
    description:
      "A full-stack retrieval-augmented generation app over ArXiv abstracts. all-MiniLM-L6-v2 embeddings are indexed in Pinecone; the Claude API generates grounded answers from the retrieved context.",
    metrics: [
      { label: "embeddings", value: "MiniLM-L6" },
      { label: "vector db", value: "Pinecone" },
      { label: "generation", value: "Claude API" },
    ],
    stack: [
      "sentence-transformers",
      "Pinecone",
      "Claude API",
      "FastAPI",
      "Docker",
      "React",
    ],
    deployment:
      "Dockerized FastAPI backend on HuggingFace Spaces · React frontend on Vercel",
    links: {
      live: "https://arxiv-navigator.vercel.app",
      repo: "https://github.com/KrishRamani27/arxiv-navigator",
    },
    status: "live",
  },
  {
    name: "Patchwork",
    blurb: "Self-correcting multi-agent code generation",
    description:
      "A multi-agent system on LangGraph that writes code, runs it, and repairs its own failures. Three agents — Writer turns a plain-English task into code, Runner executes it against human-provided tests in a Docker/subprocess sandbox, Fixer reads the errors and patches. A state graph routes between them on a bounded retry loop that fails honestly rather than returning broken output.",
    metrics: [
      { label: "agents", value: "Writer · Runner · Fixer" },
      { label: "orchestration", value: "LangGraph" },
      { label: "sandbox", value: "Docker" },
    ],
    stack: ["LangGraph", "FastAPI", "Docker", "React", "Vite", "Render"],
    deployment: "FastAPI backend on Render · React/Vite frontend on Vercel",
    links: {
      live: "https://patchwork-hazel.vercel.app",
      repo: "https://github.com/KrishRamani27/patchwork",
    },
    status: "live",
  },
];

export const NOW = [
  {
    title: "Extending ArXiv Navigator",
    detail:
      "Building out the RAG pipeline with a retrieval evaluation harness, semantic caching, and cross-encoder reranking.",
  },
  {
    title: "Summer 2027 internship applications",
    detail:
      "Prepping for ML/AI engineering internship applications.",
  },
];

export const EXPERIENCE = [
  {
    role: "Incoming Learning Assistant — Data Structures (CS 112)",
    org: "Rutgers University",
    location: "New Brunswick, NJ",
    when: "May 2026 – Present",
    incoming: true,
    detail:
      "Teaching 80+ students a week through core data structures — stacks, queues, linked lists, and binary trees — and experimenting with ways to make the classroom more collaborative.",
  },
  {
    role: "Orientation Leader (NSO)",
    org: "Rutgers University",
    location: "New Brunswick, NJ",
    when: "Apr 2026 – Present",
    detail:
      "Leading cohorts of 15–20 first-years through multi-day orientation, running cross-venue logistics and mentorship that drove 90%+ attendance.",
  },
  {
    role: "Product Marketing Fellow",
    org: "Blueprint Rutgers",
    location: "New Brunswick, NJ",
    when: "Oct – Dec 2025",
    honor: "1st place",
    detail:
      "Built the go-to-market pitch for a product launch with a cross-functional team — audience segmentation, competitive positioning, and brand narrative.",
  },
];

export const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript"] },
  {
    group: "ML / AI",
    items: [
      "LangGraph",
      "Claude API",
      "XGBoost",
      "SHAP",
      "Pinecone",
      "sentence-transformers",
      "RAG",
    ],
  },
  { group: "Data", items: ["NumPy", "pandas", "scikit-learn", "Jupyter"] },
  { group: "Backend", items: ["FastAPI", "Docker"] },
  { group: "Frontend", items: ["React", "Tailwind"] },
  { group: "Platforms", items: ["Vercel", "Render", "HuggingFace Spaces"] },
  { group: "Tools", items: ["Git", "GitHub", "REST APIs", "Linux / Bash"] },
];
