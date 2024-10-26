"use client";
import LoadingButton from "@/components/LoadingButton";
import { cn } from "@/lib/utils";

//why we cannot make any prop here 

export default function CardDemo() {
  return (
    <div className="max-w-xs mx-auto w-full h-full border rounded-lg ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-[150px] rounded-t-xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500  "
        )}
      ></div>
      <div>
        <div className=" h-[170px]  bg-neutral-900/90 rounded-t-sm ">
          <h1 className="font-semibold text-lg md:text-2xl text-gray-50 flex flex-col items-center justify-center">
            Diary
          </h1>
          <p className="font-normal text-foreground-muted text-base m-2 flex flex-row items-center justify-center overflow-hidder flex-nowrap">
            This project is a microblogging website allowinig users to write
          </p>
          {/* <div className=" mx-auto">
            <LoadingButton loading key={""} disabled className="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
