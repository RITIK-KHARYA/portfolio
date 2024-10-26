interface BlockProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Block({ image, title, description, link }: BlockProps) {
  return (
    <div className="flex flex-col items-center justify-normal space-y-2 bg-transparent border-neutral-700/90 border-[1px] rounded-lg w-[300px]">
      {image && <img src={image} alt={title} className="w-full h-[250px] " />}
      <div className="flex flex-col items-center justify-center">
        <div>
          {" "}
          <h2 className="text-lg font-semibold">{title}</h2>
          <hr className="w-full" />
          <p className="text-foreground-muted">{description}</p>
        </div>
        <a
          href={link}
          type="button"
          className="rounded-lg bg-white text-black w-20 h-5"
        >
          Github
        </a>
      </div>
    </div>
  );
}
