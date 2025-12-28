"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Dog, Cat } from "lucide-react";
import { Fira_Sans } from "next/font/google";
import { Phone } from "lucide-react";
const fira = Fira_Sans({
  weight: "200",
  subsets: ["latin"],
});
export function MorphingDialogBasicOne({ data }: { data: any }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden shadow-2xl shadow-secondary bg-background"
      >
        <MorphingDialogImage
          src={data.image}
          alt="Image"
          className="h-48 w-full object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-secondary text-2xl flex flex-row items-center gap-1 justify-start font-bold">
              {data.animalType === "Dog" ? <Dog /> : <Cat />} {data.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle
              className={`text-accent  flex flex-row justify-start `}
            >
              {data.type
                ? data.type
                    .split(" ")
                    .map(
                      (word: string) =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                    )
                    .join(" ")
                : ""}
            </MorphingDialogSubtitle>
          </div>
          <div
            className="relative  ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center  border border-accent text-white bg-secondary rounded-full"
            aria-label="Open dialog"
          >
            <Eye size={12} className="hover:text-primary" />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden bg-background sm:w-[500px] max-h-[90vh] overflow-y-auto"
        >
          <MorphingDialogImage
            src={data.image}
            alt="Image of Animal"
            className="h-full w-full"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-accent text-2xl font-bold flex flex-row justify-start">
              {data.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle
              className={`text-muted flex flex-row justify-start `}
            >
              {data.details}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >

              <div className="space-y-3 mt-4">
                {data.type && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Breed:</span>
                    <span className="text-sm text-foreground bg-secondary/50 px-2 py-1 rounded">
                      {data.type}
                    </span>
                  </div>
                )}
                
                {data.age && data.ageDate && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Age:</span>
                    <span className="text-sm text-foreground bg-accent/50 px-2 py-1 rounded">
                      {data.age} {data.ageDate}{data.age > 1 ? 's' : ''} old
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-end my-4">
                <Button variant={"outline"}>
                  <a
                    href={`https://wellingtonspca.co.za/up-for-adoption/dogs/${data.name}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1"
                  >
                    <Phone /> Contact{" "}
                  </a>
                </Button>
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50 cursor-pointer hover:text-destructive" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
