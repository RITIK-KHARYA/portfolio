import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex bg-card items-center justify-start  w-[500px] h-[200px]">
        <h1 className={`text-6xl `}>hi there , im ritik</h1>
      </div>

      <div className="w-[600px] flex items-center justify-center flex-col">
        <Image
          src="/ritik.jpeg"
          alt="ritik"
          width={700}
          height={300}
          className="border border-blue-300  rounded-xl flex items-center justify-center h-full"
        />
        <hr className=" m-2 " />
        <div className="text-sm text-foreground w-[500px] items-center justify-center">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          quasi, doloribus cum maxime aperiam, aspernatur ipsum nemo numquam id
          cupiditate deleniti commodi eos, veniam quos minima voluptas in
          pariatur ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus rerum ut porro nostrum optio reiciendis amet unde
          possimus. Similique aut aperiam ut ipsa. Odio alias aliquam sint.
          Quam, incidunt molestias?
        </div>
        <span className="w-full m-2">
          <hr className=" m-2 border-neutral-600/90 w-full" />
        </span>
        <div>
          <h2 className="text-3xl ">About Me</h2>
        </div>
      </div>
    </div>
  );
}
