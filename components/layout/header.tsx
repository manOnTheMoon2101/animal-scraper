import React from "react";
import { ModeToggle } from "./Header/Theme_Toggle/toggle";
import Image from "next/image";
import dog from "@/public/dog.jpg";

function Header() {
  return (
    <div>
      <div className="flex justify-end mx-4">
        <ModeToggle />
      </div>
      <div className="flex justify-center h-48">
        <Image
          alt="Photo by Gilberto Reyes: https://www.pexels.com/photo/closeup-photo-of-short-coated-white-and-gray-dog-825947/"
          src={dog}
          priority={true}
          style={{ objectFit: "fill" }}
        />
      </div>
      real ui design
    </div>
  );
}

export default Header;
