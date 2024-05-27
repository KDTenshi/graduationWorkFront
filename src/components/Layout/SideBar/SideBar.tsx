import { Dispatch, FC, MouseEvent, MouseEventHandler, SetStateAction, Suspense } from "react";
import st from "./SideBar.module.css";
import NavBar from "./../NavBar/NavBar";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";

interface SideBarProps {
  isShown: boolean;
}

const SideBar: FC<SideBarProps> = ({ isShown }) => {
  return (
    <div className={isShown ? st.SideBar : st.SideBar_Hidden}>
      <Suspense fallback={<NavBarSkeleton direction="vertical" />}>
        <NavBar direction="vertical" />
      </Suspense>
    </div>
  );
};

export default SideBar;
