import Image from "next/image";
import ritik from "./Public/static/image/ritik.png";
import yo from "./Public/static/image/artoons.png";
import { ModeToggle } from "@/components/togglebutton";
import CardDemo from "./home/page";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

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
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto">
      <div className="h-[100px] flex flex-row justify-between items-center w-[680px] bg-neutral-900 rounded-2xl m-5">
        <div className="flex flex-col items-center justify-start m-4">
          <h1 className="text-3xl font-bold  ">Hyy, I am Ritik 👽</h1>
          <span className="">Welcome to this little corner of my world </span>
        </div>
        <div className="m-4">
          <Image
            src={yo}
            alt="yo"
            width={50}
            height={50}
            className="rounded-full w-20 h-20 hover:"
          />
        </div>
      </div>
      {/* <hr className="w-[680px] border-neutral-600/90 m-5" /> */}
      <div className="w-[680px] flex items-center justify-center flex-col">
        <div className="relative">
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
        </div>

        <hr className="m-6" />
        <div className="text-sm text-foreground w-[500px] items-center justify-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam id
          cupiditate deleniti commodi eos, veniam quos minima voluptas in
          pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
          possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
          Quam, incidunt molestias?
        </div>

        <hr className="w-full border-neutral-600/90 m-5" />

        <div>
          <h2 className="text-3xl m-2">About Me</h2>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam
            id cupiditate deleniti commodi eos, veniam quos minima voluptas in
            pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
            possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
            Quam, incidunt molestias?
          </div>
        </div>
        <hr className="w-full border-neutral-600/90 m-5" />

        <div>
          <h2 className="text-3xl m-2">Career </h2>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam
            id cupiditate deleniti commodi eos, veniam quos minima voluptas in
            pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
            possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
            Quam, incidunt molestias?
          </div>
        </div>
        <hr className="w-full border-neutral-600/90 m-5" />

        <div>
          <h2 className="text-3xl m-2">About Me</h2>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam
            id cupiditate deleniti commodi eos, veniam quos minima voluptas in
            pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
            possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
            Quam, incidunt molestias?
          </div>
        </div>
        <hr className="w-full border-neutral-600/90 m-5" />

        <div>
          <h2 className="text-3xl m-2 text-center">My Project</h2>
          <div className="text-2xl flex justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-orange-400">
            Some of my cool stuff
          </div>
          <div className="w-full  grid  p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <CardDemo />
              <CardDemo />
              <CardDemo /> <CardDemo />
            </div>
          </div>
          <div className="flex flex-col text-neutral-400/80 items-center justify-center h-[250px]">
            <h1 className="text-3xl m-2 text-center">Hook with me</h1>
            <hr className="w-full border-neutral-600/90" />

            {/* <span className="text-center text-neutral-400/90 ">
             connect with me on{" Instagram @kangkangkangkang"}
             twitter @kangkangkangkang github @kangkangkangkang linkedin
             @kangkangkangkang
           </span> */}
            <h3 className="text-lg font-medium text-neutral-300 p-2">
              Connect With Me
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className={`flex items-center space-x-2 rounded-lg border border-neutral-200 px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${social.color}`}
                >
                  {social.icon}
                  <span className="text-sm font-medium text-neutral-400 hover:text-neutral-800">
                    {social.username}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
