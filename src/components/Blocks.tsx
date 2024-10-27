import { Github, Globe, Radio } from "lucide-react";
import BlackTypos from "./Blacktypos";
import { Button } from "./ui/button";
import Image from "next/image";

interface BlockProps {
  image: string;
  title: string;
  description: string;
  link: string;
  header: string[];
}

export default function Block({
  image,
  title,
  description,
  link,
  header,
}: BlockProps) {
  return (
    <div className="flex flex-col items-center justify-start space-y-2 bg-transparent border-neutral-700/90 border-[1px] rounded-lg w-[300px] h-[420px]">
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
      <hr className="w-full border-neutral-700" />
      <div className=" w-full mx-auto h-auto ">
        <div className="mx-5 space-y-5 ">
          {" "}
          <h2 className="text-lg= font-semibold mt-5">{title}</h2>
          {/* <hr className="w-full" /> */}
          <p className="text-foreground-muted text-sm text-align text-wrap text-left text-neutral-300 ">
            {description}
          </p>
          <div className="flex flex-row items-center justify-start space-x-2 text-center w-auto ">
            {header.map((item) => (
              <BlackTypos key={item} header={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start mx-5 mt-3 gap-x-2 ">
          <a
            type="button"
            className="bg-white text-black rounded-md w-20 h-6 flex items-center justify-center text-sm"
            href={link}
          >
            <div className="flex flex-row items-center justify-center gap-[5px]  hover:bg-neutral-300 w-full rounded-md">
              <Globe size={15} />
              Github
            </div>
          </a>
          <Button className="text-sm w-20 h-6 rounded-md bg-neutral-100">
            <Radio size={"md"} />
            Live
          </Button>
        </div>
      </div>
    </div>
  );
}
