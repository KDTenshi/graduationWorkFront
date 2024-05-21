import { Dispatch, FC, SetStateAction, Suspense } from "react";
import st from "./SideBar.module.css";
import NavBar from "./../NavBar/NavBar";
import Link from "next/link";
import Cross from "/public/cross.svg";
import Image from "next/image";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";

interface SideBarProps {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

const SideBar: FC<SideBarProps> = ({ isShown = false, setIsShown }) => {
  return (
    <div className={isShown ? st.SideBar : [st.SideBar, st.SideBar_hidden].join(" ")}>
      <button onClick={() => setIsShown(!isShown)} className={st.Button}>
        <Image src={Cross} alt="Cross" />
      </button>
      <Suspense fallback={<NavBarSkeleton direction="vertical" />}>
        <NavBarSkeleton direction="vertical" />
      </Suspense>
    </div>
  );
};

export default SideBar;
