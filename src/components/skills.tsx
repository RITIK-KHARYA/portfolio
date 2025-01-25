"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./scrollAnimation";

const skillCategories = [
  {
    name: "Front-end",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind",
    ],
  },
  {
    name: "Back-end",
    skills: ["Node.js", "Express", "Next.js", "Hono.js"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "Prisma"],
  },
];

export default function Skills() {
  return (
    <ScrollAnimation>
      <section>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-neutral-900 rounded-full text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}
