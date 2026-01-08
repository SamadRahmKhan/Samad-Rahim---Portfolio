import { Briefcase, GraduationCap, Award, Code2, Palette, User } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeader } from "@/components/SectionHeader";
import { GlowButton } from "@/components/GlowButton";
import { Link } from "react-router-dom";
import profilePic from "@/GoogleDP.png";

// Timeline events data - career and education milestones
const timelineEvents = [
  {
    year: "2025",
    title: "Started Coding",
    company: "Self-Learning",
    description: "Started learning web development and coding, focusing on building websites and improving technical skills.",
    icon: Code2,
    type: "education",
  },
  {
    year: "2024",
    title: "UI / UX Designer",
    company: "Jobr.pro",
    description: "Gained more experience in UI/UX design, worked on real projects, and completed a UI/UX certificate from Google.",
    icon: Award,
    type: "work",
  },
    {
    year: "2022",
    title: "UI / UX Designer (Beginner)",
    company: "Codiyan",
    description: "Started my journey as a UI/UX designer, working on basic layouts, user interfaces, and learning design fundamentals.",
    icon: Palette,
    type: "work",
  },
];


// Core values data
const values = [
  {
    title: "I keep designs simple and usable",
    description: "fddfdd",
  },
  {
    title: "I focus on building things that actually work well",
    description: "Every project starts with understanding the user's needs and crafting experiences that delight.",
  },
  {
    title: "I write code that’s easy to understand",
    description: "Writing maintainable, scalable code that stands the test of time and enables future growth.",
  },
  {
    title: "I learn by building and improving projects",
    description: "Staying ahead of industry trends and constantly expanding my skill set and knowledge base.",
  },
];

const About = () => {
  return (
    <div className="pt-24 pb-12">
      {/* ============================================ */}
      {/* HERO / INTRO SECTION */}
      {/* ============================================ */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image/Visual */}
            <div className="relative animate-fade-in">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-xl" />
                
                {/* Profile placeholder with border */}
                <div className="relative gradient-border rounded-2xl overflow-hidden">
                  <div className="aspect-square bg-card flex items-center justify-center">
                    {/* <User className="w-32 h-32 text-muted-foreground" /> */}
                    <img src={profilePic} alt="" className="w-32 h-32 object-cover rounded-full" />
                  </div>
                </div>

                {/* Floating code icon */}
                <div className="absolute -top-4 -right-4 p-4 glass rounded-xl float">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                
                {/* Floating palette icon */}
                <div className="absolute -bottom-4 -left-4 p-4 glass rounded-xl float-delayed">
                  <Palette className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="animate-fade-in">
              <span className="text-primary font-medium mb-2 block">About Me</span>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
               UI Designer <span className="gradient-text">&</span> Frontend Developer
              </h1>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I’m a UI designer and frontend web developer who enjoys creating clean,
                   modern, and easy-to-use websites. I focus on combining good design with 
                   practical code to build interfaces that feel simple and intuitive.
                </p>
                <p>
                  I currently work with HTML, CSS, JavaScript, React, and basic TypeScript 
                  to build responsive web applications. My design background helps me think 
                  from a user’s perspective while developing layouts and interactions.
                </p>
                <p>
                  I’m continuously learning, improving my skills, and building projects to grow as a designer and developer.
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-4 mt-8">
                <Link to="/projects">
                  <GlowButton variant="primary">View Projects</GlowButton>
                </Link>
                <Link to="/contact">
                  <GlowButton variant="outline">Get in Touch</GlowButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* How I Work Section*/}
      {/* ============================================ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="How I Work"
            subtitle="The principles that guide my work and define my approach to every project"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <GlassCard key={value.title}>
                <h3 className="text-xl font-semibold gradient-text mb-3">
                  {value.title}
                </h3>
                {/* <p className="text-muted-foreground">{value.description}</p> */}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TIMELINE SECTION */}
      {/* ============================================ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="My Journey"
            subtitle="A timeline of my professional experience and education"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => {
              // Alternate sides on desktop
              const isEvenIndex = index % 2 === 0;
              const IconComponent = event.icon;
              
              return (
                <div
                  key={event.year + event.title}
                  className={`relative flex items-center mb-12 ${
                    isEvenIndex ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow-cyan z-10" />

                  {/* Event card */}
                  <div
                    className={`w-full pl-20 md:w-1/2 md:pl-0 ${
                      isEvenIndex ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <GlassCard>
                      {/* Icon and year */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-primary font-mono text-sm">{event.year}</span>
                      </div>
                      
                      {/* Title and company */}
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-accent mb-2">{event.company}</p>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
