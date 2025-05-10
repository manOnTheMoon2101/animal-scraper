import React from "react";
import { ModeToggle } from "./Header/Theme_Toggle/toggle";

function Header() {
  return (
    <div>
      <div className="flex justify-end mx-4">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
