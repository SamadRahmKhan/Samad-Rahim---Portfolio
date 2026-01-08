import { SectionHeader } from "@/components/SectionHeader";
import { GlassCard } from "@/components/GlassCard";

// Skill data type
interface Skill {
  name: string;
  level: number;
  category: string;
}

// Tool logo data type
interface ToolLogo {
  name: string;
  icon: string;
}

// All skills organized by category
const skills: Skill[] = [
  // Frontend skills
  // Frontend skills
  { name: "HTML", level: 75, category: "Frontend" },
  { name: "CSS", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 65, category: "Frontend" },
  { name: "React", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 70, category: "Frontend" },
  { name: "TypeScript (Basics)", level: 55, category: "Frontend" },
  { name: "Framer Motion (Basics)", level: 50, category: "Frontend" },


  // Backend skills
  { name: "Node.js", level: 45, category: "Backend" },
  { name: "Express.js", level: 60, category: "Backend" },
  { name: "MongoDB ", level: 60, category: "Backend" },


  // Design skills
  { name: "Canva", level: 75, category: "Design" },
  { name: "Figma", level: 50, category: "Design" },
  { name: "UI/UX Design", level: 76, category: "Design" },
  { name: "Prototyping", level: 80, category: "Design" },
  { name: "Design Systems", level: 50, category: "Design" },

  // Tools
  { name: "Git & GitHub", level: 75, category: "Tools" },
  { name: "Vite / npm", level: 70, category: "Tools" },
  { name: "GitHub Pages / Vercel", level: 65, category: "Tools" }

];

// Tool icons to display
const toolLogos: ToolLogo[] = [
  { name: "HTML", icon: "🧱" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "✨" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "TypeScript (Basics)", icon: "📘" },
  { name: "Node.js (Basics)", icon: "🟢" },
  { name: "Figma", icon: "🎯" },
  { name: "Git / GitHub", icon: "📝" },
];


// Category names
const categories = ["Frontend", "Backend", "Design", "Tools"];

// Additional skills list
const otherSkills = [
  "Responsive Design",
  "Basic Accessibility",
  "UI/UX Principles",
  "Problem Solving",
  "Client Communication ",
  "Version Control (Git)",
];


const Skills = () => {
  // Helper function to get skills for a specific category
  const getSkillsByCategory = (categoryName: string): Skill[] => {
    return skills.filter((skill) => skill.category === categoryName);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        {/* ============================================ */}
        {/* TOOL ICONS ROW */}
        {/* ============================================ */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {toolLogos.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <div className="w-16 h-16 glass rounded-xl flex items-center justify-center text-3xl hover:glow-cyan transition-all duration-300">
                {tool.icon}
              </div>
              <span className="text-xs text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* ============================================ */}
        {/* SKILLS BY CATEGORY */}
        {/* ============================================ */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category);

            return (
              <GlassCard key={category} className="h-full">
                {/* Category title */}
                <h3 className="text-xl font-display font-bold gradient-text mb-6">
                  {category}
                </h3>

                {/* Skills list with progress bars */}
                <div className="space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      {/* Skill name and percentage */}
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Glowing dot at the end */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-cyan" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* ============================================ */}
        {/* OTHER SKILLS SECTION */}
        {/* ============================================ */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass rounded-full text-sm hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
