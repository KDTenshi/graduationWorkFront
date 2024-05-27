import { FC } from "react";
import st from "./Logo.module.css";
import LogoBlack from "/public/logo_black.svg";
import LogoWhite from "/public/logo_white.svg";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  color?: "black" | "white";
  size?: "small" | "big";
}

const Logo: FC<LogoProps> = ({ color = "black", size = "big" }) => {
  if (color === "white") {
    return (
      <Link className={[st.Logo, st.Logo_White].join(" ")} href={"/"}>
        <Image src={LogoWhite} alt="Logo" />
        {size === "big" && <h1>Альфа групп</h1>}
      </Link>
    );
  }

  return (
    <Link className={st.Logo} href={"/"}>
      <Image src={LogoBlack} alt="Logo" />
      {size === "big" && <h1>Альфа групп</h1>}
    </Link>
  );
};

export default Logo;
