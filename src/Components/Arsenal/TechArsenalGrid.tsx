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
    description: "Server-side logic, APIs, and microservices.",
    icon: Server,
    techs: ["Node.js", "Express.js", "TypeScript", "Python"]
  },
  {
    title: "FRONTEND INTERFACE",
    description: "Client-side rendering and user experience.",
    icon: Layout,
    techs: ["React.js", "Tailwind CSS", "Material UI", "Vite", "TypeScript"]
  },
  {
    title: "DATA PERSISTENCE",
    description: "Relational, NoSQL, and in-memory caching.",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Mongoose", "Prisma"]
  },
  {
    title: "DEVOPS & INFRASTRUCTURE",
    description: "Deployment, containerization, and version control.",
    icon: Cloud,
    techs: ["Docker", "Docker Compose", "Git", "GitHub", "Vercel", "Render"]
  },
  {
    title: "AI & COMPUTER VISION",
    description: "Machine learning models, object detection, and OCR.",
    icon: Cpu,
    techs: ["YOLOv8", "OpenCV", "Paddle OCR", "Python"]
  },
  {
    title: "FUNDAMENTALS & SECURITY",
    description: "Authentication, architecture patterns, and protocols.",
    icon: Shield,
    techs: ["REST APIs", "JWT", "Passport.js", "MVC Architecture", "OOP"]
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
          className="group bg-panel rounded-2xl p-6 border border-white/5 shadow-2xl hover:border-accent/50 transition-all relative overflow-hidden flex flex-col"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-colors pointer-events-none" />

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
