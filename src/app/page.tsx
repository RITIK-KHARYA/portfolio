"use client";
import Image from "next/image";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

import { Github, Instagram, Linkedin, Radio, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typos from "@/components/typos";
import Block from "@/components/Blocks";

export default function Page() {
  const socialLinks = [
    {
      name: "Instagram",
      username: "@Ritik 🦕",
      icon: <Instagram size={20} />,
      href: "https://instagram.com/_ritik.kharya_",
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      username: "@Ritikkharya",
      icon: <Twitter size={20} />,
      href: "https://twitter.com/kharyaritik",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      username: "@ritikkharya",
      icon: <Github size={20} />,
      href: "https://github.com/RITIK-KHARYA",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      username: "@Ritik Kharya",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/ritik-kharya-69774a244",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-y-auto px-4 py-6 md:py-8">
      <div className="max-w-[680px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Image
              src={`/static/image/artoons.png`}
              alt="ritik"
              width={1920}
              height={1080}
              className="rounded-xl w-16 h-16 md:w-20 md:h-20 object-cover"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold">Ritik Kharya</div>
              <span className="text-sm md:text-base">
                19-years old tech enthusiast
              </span>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3">
            {socialLinks.map((icon) => (
              <a
                href={icon.href}
                className="w-8 h-8 rounded-sm bg-card flex items-center justify-center hover:bg-neutral-800/90 transition-colors"
                key={icon.name}
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-sm md:text-base text-neutral-300/90">
            Based in the city, I'm a college sophomore mixing code with
            creativity. My day flows between intense coding sessions and chill
            breaks with books and anime. Being both outgoing and introspective
            helps me groove with my own rhythm - whether that's late-night
            coding or team projects. I'm teaching myself full-stack development,
            building websites from scratch while keeping life balanced with
            friends and fun. That's my vibe - focused when it counts, relaxed
            when needed.
          </p>
        </section>

        <hr className="border-neutral-600/90 my-8" />
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Career</h2>
          <p className="text-sm md:text-base text-neutral-300/90">
            After completing my JEE and joining a tier 3 college in 2023, I
            discovered my true calling in web development. While my college's
            coding culture was quiet, I connected with my old JEE friends who
            shared my passion for tech. That spark turned into a fire - now I'm
            teaching myself full-stack development, and I've been building my
            skills every day since then.
          </p>
        </section>

        <hr className="border-neutral-600/90 my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>

          <div className="mb-6">
            <span className="text-lg font-semibold text-neutral-100/90 block mb-2">
              Front-end
            </span>
            <hr className="border-neutral-500/90 mb-4" />
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Typos header="Typescript" />
              <Typos header="Javascript" />
              <Typos header="HTML" />
              <Typos header="CSS" />
              <Typos header="React" />
              <Typos header="Next.js" />
              <Typos header="Tailwind" />
            </div>
          </div>

          <div className="mb-6">
            <span className="text-lg font-semibold text-neutral-100/90 block mb-2">
              Back-end
            </span>
            <hr className="border-neutral-500/90 mb-4" />
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Typos header="Node.js" />
              <Typos header="Express" />
              <Typos header="Next.js" />
            </div>
          </div>

          <div className="mb-6">
            <span className="text-lg font-semibold text-neutral-100/90 block mb-2">
              Database
            </span>
            <hr className="border-neutral-500/90 mb-4" />
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Typos header="PostgreSQL" />
              <Typos header="Primsa" />
            </div>
          </div>
        </section>

        <hr className="border-neutral-600/90 my-8" />
        <div className="relative z-0 mx-auto ">
          <section className="mb-12">
            <div className=" text-center mb-8">
              <Button className="text-xl md:text-2xl">My Projects</Button>
            </div>

            <h2 className="text-3xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-neutral-200 to-white mb-4">
              Some of my cool stuff
            </h2>

            <p className="text-center text-white mb-8 text-sm md:text-base">
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>

            <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-4">
              <Block
                title="Diary "
                description="Ritik hey there is your papa oianc ofin  ifnrwon roenvr orve vpenv"
                image={`/image1.png`}
                link="/github.com"
                header={["nextjs", "tailwind", "typescript"]}
              />
              <Block
                title="Trezixmusic "
                description="Ritik hey there is your papa oianc ofin  ifnrwon roenvr orve vpenv"
                image={`/image.png`}
                link="/github.com/ritik-kharya  "
                header={["next.js", "tailwind", "typescript", "supabase"]}
              />
            </div>
          </section>
        </div>

        <motion.div
          initial={{
            opacity: 1,
          }}
          whileInView={{
            opacity: 0,
          }}
          viewport={{ margin: "-100px" }}
          className="absolute bg-black z-10 bottom-0 top-0 right-0 left-0"
        />

        <section className="py-8">
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-300 mb-4">
            Hook with me
          </h2>

          <hr className="border-neutral-600/90 mb-6" />

          <h3 className="text-lg text-center font-medium text-neutral-200/90 mb-6">
            Connect With Me
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`flex items-center space-x-2 rounded-lg border border-neutral-100 px-3 py-2 transition-all duration-300 hover:scale-105 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
