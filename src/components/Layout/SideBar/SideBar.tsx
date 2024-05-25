import { Dispatch, FC, MouseEvent, MouseEventHandler, SetStateAction, Suspense } from "react";
import st from "./SideBar.module.css";
import NavBar from "./../NavBar/NavBar";
import Cross from "/public/cross.svg";
import Image from "next/image";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";

interface SideBarProps {
  isShown: boolean;
  setIsShown: Dispatch<SetStateAction<boolean>>;
}

const SideBar: FC<SideBarProps> = ({ isShown = false, setIsShown }) => {
  const hideSideBar = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isTargeted = target.classList.contains(st.SideBar);

    if (!isTargeted) {
      setIsShown(false);
    }
  };

  return (
    <div className={isShown ? st.SideBar : [st.SideBar, st.SideBar_hidden].join(" ")} onClick={hideSideBar}>
      <button onClick={() => setIsShown(false)} className={st.Button}>
        <Image src={Cross} alt="Cross" />
      </button>
      <Suspense fallback={<NavBarSkeleton direction="vertical" />}>
        <NavBar direction="vertical" />
      </Suspense>
    </div>
  );
};

export default SideBar;
