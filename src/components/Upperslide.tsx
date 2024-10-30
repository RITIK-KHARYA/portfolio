import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

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

export default function Upperslide() {
  return (
    <div className=" flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
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
  );
}
