"use client";
import { motion } from "framer-motion";

export default function Career() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 p-6 rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-6">Career Journey</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        After completing my JEE and joining a tier 3 college in 2023, I
        discovered my true calling in web development. While my college's coding
        culture was quiet, I connected with my old JEE friends who shared my
        passion for tech. That spark turned into a fire - now I'm teaching
        myself full-stack development, and I've been building my skills every
        day since then.
      </p>
    </motion.section>
  );
}
