import { useState } from "react";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";
import { GlowButton } from "@/components/GlowButton";
import  simplyfy  from "@/LOGO.png";
import  terraCycles  from "@/TerraCycles=LOGO.png";
import designOne from "@/Design=1.png";
import designTwo from "@/Design=2.png";
import designThree from "@/Design=3.png";
import designFour from "@/Design=4.png";

// Project data type
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// All projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Simplyfy",
    category: "Web Development",
    description: "A simple music website that displays songs grouped into collections, offering an easy and intuitive browsing experience.",
    image: simplyfy,
    technologies: ["HTML", "CSS", "JS", "Node.js"],
    liveUrl: "https://samadrahmkhan.github.io/Simplyfy/",
    githubUrl: "https://github.com/SamadRahmKhan/Simplyfy.git",
    featured: true,
  },
  {
    id: 2,
    title: "TerraCycles",
    category: "Web Development",
    description: "A product-focused cycling website designed to market bicycles, highlight key features, and create a strong brand presence with a modern, user-friendly interface.",
    image: terraCycles,
    technologies: ["React", "CSS", "Tailwind CSS", "TypeScript", "Vite"],
    liveUrl: "https://samadrahmkhan.github.io/TerraCycles/",
    githubUrl: "https://github.com/SamadRahmKhan/TerraCycles.git",
    featured: true,
  },
    {
    id: 3,
    title: "Jobr.pro",
    category: "UI/UX Design",
    description: "",
    image: designFour,
    technologies: ["Canva"],
    liveUrl: "https://www.canva.com/design/DAGJI43GphA/RFKaXi40nebPCH4lFZSs8g/edit?utm_content=DAGJI43GphA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    featured: true,
  },
  {
    id: 6,
    title: "AI-Powered Job Search Roadmap",
    category: "UI/UX Design",
    description: "A visual workflow showing how AI supports candidates from resume creation to offer negotiation.",
    image: designOne,
    technologies: ["Canva"],
    liveUrl: "https://www.canva.com/design/DAGH0paNNP8/OTUpQoIpUEEiauTxrLvxBw/edit?utm_content=DAGH0paNNP8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    // githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "5 Traits That Set You Apart in an Interview",
    category: "UI/UX Design",
    description: "A visual guide highlighting the key personal qualities that help candidates stand out during interviews.",
    image: designTwo,
    technologies: ["Canva"],
    liveUrl: "https://www.canva.com/design/DAGH1somtFM/3JXc_S9oRuu8z12xa-xhvA/edit?utm_content=DAGH1somtFM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    featured: false,
  },
  {
    id: 5,
    title: "Top 6 Domains for Remote Work",
    category: "UI/UX Design",
    description: "A concise overview of high-demand professional domains well suited for remote opportunities.",
    image: designThree,
    technologies: ["Canva"],
    liveUrl: "https://www.canva.com/design/DAGKp-qaj9U/H36JXfhqpqk18euayT9c4Q/edit?utm_content=DAGKp-qaj9U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    featured: false,
  },

];

// Filter categories
const categories = ["All", "Web Development", "UI/UX Design"];

const Projects = () => {
  // State: which category is selected
  const [activeCategory, setActiveCategory] = useState("All");
  
  // State: which project is open in the modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  // Open the project details modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Close the project details modal
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="My Projects"
          subtitle="Explore my portfolio of web development and UI/UX design projects"
        />

        {/* ============================================ */}
        {/* CATEGORY FILTER BUTTONS */}
        {/* ============================================ */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const buttonClasses = isActive
              ? "px-6 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground glow-cyan"
              : "px-6 py-2 rounded-full text-sm font-medium glass text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all";

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={buttonClasses}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ============================================ */}
        {/* PROJECTS GRID */}
        {/* ============================================ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="group cursor-pointer overflow-hidden h-full"
              hover
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* View details button */}
                  <button
                    onClick={() => openProjectModal(project)}
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5" />
                  </button>

                  {/* Live site link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  {/* GitHub link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div>
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ============================================ */}
      {/* PROJECT DETAILS MODAL */}
      {/* ============================================ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project details */}
            <span className="text-xs text-primary font-medium uppercase tracking-wider">
              {selectedProject.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mt-1 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm glass rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              {selectedProject.liveUrl && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <GlowButton variant="primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </GlowButton>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GlowButton variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </GlowButton>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
