"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/_ritik.kharya_",
    color: "hover:text-pink-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/kharyaritik",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/RITIK-KHARYA",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/ritik-kharya-69774a244",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
      <p className="text-lg text-gray-300 mb-8">
        Let's create something amazing together!
      </p>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className={`p-3 rounded-full bg-neutral-900 ${link.color} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            aria-label={link.name}
          >
            <link.icon size={24} />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
