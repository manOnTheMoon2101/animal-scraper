"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import tipsData from "@/utils/tips.json";
import { Badge } from "@/components/ui/badge";
const RandomTip = () => {
  const [currentTip, setCurrentTip] = useState("");
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(null);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tipsData.length);
    return tipsData[randomIndex].tip;
  };

  const showNewTip = () => {
    const newTip = getRandomTip();
    setCurrentTip(newTip);
    setProgress(0);
    const newTimer: any = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(newTimer);
          setCurrentTip("");
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    setTimer(newTimer);
  };

  useEffect(() => {
    showNewTip();
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  useEffect(() => {
    if (currentTip === "") {
      showNewTip();
    }
  }, [currentTip]);

  return (
    <div>
      {currentTip ? (
        <div className="text-xl flex flex-col justify-center items-center">
          <span>
            {" "}
            <Badge className="bg-white text-black">Tips</Badge>
          </span>
          <span className="font-thin italic">{currentTip}</span>
          <Progress value={progress} max={100} />
        </div>
      ) : (
       <span>loading</span>
      )}
    </div>
  );
};

export default RandomTip;
