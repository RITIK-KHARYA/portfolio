"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Diary",
    description:
      "A microblogging website which allows you to share your thoughts and connect with people around world",
    image: "/image1.png",
    liveLink: "https://diarycover.vercel.app/",
    githubLink: "https://github.com/RITIK-KHARYA/diary",
    technologies: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Prisma",
      "NeonDB",
      "React Query",
    ],
  },
  {
    title: "Trezixmusic",
    description:
      "A music streaming website where you can listen to millions of songs in one place",
    image: "/image.png",
    liveLink: "https://github.com/RITIK-KHARYA/trezixmusic",
    githubLink: "https://github.com/RITIK-KHARYA/trezixmusic",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Supabase", "Prisma"],
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-neutral-900 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-neutral-800 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 bg-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
