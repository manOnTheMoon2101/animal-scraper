import React from "react";
import { ModeToggle } from "./Header/Theme_Toggle/toggle";
import Image from "next/image";
import dog from "@/public/dog.jpg";
import RandomTip from "./Header/Tips/tips";
import { Dog, Cat } from "lucide-react";
import { McLaren } from "next/font/google";
const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});
function Header() {
  return (
    <div className="">
      <div className="flex justify-end mx-4 my-4">
        <ModeToggle />
      </div>
      <div className="flex-row flex justify-between">
        <div className="items-center justify-center flex-col w-1/2">
          <div className="flex my-28 items-end">
            <h1 className={`text-2xl`}>Give a </h1>
            <span className={`italic text-8xl mx-2 text-secondary ${mclaren.className}`}>Shelter</span>
          </div>
          <div className="flex my-14 items-center justify-center">
            <Dog size={48} className="text-accent mx-4 animate-bounce" />

            <h2 className={`${mclaren.className} text-4xl`}>FurEver©</h2>
            <Cat size={48} className="text-accent mx-4  animate-bounce" />
          </div>
          <div className="flex my-28 items-end">
            <h1 className={`text-2xl`}>Gain a </h1>
            <span className={`italic text-8xl mx-2 text-secondary ${mclaren.className}`}>Friend</span>
          </div>
        </div>

        <div className="items-center justify-center w-1/2 flex-col flex bg-accent rounded">
          <div className="mx-2">
            <Image
              alt="Photo by Lukas Kloeppel: https://www.pexels.com/photo/black-and-brown-rottweiler-puppy-1307630/"
              src={dog}
              className=" rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
