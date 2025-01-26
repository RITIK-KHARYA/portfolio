"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./scrollAnimation";

export default function About() {
  return (
    <ScrollAnimation>
      <section className="bg-neutral-900 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Hi, I’m Ritik, a full-stack web developer with 2 years of experience
          crafting dynamic, user-centric websites. Passionate about emerging
          technologies, I thrive on transforming innovative ideas into
          functional digital solutions. Currently in my sophomore year, I
          balance academic pursuits with hands-on development, continuously
          expanding my expertise in modern frameworks and tools. Dedicated to
          growth, I embrace every opportunity to refine my skills and deliver
          impactful web experiences that bridge creativity and technical
          precision
        </p>
      </section>
    </ScrollAnimation>
  );
}
