"use client";

import { FC, Suspense, useState } from "react";
import st from "./Header.module.css";
import Logo from "@/components/UI/Logo/Logo";
import Link from "next/link";
import NavBar from "../NavBar/NavBar";
import Burger from "/public/burger.svg";
import Image from "next/image";
import SideBar from "../SideBar/SideBar";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";
import Links from "./Parts/Links";

const Header: FC = () => {
  const [sideBarShown, setSideBarShown] = useState(false);

  return (
    <header className={st.Header}>
      <div className={st.Wrap}>
        <Logo />
        <Links />
        <button className={st.Burger} onClick={() => setSideBarShown(!sideBarShown)}>
          <Image src={Burger} alt="Burger" />
        </button>
        <SideBar isShown={sideBarShown} />
      </div>
      <Suspense fallback={<NavBarSkeleton />}>
        <NavBar />
      </Suspense>
    </header>
  );
};

export default Header;
