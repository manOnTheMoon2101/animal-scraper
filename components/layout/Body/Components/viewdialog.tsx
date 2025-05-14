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
import { ExternalLink } from "lucide-react";
import { McLaren } from "next/font/google";
const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});
export function MorphingDialogBasicOne({ data }: { data: any }) {
  function capitalizeAllLetters(text: string): string {
    return text
      .split(" ")
      .map((word) => word.toUpperCase())
      .join(" ");
  }
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
        className="flex max-w-[270px] flex-col overflow-hidden shadow-lg bg-background"
      >
        <MorphingDialogImage
          src={data.image}
          alt="Image"
          className="h-48 w-full object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-foregound flex flex-row justify-start">
              {data.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className={`text-secondary flex flex-row justify-start  ${mclaren.className}`}>
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
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center  border border-accent text-accent rounded"
            aria-label="Open dialog"
          >
            <ExternalLink size={12} />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden bg-background sm:w-[500px]"
        >
          <MorphingDialogImage
            src={data.image}
            alt="Image of Animal"
            className="h-full w-full"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-foregound flex flex-row justify-start">
              {data.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className={`text-secondary flex flex-row justify-start ${mclaren.className} `}>
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
              <div className="flex flex-row justify-end my-4">
              <Button variant={"outline"}>
                <a
                  href={`https://wellingtonspca.co.za/up-for-adoption/dogs/${data.name}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact{" "}
                </a>
              </Button>
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
