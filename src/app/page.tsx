import Image from "next/image";
import ritik from "./Public/static/image/ritik.png";
import yo from "./Public/static/image/yo.png";

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto">
      <div className="w-[680px] h-[200px]">
        <div className="flex flex-row items-center justify-between h-[175px]">
          <h1 className="text-5xl font-bold m-2">Hey, I'm Ritik 😎</h1>
          <Image
            src={yo}
            alt=""
            className="rounded-full object-cover w-24 h-24 m-2 hover:opacity-75 hover:scale-125 transition-transform duration-150 ease-in-out"
            width={90}
            height={90}
          />
        </div>
        <span className="text-2xl">
          19 years old sophomore full stack web developer
        </span>
      </div>
      <hr className="w-[680px] border-neutral-600/90 m-5" />

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
          <h2 className="text-3xl m-2">My Project</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}
