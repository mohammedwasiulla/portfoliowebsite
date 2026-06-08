import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Vercel", level: 100, category: "tools" },
  { name: "Render", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  // Gen AI
  { name: "Prompt Engineering", level: 88, category: "genai" },
  { name: "RAG (Retrieval-Augmented Generation)", level: 85, category: "genai" },
  { name: "LLM Integration (OpenAI / Claude API)", level: 82, category: "genai" },
  { name: "AI Agents & Multi-Agent Systems", level: 75, category: "genai" },
  { name: "Vector Databases (FAISS / Pinecone)", level: 80, category: "genai" },
  { name: "LangChain / LlamaIndex", level: 72, category: "genai" },
  { name: "Fine-Tuning & LLMOps", level: 68, category: "genai" },
  { name: "Multimodal AI", level: 70, category: "genai" },
];

const categories = ["all", "frontend", "backend", "tools", "genai"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* rest of your JSX unchanged */}
      </div>
    </section>
  );
};
