export type Project = {
  name: string;
  period: string;
  category: string;
  summary: string;
  stack: string[];
  links: {
    code?: string;
    data?: string;
    image?: string;
    live?: string;
  };
  outcomes: string[];
};

export const profile = {
  name: "Damodar Yadav",
  role: "AI/ML Engineer · Data Science · Data Engineering",
  location: "Mumbai, Maharashtra, India",
  avatar: "https://avatars.githubusercontent.com/u/115637298?v=4",
  email: "damodarryadav@gmail.com",
  phone: "+91-9082362144",
  summary:
    "I build production-minded AI systems across ML, deep learning, LLM/RAG, and data workflows. My focus is simple: ship reliable models, clean pipelines, and useful products.",
  links: {
    resume:
      "https://drive.google.com/file/d/1OIE9ZRhk-WUAHaGofsJiqILq6lrHY1ih/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/damodar-yadav-690425177/",
    github: "https://github.com/daemonX10",
    leetcode: "https://leetcode.com/u/damodarryadav/",
    kaggle: "https://www.kaggle.com/yadavdamodar",
    takeuforward: "https://takeuforward.org/profile/daemonX",
    whatsapp: "https://wa.me/919082362144",
    tel: "tel:+919082362144",
    mailto: "mailto:damodarryadav@gmail.com",
  },
};

export const primarySocialOrder = [
  {
    label: "GitHub",
    href: "https://github.com/daemonX10",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/damodar-yadav-690425177/",
  },
  {
    label: "TakeUForward",
    href: "https://takeuforward.org/profile/daemonX",
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/yadavdamodar",
  },
];

export const quickProof = [
  { label: "LeetCode Rating", value: "1732" },
  { label: "Problems Solved", value: "601+" },
  { label: "Kaggle Public Profile", value: "Active" },
  { label: "Education", value: "BE CSE · CGPA 9.2" },
];

export const proofSources = [
  {
    source: "LeetCode",
    metric: "Contest Rating",
    value: "1732",
    note: "201+ solved with top contest percentile highlights.",
    href: "https://leetcode.com/u/damodarryadav/",
  },
  {
    source: "TakeUForward",
    metric: "DSA Practice",
    value: "500+",
    note: "Consistent DSA profile linked for interview readiness.",
    href: "https://takeuforward.org/profile/daemonX",
  },
  {
    source: "Kaggle",
    metric: "Public AI Profile",
    value: "Datasets · Models · Code",
    note: "Active public profile with practical DS/ML artifacts.",
    href: "https://www.kaggle.com/yadavdamodar",
  },
  {
    source: "Bitgrit",
    metric: "Engineer Salary Challenge",
    value: "3rd / 600+",
    note: "Private leaderboard result from resume project section.",
    href: "https://github.com/daemonX10/engineer-salary",
  },
];

export const keyAchievements = [
  "Amazon ML Challenge rank 102.",
  "Tree Canopy Detection competition rank 25 among 600+ global participants.",
  "Open-source contributor across Hacktoberfest 2023 and 2024, SSOC'24, and ToolJet ecosystem contributions.",
  "Led a team of 4 developers in college and national-level hackathons.",
];

export const projects: Project[] = [
  {
    name: "Sensor Fault Detection - End-to-End ML Pipeline",
    period: "Apr 2024",
    category: "MLOps + Production ML",
    summary:
      "Built a full ML lifecycle pipeline from ingestion to deployment with experiment tracking, CI/CD, and schema-safe inference.",
    stack: ["Python", "scikit-learn", "MLflow", "FastAPI", "GitHub Actions", "AWS-ready"],
    links: {
      code: "https://github.com/daemonX10/Sensor-Fault-Detection",
      image: "/projects/sensor-fault.svg",
    },
    outcomes: [
      "Automated data validation, feature transformation, model training, and evaluation.",
      "Added MLflow-based experiment reproducibility and model versioning.",
      "Delivered CI/CD deployment flow with real-time and batch-ready API inference.",
    ],
  },
  {
    name: "Engineers' Salary Prediction - Bitgrit Competition",
    period: "2024",
    category: "Data Science + Competition",
    summary:
      "Designed and optimized a structured-data classification workflow on high-dimensional tabular and vectorized text features.",
    stack: ["Python", "Pandas", "scikit-learn", "EDA", "Feature Engineering"],
    links: {
      code: "https://github.com/daemonX10/engineer-salary",
      data: "https://www.kaggle.com/yadavdamodar",
      image: "/projects/salary-prediction.svg",
    },
    outcomes: [
      "Performed deep analysis across imbalance, temporal trends, and location effects.",
      "Optimized against the competition metric and achieved top private-board rank.",
      "Ranked 3rd among 600+ participants on private leaderboard (as reported).",
    ],
  },
  {
    name: "Intelligent Medical Assistant with RAG",
    period: "Jun 2023",
    category: "LLM + RAG",
    summary:
      "Implemented an LLM-powered medical Q&A assistant using retrieval-augmented generation and semantic search.",
    stack: ["Llama2 70B", "LangChain", "Pinecone", "FastAPI", "NLP"],
    links: {
      code: "https://github.com/daemonX10",
      image: "/projects/medical-rag.svg",
    },
    outcomes: [
      "Built end-to-end RAG orchestration with embedding-driven retrieval.",
      "Added NLP analysis flows like sentiment and entity extraction on queries.",
      "Created insights loop for iterative model and prompt improvements.",
    ],
  },
  {
    name: "CEREBUS AI CyberShield",
    period: "2025-2026",
    category: "Security AI",
    summary:
      "Developed an AI-powered malware analysis direction combining static and dynamic signals with explainability.",
    stack: ["Python", "XGBoost", "SHAP", "Flask", "Cyber AI"],
    links: {
      code: "https://github.com/daemonX10/CEREBUS-AI-CyberShield",
      image: "/projects/cerebus.svg",
    },
    outcomes: [
      "Designed hybrid detection strategy for robust decisioning.",
      "Focused on explainable outputs to improve trust and triage speed.",
      "Packaged as practical applied AI system rather than notebook-only prototype.",
    ],
  },
  {
    name: "Tree Canopy Detection",
    period: "2024",
    category: "Computer Vision + Segmentation",
    summary:
      "Worked on satellite-image canopy detection using transformer-oriented segmentation workflows and competition-style evaluation.",
    stack: ["Python", "Vision Transformers", "Segmentation", "Geospatial Data"],
    links: {
      code: "https://github.com/daemonX10/Tree-canopy-detection",
      data: "https://www.kaggle.com/yadavdamodar",
      image: "/projects/tree-canopy.svg",
    },
    outcomes: [
      "Developed robust preprocessing and augmentation for satellite imagery.",
      "Focused on segmentation quality under sparse and noisy canopy regions.",
      "Connected model iteration to competition-driven performance tracking.",
    ],
  },
  {
    name: "AI-ML Engineer Roadmap",
    period: "2025",
    category: "Learning System + Knowledge Engineering",
    summary:
      "Created a structured AI/ML learning workspace spanning Python foundations through NLP, LLMs, CUDA, and big data modules.",
    stack: ["Python", "Jupyter", "ML Curriculum", "NLP", "Big Data"],
    links: {
      code: "https://github.com/daemonX10/AI-ML-Engineer-Roadmap",
      image: "/projects/roadmap.svg",
    },
    outcomes: [
      "Organized end-to-end roadmap to accelerate self and peer upskilling.",
      "Codified practical experiments and reusable references in one place.",
      "Serves as a public knowledge base linked to project execution.",
    ],
  },
  {
    name: "Learning Management System",
    period: "2025",
    category: "Full-Stack Product Engineering",
    summary:
      "Built a modular LMS with authentication, payments, and course workflows to support real user journeys.",
    stack: ["MERN", "Redux", "Node.js", "MongoDB", "Authentication"],
    links: {
      code: "https://github.com/daemonX10/Learning-Management-System",
      image: "/projects/lms.svg",
    },
    outcomes: [
      "Implemented core modules for auth, payment, and course management.",
      "Shipped a practical full-stack product architecture, not just isolated pages.",
      "Strengthened backend and system-design depth complementary to AI engineering.",
    ],
  },
  {
    name: "Cytologia",
    period: "2026",
    category: "Applied AI Prototype",
    summary:
      "Explored an applied AI direction in the biomedical problem space with rapid prototyping and iterative experimentation.",
    stack: ["Python", "Jupyter", "Model Prototyping", "Data Exploration"],
    links: {
      code: "https://github.com/daemonX10/Cytologia",
      image: "/projects/cytologia.svg",
    },
    outcomes: [
      "Established a reproducible experimentation structure.",
      "Tested model and data assumptions quickly with notebook-first workflows.",
      "Kept scope optimized for fast research feedback loops.",
    ],
  },
];

export const experience = [
  {
    title: "Database Developer (Upcoming)",
    company: "Media.net",
    period: "Upcoming",
    details: [
      "Preparing to work on scalable data workflows and backend data systems in a high-traffic environment.",
      "Focusing on production-grade database design, query performance, and data reliability practices.",
      "Bringing AI/ML + data engineering perspective to practical business data pipelines.",
    ],
  },
  {
    title: "AI Engineer Intern",
    company: "Polycosmos",
    period: "Nov 2024 - Jan 2025",
    details: [
      "Implemented advanced computer vision methods including 3D Gaussian Splatting and NeRF.",
      "Experimented with diffusion and GAN workflows for 3D generation pipelines.",
      "Benchmarked architecture and hyperparameter choices on GPU and documented findings.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Prodigy Infotech",
    period: "Internship",
    details: [
      "Built and evaluated machine learning prototypes for applied use-cases using Python and scikit-learn workflows.",
      "Worked on data preprocessing, feature engineering, and iterative model refinement with measurable baselines.",
      "Collaborated on deployment-oriented thinking to move projects from experimentation toward product-ready patterns.",
    ],
  },
];

export const skillGroups = [
  {
    group: "AI / ML / DL",
    image: "/skills/ai-ml.svg",
    summary: "Modeling, deep learning, and LLM systems from experimentation to deployment.",
    skills: [
      "Transformers",
      "CNNs",
      "RNNs",
      "GANs",
      "LLMs",
      "RAG",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    group: "Data Science",
    image: "/skills/data-science.svg",
    summary: "Insight extraction, statistical reasoning, and business-focused data storytelling.",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Statistics",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    group: "Data Engineering",
    image: "/skills/data-engineering.svg",
    summary: "Reliable pipelines, storage systems, and scalable processing for ML-ready data.",
    skills: [
      "SQL",
      "MySQL",
      "MongoDB",
      "Spark",
      "Data Pipelines",
      "Data Validation",
      "Vector Databases",
    ],
  },
  {
    group: "MLOps / Backend / Cloud",
    image: "/skills/mlops-cloud.svg",
    summary: "Production delivery stack for model services, automation, and cloud deployment.",
    skills: [
      "FastAPI",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "MLflow",
      "AWS EC2",
      "AWS S3",
    ],
  },
];

export const socialCards = [
  {
    label: "GitHub",
    blurb: "Repositories, pinned projects, open-source footprint, contribution graph.",
    href: "https://github.com/daemonX10",
  },
  {
    label: "LinkedIn",
    blurb: "Professional profile, education context, and recruiter-friendly summary.",
    href: "https://www.linkedin.com/in/damodar-yadav-690425177/",
  },
  {
    label: "TakeUForward",
    blurb: "DSA profile and coding journey log for interview preparation consistency.",
    href: "https://takeuforward.org/profile/daemonX",
  },
  {
    label: "Kaggle",
    blurb: "Public AI/ML profile with datasets, models, notebooks, and activity.",
    href: "https://www.kaggle.com/yadavdamodar",
  },
  {
    label: "LeetCode",
    blurb: "Algorithmic strength, contest rating, and multi-language problem solving.",
    href: "https://leetcode.com/u/damodarryadav/",
  },
];
