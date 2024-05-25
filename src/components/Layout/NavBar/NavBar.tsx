import { FC } from "react";
import { sections } from "@/Fakeserver";
import Vertical from "./Parts/Vertical";
import Horizontal from "./Parts/Horizontal";

interface NavBarProps {
  direction?: "vertical" | "horizontal";
}

const NavBar: FC<NavBarProps> = ({ direction = "horizontal" }) => {
  if (direction === "vertical") {
    return <Vertical sections={sections} />;
  }

  return <Horizontal sections={sections} />;
};

export default NavBar;
