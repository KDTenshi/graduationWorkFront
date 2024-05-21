import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import "@/styles/App.css";
import Header from "@/components/Layout/Header/Header";

const mulish = Mulish({ subsets: ["cyrillic"], weight: ["400", "700", "900"] });

const title = "";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
