import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../Utils/animations';
import { Server, Layout, Database, Cloud, Shield, Code2, Cpu } from 'lucide-react';

const battlefields = [
  {
    title: "ALGORITHMIC BATTLEFIELD",
    description: "Core problem solving, DSA, and low-level execution.",
    icon: Code2,
    techs: ["C++", "C", "Data Structures", "Algorithms"]
  },
  {
    title: "BACKEND ARCHITECTURE",
    description: "Server-side logic, distributed patterns, and real-time APIs.",
    icon: Server,
    techs: ["Node.js", "Express.js", "TypeScript", "Python", "Socket.IO", "Saga Orchestrator", "Stripe API"]
  },
  {
    title: "FRONTEND INTERFACE",
    description: "Client-side rendering, data visualization, and performance.",
    icon: Layout,
    techs: ["React 19", "Tailwind CSS v4", "Vite", "TypeScript", "Recharts", "Framer Motion", "React.lazy()"]
  },
  {
    title: "DATA PERSISTENCE",
    description: "Relational, NoSQL, and low-latency in-memory indexing.",
    icon: Database,
    techs: ["PostgreSQL 18", "Prisma ORM", "MongoDB", "MySQL", "In-Memory Prefix Trie", "Okapi BM25 Index", "Redis"]
  },
  {
    title: "DEVOPS & INFRASTRUCTURE",
    description: "Deployment, containerization, edge routing, and observability.",
    icon: Cloud,
    techs: ["Docker", "Docker Compose", "Nginx (Edge Proxy)", "OpenTelemetry APM", "Multi-Stage Builds", "Git & CI/CD", "Vercel", "Render"]
  },
  {
    title: "AI & COMPUTER VISION",
    description: "Machine learning models, object detection, and OCR.",
    icon: Cpu,
    techs: ["YOLOv8", "OpenCV", "Paddle OCR", "CUDA Inference", "Python"]
  },
  {
    title: "FUNDAMENTALS & SECURITY",
    description: "Authentication, fault-tolerance, and API protection.",
    icon: Shield,
    techs: ["RFC 6585 Rate Limiting", "Multi-Role RBAC", "Zod Validation", "JWT & Bcrypt", "REST APIs", "MVC Architecture", "OOP"]
  }
];

export const TechArsenalGrid = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {battlefields.map((field, idx) => (
        <motion.div
          key={idx}
          variants={fadeUp}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="group bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl hover:border-accent/60 hover:shadow-[0_14px_35px_rgba(255,30,30,0.18)] transition-all duration-300 relative overflow-hidden flex flex-col cursor-default"
        >
          {/* Top Edge Crimson Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />

          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-full blur-[45px] group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10 mb-6">
            <field.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">{field.title}</h3>
            <p className="text-xs text-muted font-mono leading-relaxed opacity-80">{field.description}</p>
          </div>

          <div className="relative z-10 mt-auto flex flex-wrap gap-2">
            {field.techs.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 bg-background border border-white/10 rounded-md text-xs font-mono text-white group-hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
