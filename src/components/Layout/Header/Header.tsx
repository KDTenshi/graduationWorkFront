import { FC, Suspense, useState } from "react";
import st from "./Header.module.css";
import Logo from "@/components/UI/Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Burger from "/public/burger.svg";
import Image from "next/image";
import SideBar from "../SideBar/SideBar";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";
import Links from "./Parts/Links";

const Header: FC = () => {
  return (
    <header className={st.Header}>
      <div className={st.Wrap}>
        <Logo />
        <Links />
        <button className={st.Burger}>
          <Image src={Burger} alt="Burger" />
        </button>
        <SideBar id={st.SideBar} />
      </div>
      <Suspense fallback={<NavBarSkeleton />}>
        <NavBar />
      </Suspense>
    </header>
  );
};

export default Header;
