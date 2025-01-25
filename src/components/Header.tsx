"use client";

import Image from "next/image";
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

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <div className="flex items-center gap-6">
        <Image
          src="/static/image/artoons.png"
          alt="Ritik Kharya"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Ritik Kharya</h1>
          <p className="text-xl text-gray-400">19-year-old tech enthusiast</p>
        </div>
      </div>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`p-2 rounded-full bg-neutral-900 ${link.color} transition-colors`}
            aria-label={link.name}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>
    </motion.header>
  );
}
