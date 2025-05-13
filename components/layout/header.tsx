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
    <div className="border border-b-amber-100">
      <div className="flex justify-end mx-4">
        <ModeToggle />
      </div>
      <div className="flex-row flex justify-between">
        <div className="items-center justify-center flex-col w-1/2 border border-amber-100">
          <div className="flex my-28 items-end">
            <h1 className={`${mclaren.className} text-8xl`}>Give a </h1>
            <span className="italic text-2xl underline mx-2">Shelter</span>
          </div>
          <div className="flex my-14 items-center justify-center">
            <Dog size={48} className="text-amber-100 mx-4 animate-bounce" />
            <Cat size={48} className="text-amber-100 mx-4  animate-bounce" />
          </div>
          <div className="flex my-28 items-end">
            <h1 className={`${mclaren.className} text-8xl`}>Gain a </h1>
            <span className="italic text-2xl underline mx-2">Friend</span>
          </div>
        </div>

        <div className="items-center justify-center w-1/2 flex-col flex border bg-amber-100">
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
