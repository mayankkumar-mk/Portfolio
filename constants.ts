import { Education, Publication, Project, Achievement, Referee } from './types';
import { BookOpen, GraduationCap, Code, Shield, Brain, Database, Award } from 'lucide-react';

export const PROFILE = {
  name: "Mayank Kundalwal",
  role: "PhD Candidate, Computer Science & Engineering",
  institution: "Indian Institute of Technology (IIT) Jodhpur",
  email: "kundalwal.1@iitj.ac.in",
  phone: "+91 9261444448",
  location: "Jodhpur, India",
  summary: "My work focuses on federated learning, representation learning, and medical image analysis, emphasizing reliability and privacy under real-world heterogeneity. I develop methods for selective unlearning, robust optimization, and vector-quantized representations that remain stable under imbalance, noise, and diverse model architectures.",
  image: "./profile.jpg"
};

export const SOCIAL_LINKS = [
  { name: "Google Scholar", url: "#", icon: BookOpen }, // User to update URL
  { name: "LinkedIn", url: "#", icon:  GraduationCap }, // User to update URL
];

export const EDUCATION: Education[] = [
  {
    degree: "PhD, Computer Science & Engineering",
    institution: "Indian Institute of Technology, Jodhpur",
    year: "2019–2025",
    details: "Thesis Submitted, Current Status: Under Review. Topic: Towards Robust Privacy-preserving Federated Learning under Heterogeneous Environments for Medical Imaging Applications."
  },
  {
    degree: "M.Tech, Computer Science & Engineering",
    institution: "NIT Patna",
    year: "2016–2018",
    grade: "CGPA: 8.24",
    details: "Thesis: Privacy-Preservation Framework for Cloud-Based Healthcare Systems."
  },
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Poornima University",
    year: "2012–2016",
    grade: "CGPA: 7.38"
  }
];

export const SKILLS = [
  { category: "Research Interests", items: ["Federated Learning", "Computer Vision", "Representation Learning", "Medical Image Analysis"], icon: Brain },
  { category: "Languages", items: ["Python (Advanced)", "C/C++", "Java"], icon: Code },
  { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "Keras"], icon: Database },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "j1",
    title: "Flame: Federated learning with masked autoencoders and mean-prototypes embedding for sparsely labeled medical images",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "IEEE Transactions on Emerging Topics in Computational Intelligence",
    year: "2025",
    type: "Journal",
    abstract: "We introduce FLAME, a federated learning framework tailored for scenarios with sparsely labeled medical data. By leveraging masked autoencoders for self-supervised pre-training and mean-prototype embeddings for robust class representation, FLAME effectively mitigates the scarcity of labeled data across clients, outperforming state-of-the-art semi-supervised FL methods in medical image classification tasks."
  },
  {
    id: "j2",
    title: "Ar2fl: Anomaly-resistant robust framework for federated learning",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "IEEE Transactions on Artificial Intelligence",
    year: "2025",
    type: "Journal",
    abstract: "This paper presents AR2FL, a robust federated learning framework designed to defend against malicious clients and data poisoning attacks. The proposed method utilizes an anomaly detection mechanism based on client model updates and dynamically adjusts aggregation weights to suppress the influence of adversarial participants, ensuring model convergence and reliability in hostile environments."
  },
  {
    id: "j3",
    title: "An improved privacy preservation technique in health-cloud",
    authors: "Mayank Kumar Kundalwal, Kakali Chatterjee, and Ashish Singh",
    venue: "ICT Express, vol 5, pp 167–172 (Elsevier)",
    year: "2019",
    type: "Journal",
    abstract: "We propose an enhanced privacy-preservation technique for cloud-based healthcare systems. The framework integrates cryptographic primitives with access control policies to ensure secure storage and retrieval of sensitive patient data in the cloud. Experimental results demonstrate improved computational efficiency and security against common attacks compared to existing schemes."
  },
  {
    id: "c1",
    title: "Federated Model Synchronization for Diagnostic Redefinition through a Novel Selective Parameter Unlearning",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    year: "2026",
    type: "Conference",
    abstract: "We address the challenge of diagnostic redefinition in federated learning, where class definitions may evolve over time. We introduce a Selective Parameter Unlearning mechanism that allows the global model to unlearn specific obsolete concepts without compromising performance on retained classes. This synchronization ensures the model remains up-to-date with current medical diagnostic standards."
  },
  {
    id: "c2",
    title: "Client contribution normalization for enhanced federated learning",
    authors: "Mayank Kumar Kundalwal, Anurag Saraswat, Ishan Mishra, and Deepak Mishra",
    venue: "IEEE 21st India Council International Conference (INDICON)",
    year: "2024",
    type: "Conference",
    abstract: "Data heterogeneity across clients often leads to biased global models in federated learning. This paper proposes a client contribution normalization technique that re-weights updates based on the statistical properties of local datasets. This approach ensures a more balanced global model, particularly in settings with significant non-IID data distributions."
  },
  {
    id: "c3",
    title: "Bafl: Federated learning with base ablation for cost effective communication",
    authors: "Mayank Kumar Kundalwal, Anurag Saraswat, Ishan Mishra, and Deepak Mishra",
    venue: "26th International Conference on Pattern Recognition (ICPR)",
    year: "2022",
    type: "Conference",
    abstract: "Communication overhead is a major bottleneck in federated learning. BAFL introduces a base ablation strategy where only essential model updates are transmitted. By pruning redundant parameters before transmission, we achieve significant reduction in communication bandwidth usage while maintaining competitive accuracy compared to full-model aggregation."
  },
  {
    id: "c4",
    title: "A privacy framework in cloud computing for healthcare data",
    authors: "Mayank Kumar Kundalwal, Ashish Singh, and Kakali Chatterjee",
    venue: "International conference on advances in computing, communication control and networking (ICACCCN)",
    year: "2018",
    type: "Conference",
    abstract: "This work outlines a comprehensive privacy framework for healthcare data in cloud environments. It discusses the integration of identity-based encryption and fine-grained access control to protect electronic health records (EHRs) from unauthorized access, addressing key security challenges in cloud-based medical infrastructure."
  },
  {
    id: "u1",
    title: "Context-Aware Hierarchical Swarm Learning for Medical Image Applications",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM)",
    year: "2025",
    type: "Under Review",
    abstract: "We propose a Context-Aware Hierarchical Swarm Learning approach that decentralizes the learning process to edge devices in a hierarchical manner. By incorporating context-awareness, the system adapts dynamically to the computational capabilities and network conditions of swarm nodes, making it highly suitable for large-scale medical imaging applications."
  },
  {
    id: "u2",
    title: "Cross-Model Feature Alignment via Constrained Anchors in Heterogeneous Federated Learning",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "Manuscript Under Preparation",
    year: "2025",
    type: "Under Review",
    abstract: "Addressing model heterogeneity where clients use different architectures, we present a method for Cross-Model Feature Alignment. Using constrained anchors in the feature space, we align the latent representations of diverse local models, enabling effective knowledge transfer and aggregation without requiring uniform model architectures across all clients."
  },
  {
    id: "u3",
    title: "Selective Federated Unlearning through Anchor Editing in Embedding Space",
    authors: "Mayank Kumar Kundalwal and Deepak Mishra",
    venue: "Manuscript Under Preparation",
    year: "2025",
    type: "Under Review",
    abstract: "This manuscript explores the concept of 'Right to be Forgotten' in federated learning. We develop a Selective Federated Unlearning technique that modifies the embedding space using anchor editing. This allows for the precise removal of influence from specific data points or classes from the global model without the need for computationally expensive retraining."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Confidential Defense Project (Indian Army)",
    role: "Researcher",
    duration: "2023–Present",
    description: "Developing long-range moving target detection algorithms using pulse-doppler radar. The project aims to enhance object identification accuracy at distances of approximately 20 km under challenging environmental conditions.",
    highlights: [
      "Radar signal processing",
      "Doppler-based motion analysis",
      "Algorithm prototyping for detection and tracking"
    ],
    confidential: true
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2025",
    title: "Poster Presentation at IndoML",
    description: "\"Graduate Forum\" at IndoML 2025, BITS Pilani – Hyderabad Campus."
  },
  {
    year: "2022",
    title: "Oral Presentation at ICPR",
    description: "Presented \"BAFL\" at ICPR 2022, Montréal, Québec, Canada."
  },
  {
    year: "2023–Present",
    title: "Cyber Volunteer Squad Member",
    description: "Ministry of Home Affairs, Govt. of India. Recognized at G20 Conference on Crime and Security."
  },
  {
    year: "2023–2025",
    title: "Defense R&D Research Funding",
    description: "Indian Army funding for Radar-based Moving Target Detection Project."
  },
  {
    year: "2022",
    title: "Best Teaching Assistant Award",
    description: "For Introduction to Computer Science course."
  },
  {
    year: "2019-2023",
    title: "MoE Doctoral Fellowship",
    description: "Ministry of Education fellowship for PhD Research."
  },
  {
    year: "2016-2018",
    title: "MHRD Fellowship",
    description: "Fellowship for M.Tech Studies."
  }
];

export const REFEREES: Referee[] = [
  {
    name: "Dr. Deepak Mishra",
    title: "Assistant Professor",
    department: "Dept. of CSE",
    institution: "Indian Institute of Technology, Jodhpur",
    email: "dmishra@iitj.ac.in"
  },
  {
    name: "Dr. Suman Kundu",
    title: "Assistant Professor",
    department: "Dept. of CSE",
    institution: "Indian Institute of Technology, Jodhpur",
    email: "suman@iitj.ac.in"
  }
];