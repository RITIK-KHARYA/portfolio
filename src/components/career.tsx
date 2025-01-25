"use client";
import { motion } from "framer-motion";
import ScrollAnimation from "./scrollAnimation";

export default function Career() {
  return (
    <ScrollAnimation>
      <section className="bg-neutral-900 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Based in the city, I'm a college sophomore mixing code with
          creativity. My day flows between intense coding sessions and chill
          breaks with books and anime. Being both outgoing and introspective
          helps me groove with my own rhythm - whether that's late-night coding
          or team projects. I'm teaching myself full-stack development, building
          websites from scratch while keeping life balanced with friends and
          fun. That's my vibe - focused when it counts, relaxed when needed.
        </p>
      </section>
    </ScrollAnimation>
  );
}
