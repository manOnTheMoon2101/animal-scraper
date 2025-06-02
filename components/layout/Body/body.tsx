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

interface DataItem {
  type: string;
  [key: string]: any;
}

function Body({ data }: { data: DataItem[] }) {
  const [filter, setFilter] = useState<string>("");

  const uniqueTypes = useMemo(() => {
    const types = new Set(data.map((item) => item.type?.toLowerCase()));
    return Array.from(types)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b)) as string[];
  }, [data]);

  const filteredData = filter
    ? data.filter((item) => item.type?.toLowerCase() === filter.toLowerCase())
    : data;

  return (
    <div>
      <div className="flex flex-row justify-center gap-4 items-center">
        <Select onValueChange={(value) => setFilter(value)} value={filter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            {uniqueTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
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
