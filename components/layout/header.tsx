"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./Header/Theme_Toggle/toggle";
import Image from "next/image";
import dog from "@/public/dog.jpg";
import RandomTip from "./Header/Tips/tips";
import { Za } from "react-flags-select";
import { Dog, Cat } from "lucide-react";
import cat from "../../public/cat.jpg";
import { McLaren } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { toast } from "sonner";
const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});
const fira = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});
function Header() {
  const [showDog, setShowDog] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowDog((prev) => !prev);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("info@wellingtonspca.co.za");
      toast.success("Email copied to clipboard");
    } catch (err) {
      return null;
    }
  };
  return (
    <div>
      {/* <div className="flex justify-end mx-4 my-4">
        <ModeToggle />
      </div> */}
      <div className="flex flex-col md:flex-row justify-center mx-2 my-2 rounded">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
          <div className="flex my-14 md:my-28 items-center md:items-end justify-center md:justify-start">
            <h1 className={`text-2xl`}>Give a </h1>
            <span
              className={`italic text-6xl md:text-8xl mx-2 text-secondary ${mclaren.className}`}
            >
              Shelter
            </span>
          </div>
          {/* <div className="flex my-8 md:my-14 items-center justify-center">
            <Dog size={36} className="text-accent mx-2 md:mx-4 animate-bounce" />

            <h2 className={`${mclaren.className} text-3xl md:text-4xl`}>FurEver©</h2>
            <Cat size={36} className="text-accent mx-2 md:mx-4 animate-bounce" />
          </div> */}
          <div className="flex my-14 md:my-28 items-center md:items-end justify-center md:justify-start">
            <h1 className={`text-2xl`}>Gain a </h1>
            <span
              className={`italic text-6xl md:text-8xl mx-2 text-secondary ${mclaren.className}`}
            >
              Friend
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
          <div className="mx-2 flex justify-center md:justify-start">
            <Image
              alt="Photo by Lukas Kloeppel: https://www.pexels.com/photo/black-and-brown-rottweiler-puppy-1307630/"
              src={dog}
              className="rounded-4xl my-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center text-center md:text-center text-2xl md:text-6xl text-gray-600 mx-2 my-12">
        <div
          className={`transition-transform duration-700 ${
            showDog ? "rotate-0" : "rotate-360"
          }`}
        >
          {showDog ? (
            <Dog
              size={62}
              className="text-accent mx-2 my-2 md:mx-4 animate-bounce md:my-4"
            />
          ) : (
            <Cat
              size={62}
              className="text-accent mx-2 my-2 md:mx-4 animate-bounce md:my-4"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center text-center md:text-center text-2xl md:text-6xl text-gray-600 mx-2 my-48">
        <p className={` ${mclaren.className} mx-2 leading-relaxed`}>
          You can make a difference by adopting one of our lovely animals and
          helping us on our way to give every animal a{" "}
          <span className="flex flex-col md:inline-flex md:flex-row items-center gap-2 md:gap-4">
            <span className="text-secondary font-bold text-2xl md:text-6xl">
              Friendly,
            </span>{" "}
            <span className="text-secondary font-bold text-2xl md:text-6xl">
              Welcoming
            </span>{" "}
            <span className="text-muted-foreground">and</span>{" "}
            <span className="text-secondary font-bold text-2xl md:text-6xl">
              Safe
            </span>{" "}
            <span className="text-muted-foreground">home</span>
          </span>
        </p>
      </div>

      <div className="my-24 mx-2 flex flex-col md:flex-row items-stretch">
        <div className="mx-2">
          <Image
            alt="Photo by EVG Kowalievska from Pexels: https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/"
            src={cat}
            height={1200}
            width={1000}
            className="rounded-4xl my-2"
          />
        </div>
        <span
          className={`text-xl text-gray-600 text-left  p-2  flex-center ${fira.className}`}
        >
          <div className="h-1/3">
            <span className="text-3xl text-accent font-bold">
              {" "}
              Bona fide monetary
            </span>{" "}
            donations qualify for an 18A tax certificate and entitles you to a
            tax deduction in respect of your donation.
          </div>

          <div className="h-1/3 ">
            Donors who are
            <span className="inline-flex items-center gap-1 mx-2">
              <Za />
              South African
            </span>
            taxpayers are entitled to deduct the total value of their donations
            to 18A approved organisations, like Wellington SPCA, in any tax
            year, up to a <span className="underline">limit of 10%</span> of
            their taxable income for that tax year.
          </div>

          <div className="h-1/3">
            Should you require an 18A tax certificate in lieu of for your kind
            donation, please email us at{" "}
            <Badge
              className="cursor-pointer italic rounded-full bg-accent text-primary"
              onClick={copyToClipboard}
            >
              info@wellingtonspca.co.za
            </Badge>{" "}
            together with the proof of donation. or visit{" "}
            <Badge className="cursor-pointer rounded-full bg-accent text-primary">
              <Link
                className="italic"
                href="https://wellingtonspca.co.za/help/"
                target="_blank"
                rel="noopener noreferrer"
              >
                wellingtonspca.co.za
              </Link>
            </Badge>
            for more info
          </div>
        </span>
      </div>
    </div>
  );
}

export default Header;
