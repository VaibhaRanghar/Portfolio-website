"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({
  project,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden group relative hover:bg-white/5 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.1, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 hover:bg-gray-800 bg-transparent transition-all duration-300"
          >
            <Link
              href={project.githubUrl}
              className="flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          </Button>

          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            <Link
              href={project.liveUrl}
              className="flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
