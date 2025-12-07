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
import { Fira_Sans } from "next/font/google";
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
            <MorphingDialogTitle className="text-secondary text-2xl flex flex-row justify-start font-bold">
              {data.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className={`text-accent flex flex-row justify-start  ${fira.className}`}>
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
            className="relative bg-accent ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center  border border-accent text-white rounded"
            aria-label="Open dialog"
          >
            <ExternalLink size={12} className="hover:text-primary" />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer >
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
            <MorphingDialogSubtitle className={`text-muted flex flex-row justify-start ${fira.className} `}>
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
          <MorphingDialogClose className="text-zinc-50 cursor-pointer hover:text-destructive" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
