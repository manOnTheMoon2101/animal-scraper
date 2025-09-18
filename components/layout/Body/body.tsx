"use client";
import React, { useState, useMemo } from "react";
import { MorphingDialogBasicOne } from "./Components/viewdialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface DataItem {
  animalType: string;
  [key: string]: any;
}

function Body({ data }: { data: DataItem[] }) {
  const [filter, setFilter] = useState<string>("");

  const uniqueTypes = useMemo(() => {
    const types = new Set(data.map((item) => item.animalType?.toLowerCase()));
    return Array.from(types)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b)) as string[];
  }, [data]);

  const filteredData = filter
    ? data.filter((item) => item.animalType?.toLowerCase() === filter.toLowerCase())
    : data;

  return (
    <div className="border-t-2 border-secondary my-2 mx-2">
      <div className="flex flex-row justify-center gap-4 items-center my-24">
        <Select onValueChange={(value) => setFilter(value)} value={filter}>
          <SelectTrigger className="w-[180px]">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-accent" />
              <SelectValue placeholder="Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            {uniqueTypes.map((animalType) => (
              <SelectItem key={animalType} value={animalType}>
                {animalType.charAt(0).toUpperCase()  + animalType.slice(1) + 's'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {filter && (
          <Button
            variant="destructive"
            onClick={() => setFilter("")}
            className="h-10"
          >
            Clear Filter
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 place-items-center">
        {filteredData.map((x, index) => (
          <div className="my-8" key={index}>
            <MorphingDialogBasicOne data={x} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
