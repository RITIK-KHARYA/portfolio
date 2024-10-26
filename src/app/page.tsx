"use client";
import Image from "next/image";
import ritik from "./Public/static/image/ritik.png";
import yo from "./Public/static/image/artoons.png";
import { ModeToggle } from "@/components/togglebutton";
import CardDemo from "./home/page";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typos from "@/components/typos";
import { div } from "framer-motion/client";
import Block from "@/components/Blocks";

export default function Page() {
  const socialLinks = [
    {
      name: "Instagram",
      username: "@Ritik 🦕",
      icon: <Instagram size={20} />,
      href: "https://instagram.com/_ritik.kharya_",
      color: "hover:text-pink-500",
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
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      username: "@Ritik Kharya",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/ritik-kharya-69774a244",
      color: "hover:text-blue-600",
    },
  ];
  // const handleclick = () => {
  //   console.log("icon clicked successfully")

  // }
  const ritik = "/static/image/ritik.png";
  // const yo = "/static/image/artoons.png";

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto bg-black">
      <div className="h-[100px] flex flex-row justify-between  items-center w-[680px]   m-5">
        <div className="flex flex-row items-center justify-start">
          <Image
            src={yo}
            alt="ritik"
            width={1920}
            height={1080}
            className="rounded-xl w-20 h-20 object-cover max-h-[300px]"
          />
          <div className="flex flex-col items-center justify-start m-4">
            <div className=" text-xl font-bold w-full  "> Ritik Kharya</div>
            <span className="">Full Stack Developer</span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 m-4">
          {socialLinks.map((icon, link) => (
            <a
              href={icon.href}
              className="w-8 h-8 rounded-sm bg-card flex flex-row items-center justify-center hover:bg-neutral-800/90"
              key={icon.name}
            >
              {icon.icon}
            </a>
            // <div className="w-8 h-8 rounded-sm bg-neutral-700 flex flex-row items-center justify-center ">
            //   {icon.icon}
            // </div>
          ))}
        </div>
      </div>
      {/* <hr className="w-[680px] border-neutral-600/90 m-5" /> */}
      <div className="w-[680px] flex items-center justify-center flex-col">
        {/* <div className="relative">
          <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-md"></div>

          <div className="relative rounded-xl overflow-hidden w-[500px]">
            <Image
              src={ritik}
              alt="ritik"
              width={700}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
        </div> */}

        {/* <hr className="m-6" />
        <div className="text-sm text-foreground w-[500px] items-center justify-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam id
          cupiditate deleniti commodi eos, veniam quos minima voluptas in
          pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
          possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
          Quam, incidunt molestias?
        </div> */}

        <hr className="w-full  m-5" />

        <div>
          <h2 className="text-2xl font-bold m-2 ">About</h2>
          <div className="text-[16px] text-neutral-300/90 ">
            Based in the city, I'm a college sophomore mixing code with
            creativity. My day flows between intense coding sessions and chill
            breaks with books and anime. Being both outgoing and introspective
            helps me groove with my own rhythm - whether that's late-night
            coding or team projects. I'm teaching myself full-stack development,
            building websites from scratch while keeping life balanced with
            friends and fun. That's my vibe - focused when it counts, relaxed
            when needed.
          </div>
        </div>
        <hr className="w-full  m-5" />

        <div>
          <h2 className="text-2xl font-bold m-2">Career </h2>
          <div className="text-[16px] text-neutral-300/90">
            After completing my JEE and joining a tier 3 college in 2023, I
            discovered my true calling in web development. While my college's
            coding culture was quiet, I connected with my old JEE friends who
            shared my passion for tech. That spark turned into a fire - now I'm
            teaching myself full-stack development, and I've been building my
            skills every day since then.
          </div>
        </div>
        <hr className="w-full border-neutral-600/90 m-5" />

        <div className="grid grid-cols-2 ">
          <h2 className="text-2xl font-bold m-2 flex flex-row items-center justify-start">
            Skills
          </h2>
          <div className="flex flex-col space-y-2 mt-10 mb-10">
            <span className="text-neutral-100/90 text-lg font-semibold flex items-center justify-center  ">
              Front-end
            </span>
            <hr className="w-full border-neutral-500/90 mb-2" />
            <div className="grid grid-cols-4 gap-4 ">
              <Typos header="Typescript" />
              <Typos header="Javascript" />
              <Typos header="HTML" />
              <Typos header="CSS" />
              <Typos header="React" />
              <Typos header="Next.js" />
              <Typos header="Tailwind" />
            </div>

            <span className="text-neutral-100/90 text-lg font-semibold flex items-center justify-center ">
              Back-end
            </span>
            <hr className="w-full border-neutral-500/90 mb-2" />
            <div className="grid grid-cols-4 gap-4 ">
              <Typos header="Node.js" />
              <Typos header="Express" />
              <Typos header="Next.js" />
            </div>
            <span className="text-neutral-100/90 text-lg font-semibold flex items-center justify-center ">
              Database
            </span>
            <hr className="w-full border-neutral-500/90 mb-2" />
            <div className="grid grid-cols-4 gap-4 ">
              <Typos header="PostgreSQL" />
              <Typos header="Primsa" />
            </div>
          </div>
        </div>
        <hr className="w-full border-neutral-600/90 m-5" />

        <div>
          <div className="w-full items-center justify-center flex">
            <Button className="text-center text-2xl">My Project</Button>
          </div>
          <div className="text-5xl  flex justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-neutral-200 to-white m-3">
            Some of my cool stuff
          </div>
          <span className="text-center text-white flex items-center ">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </span>
          <div className="w-full  grid  p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Block
                title="Ritik"
                description="Ritik hey there is your papa"
                image={ritik}
                link="/github/RITIK-KHARYA"
              />
              <Block
                title="Ritik"
                description="Ritik hey there is your papa"
                image={ritik}
                link="/github/RITIK-KHARYA"
              />
              {/* <CardDemo />
              <CardDemo />
              <CardDemo /> <CardDemo /> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[250px]">
            <h1 className="text-3xl m-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-300 font-semibold">
              Hook with me
            </h1>
            <hr className="w-full border-neutral-600/90" />

            {/* <span className="text-center text-neutral-400/90 ">
             connect with me on{" Instagram @kangkangkangkang"}
             twitter @kangkangkangkang github @kangkangkangkang linkedin
             @kangkangkangkang
           </span> */}
            <h3 className="text-lg font-medium text-neutral-200/90 p-2">
              Connect With Me
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className={`flex items-center space-x-2 rounded-lg border border-neutral-100 px-4 py-2 transition-all duration-300 hover:scale-105  ${social.color}`}
                >
                  {social.icon}
                  {/* <span className="text-sm font-medium text-neutral-200 hover:text-neutral-200">
                    {social.username}
                  </span> */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
