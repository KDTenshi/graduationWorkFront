import { FC } from "react";
import Vertical from "./Parts/Vertical";
import Horizontal from "./Parts/Horizontal";
import { getSections } from "@/utils/getSections";

interface NavBarProps {
  direction?: "vertical" | "horizontal";
}

const NavBar: FC<NavBarProps> = async ({ direction = "horizontal" }) => {
  const sections = await getSections();

  if (!sections) return;

  if (direction === "vertical") {
    return <Vertical sections={sections} />;
  }

  return <Horizontal sections={sections} />;
};

export default NavBar;
