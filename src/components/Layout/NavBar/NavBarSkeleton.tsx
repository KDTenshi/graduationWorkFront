import { FC } from "react";
import st from "./NavBar.module.css";

interface NavBarSkeletonProps {
  direction?: "horizontal" | "vertical";
}

const NavBarSkeleton: FC<NavBarSkeletonProps> = ({ direction = "horizontal" }) => {
  if (direction === "vertical") {
    return (
      <nav className={st.NavBarSkeleton_Vertical}>
        <div className={st.Loader}></div>
        <p>Загрузка...</p>
      </nav>
    );
  }

  return (
    <nav className={st.NavBarSkeleton}>
      <div className={st.Loader}></div>
    </nav>
  );
};

export default NavBarSkeleton;
