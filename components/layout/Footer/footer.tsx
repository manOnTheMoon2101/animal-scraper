import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
const Footer = () => {
  return (
    <div className="my-12 ">
      <div className="flex flex-row justify-center">
        <h3>@cleveclayton</h3>
      </div>
      <div className="flex flex-row justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded cursor-pointer">
              <Info />
              Data Ownership
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            The information displayed on this website is sourced from the
            Wellington SPCA website through automated scraping. We do not own,
            control, or claim any rights to this data. All content, including
            animal profiles, images, and descriptions, remains the property of
            Wellington SPCA or their respective owners.<br/><br/>This website is intended
            solely to promote animal adoptions by aggregating publicly available
            information. We strive to keep the data accurate and up-to-date but
            make no guarantees regarding its completeness or reliability. For
            the most current information or to proceed with adoptions, please
            visit the official Wellington SPCA website.<br/><br/>By using this site, you
            agree to respect the intellectual property rights of the original
            data owners.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Footer;
