"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Explore Case",
      description:
        "Modern travel website for a travel agency showcasing their services and connecting with them.",
      image: "/explore-case.png",
      technologies: ["React", "Next.js", "Typescript"],
      githubUrl: "https://github.com/VaibhaRanghar/Explore-Case",
      liveUrl: "https://explore-case-n6n5.vercel.app/",
    },
    {
      title: "Artistly",
      description:
        "A web application to connect event organizers with verified singers, dancers, speakers, and DJs..",
      image: "/artistly.png",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/VaibhaRanghar/artistly",
      liveUrl: "https://artistly-799l.vercel.app/",
    },
    {
      title: "Super Pizza Des",
      description:
        "Modern pizza ordering system for a restaurant managing cart and orders.",
      image: "/super-pizza-des.png",
      technologies: ["React", "Redux"],
      githubUrl: "https://github.com/VaibhaRanghar/super-pizza",
      liveUrl: "https://super-pizzaa.netlify.app/",
    },
    {
      title: "Brazzen Inn",
      description:
        "Hotel booking management platform for employees to manage rooms, payments, bookings, etc.",
      image: "/brazzen-inn.png",
      technologies: ["React", "React Query", "Supabase", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
