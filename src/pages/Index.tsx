import { ArrowDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowButton } from "@/components/GlowButton";
import { ParallaxShapes } from "@/components/ParallaxShapes";
import { TypewriterText } from "@/components/TypewriterText";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";
import  simplyfy  from "@/LOGO.png";
import  terraCycles  from "@/TerraCycles=LOGO.png";
import designFour from "@/Design=4.png";

// List of roles to display in the typewriter effect
const roles = [
  "Web Developer",
  "UI Designer",
  "Creative Technologist",
];

// Featured projects data
const featuredProjects = [
  {
    title: "Simplyfy Website",
    category: "Web Development",
    image: simplyfy,
  },
  {
    title: "TerraCycles",
    category: "Web Development",
    image: terraCycles,
  },
  {
    title: "Jobr.pro",
    category: "UI/UX Design",
    image: designFour,
  },
];

// Statistics data
const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1.5+", label: "Years Experience" },
  { value: "1", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <div className="relative">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <ParallaxShapes />
        </div>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Availability badge */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-primary">
              <Sparkles className="w-4 h-4" />
              Available for freelance work
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text glow-text-cyan">Samad Rahim</span>
          </h1>

          {/* Typewriter text showing roles */}
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 animate-fade-in">
            <TypewriterText texts={roles} speed={80} pauseDuration={2500} />
          </div>

          {/* Introduction paragraph */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in">
            I turn ideas into modern, interactive digital experiences through design and code.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            <Link to="/projects">
              <GlowButton variant="primary" size="lg">
                View My Work
              </GlowButton>
            </Link>
            <Link to="/contact">
              <GlowButton variant="outline" size="lg">
                Get in Touch
              </GlowButton>
            </Link>
          </div>
        </div>

        {/* Scroll indicator at the bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS SECTION */}
      {/* ============================================ */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED PROJECTS SECTION */}
      {/* ============================================ */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my recent work showcasing creativity and technical excellence"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <GlassCard key={project.title} className="overflow-hidden group cursor-pointer">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Project info */}
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </GlassCard>
            ))}
          </div>

          {/* View all projects button */}
          <div className="text-center mt-12">
            <Link to="/projects">
              <GlowButton variant="outline">View All Projects</GlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CALL TO ACTION SECTION */}
      {/* ============================================ */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <GlassCard className="relative overflow-hidden text-center py-16" glow="cyan">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            </div>

            {/* CTA content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start a Project?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's collaborate and bring your vision to life. I'm always excited
                to work on innovative projects.
              </p>
              <Link to="/contact">
                <GlowButton variant="primary" size="lg">
                  Let's Talk
                </GlowButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Index;
