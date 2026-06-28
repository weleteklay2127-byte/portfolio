export interface NavLink {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  features: string[]
  responsibilities?: string
  badge?: string
  year?: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  description: string
  location?: string
  type?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Testimonial {
  quote: string
  name: string
  title: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const roles: string[] = [
  'AI / ML Researcher',
  'NLP Engineer',
  'Computer Science Graduate',
]

export const socials = {
  github: 'https://github.com/WeleTeklay',
  linkedin: 'https://www.linkedin.com/in/weldesemayat-teklay-66000019a',
  email: 'mailto:weleteklay2127@gmail.com',
}

export const stats = [
  { value: '3.91', label: 'GPA / 4.0' },
  { value: '98%', label: 'Thesis Validation Rate' },
  { value: '10K+', label: 'Utterances Curated' },
  { value: '2026', label: 'Conference Presenter' },
]

export const projects: Project[] = [
  {
    title: 'Graph-Grounded Temporal RAG',
    description:
      'Retrieval-Augmented Generation system that integrates a Neo4j temporal knowledge graph to resolve document version conflicts — ensuring legally active answers at query time.',
    badge: 'Bachelor Thesis',
    year: '2026',
    technologies: ['Python', 'Neo4j', 'ChromaDB', 'Llama 3.2', 'Ollama', 'BM25'],
    features: [
      'Hybrid retrieval: dense + BM25 + keyword via RRF',
      'Cross-encoder reranking pipeline',
      'Fully offline, privacy-preserving inference',
      '98% diagnostic validation rate',
    ],
  },
  {
    title: "Geez Speech-to-Text with NLP",
    description:
      "Fine-tuned Whisper-Small for low-resource Ge'ez speech recognition on a custom dataset — advancing ASR for an under-served ancient language.",
    badge: 'Research Project',
    year: '2025',
    technologies: ['Python', 'Whisper', 'HuggingFace', 'PyTorch', 'WER/CER'],
    features: [
      'Custom dataset curation & preprocessing',
      'WER / CER evaluation metrics',
      'Error pattern analysis for robustness',
      'Reproducible methodology documented',
    ],
  },
  {
    title: 'Tigrinya ASR Benchmarking',
    description:
      'Curated a 10,000+ utterance Tigrinya speech corpus from diverse domains and established baseline ASR benchmarks, presented at AI4SD 2026.',
    badge: 'ML Research Intern',
    year: '2025–26',
    technologies: ['Python', 'ASR Systems', 'Acoustic Analysis', 'Lesan.AI'],
    features: [
      '10,000+ utterance corpus across domains',
      'Linguistic & acoustic error analysis',
      'Baseline benchmarks for Tigrinya ASR',
      'Presented at AI4SD 2026, Mekelle University',
    ],
  },
]

export const researchInterests: string[] = [
  'Natural Language Processing',
  'Speech Recognition',
  'Low-Resource Languages',
  'Retrieval-Augmented Generation',
  'Knowledge Graphs',
  'Humanitarian AI',
]

export const experience: ExperienceItem[] = [
  {
    role: 'Machine Learning Research Intern',
    organization: 'Lesan.AI',
    period: 'Oct 2025 — Jan 2026',
    location: 'Berlin, Germany (Remote)',
    type: 'Internship',
    description:
      'Curated a 10,000+ utterance Tigrinya speech corpus, conducted ASR error analysis, and established baseline performance benchmarks. Results presented at AI4SD 2026.',
  },
  {
    role: 'Machine Learning Trainer',
    organization: 'Mekelle American Corner (MAC)',
    period: 'Jul — Sep 2025',
    location: 'Mekelle, Ethiopia',
    type: 'Volunteer',
    description:
      'Designed and delivered ML training covering supervised/unsupervised learning, neural networks, and evaluation. Led hands-on Python exercises.',
  },
  {
    role: 'Academic Support Volunteer',
    organization: 'Tigray Development Association & Education Bureau',
    period: 'Jul — Aug 2025',
    location: 'Mekelle, Ethiopia',
    type: 'Volunteer',
    description:
      'Delivered structured academic support and exam preparation for Grade 12 students through guided problem-solving and revision sessions.',
  },
  {
    role: 'Student Union Vice President',
    organization: 'Mekelle Institute of Technology',
    period: '2023 — 2024',
    location: 'Mekelle, Ethiopia',
    type: 'Leadership',
    description:
      'Led student governance across the institute, coordinating initiatives in academic advocacy and community engagement.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'C / C++', 'SQL', 'ReactJS'],
  },
  {
    category: 'AI & ML',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'NLP & Speech',
    skills: ['Whisper', 'HuggingFace', 'ChromaDB', 'BM25', 'Neo4j', 'Ollama'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Linux', 'Google Colab', 'VS Code'],
  },
]

export const achievements: string[] = [
  'GPA 3.91 / 4.0',
  'AI4SD 2026 Conference Presenter',
  'DeepLearning.AI Specializations',
  'IELTS B2 English',
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'A rare combination of strong research instincts and practical engineering skill. Delivers thoughtful, reliable solutions.',
    name: 'Project Collaborator',
    title: 'Research Partner',
  },
  {
    quote:
      'Driven, curious, and committed to building technology that genuinely helps people in his community.',
    name: 'Yaecob Girmay Gezahegn',
    title: 'Assistant Professor, Mekelle University · Meta Fellow (2019)',
  },
]
