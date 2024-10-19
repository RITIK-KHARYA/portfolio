import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-auto">
      <div className="flex bg-card items-center justify-start  w-[500px] h-[200px]">
        <h1 className={`text-6xl `}>hi there, I'm Ritik</h1>
      </div>

      <div className="w-[600px] flex items-center justify-center flex-col mt-8">
        <div className="relative">
          {/* Glowing Border */}
          <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-md"></div>

          {/* Image inside the border */}
          <div className="relative rounded-xl overflow-hidden w-[500px]">
            <Image
              src={"/ritik.jpg"}
              alt="ritik"
              width={700}
              height={300}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <hr className="m-4" />
        <div className="text-sm text-foreground w-[500px] items-center justify-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam id
          cupiditate deleniti commodi eos, veniam quos minima voluptas in
          pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
          possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
          Quam, incidunt molestias?
        </div>

        <hr className="w-full border-neutral-600/90 m-2" />

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
      </div>
    </div>
  );
}
