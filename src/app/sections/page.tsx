import Banner from "@/components/Pages/Banner/Banner";
import Sections from "@/components/Pages/Sections/Sections";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Товары и услуги",
};

const SectionsPage: FC = () => {
  return (
    <main>
      <Banner />
      <Sections />
    </main>
  );
};

export default SectionsPage;
