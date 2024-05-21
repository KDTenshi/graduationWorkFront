import { FC } from "react";
import st from "./Logo.module.css";
import LogoBlack from "/public/logo_black.svg";
import LogoWhite from "/public/logo_white.svg";
import Image from "next/image";

interface LogoProps {
  color?: "black" | "white";
  size?: "small" | "big";
}

const Logo: FC<LogoProps> = ({ color = "black", size = "big" }) => {
  if (color === "white") {
    return (
      <div className={[st.Logo, st.Logo_White].join(" ")}>
        <Image src={LogoWhite} alt="Logo" />
        {size === "big" && <h1>Альфа групп</h1>}
      </div>
    );
  }

  return (
    <div className={st.Logo}>
      <Image src={LogoBlack} alt="Logo" />
      {size === "big" && <h1>Альфа групп</h1>}
    </div>
  );
};

export default Logo;
