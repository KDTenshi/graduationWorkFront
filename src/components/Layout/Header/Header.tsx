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

const Header: FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <header className={st.Header}>
      <div className={st.Wrap}>
        <Link href={"/"} className={st.Logo}>
          <Logo />
        </Link>
        <div className={st.Links}>
          <Link href={"mailto:sales@alfagroup-sport.ru"} className={st.Link}>
            sales@alfagroup-sport.ru
          </Link>
          <Link href={"tel:+78332451646"} className={st.Link}>
            +7(8332)45-16-46
          </Link>
        </div>
        <button className={st.Burger} onClick={() => setIsMenuShown(true)}>
          <Image src={Burger} alt="Burger" />
        </button>
      </div>
      <Suspense fallback={<NavBarSkeleton />}>
        <NavBar />
      </Suspense>
      <SideBar isShown={isMenuShown} setIsShown={setIsMenuShown} />
    </header>
  );
};

export default Header;
