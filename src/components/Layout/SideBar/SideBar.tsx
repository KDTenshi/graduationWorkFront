import { FC, Suspense } from "react";
import st from "./SideBar.module.css";
import NavBar from "./../NavBar/NavBar";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";

interface SideBarProps {
  id: string;
}

const SideBar: FC<SideBarProps> = ({ id }) => {
  return (
    <div className={st.SideBar} id={id}>
      <Suspense fallback={<NavBarSkeleton direction="vertical" />}>
        <NavBar direction="vertical" />
      </Suspense>
    </div>
  );
};

export default SideBar;
