import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Contacts from "@/components/Pages/Contacts/Contacts";
import Map from "@/components/Pages/Map/Map";
import Projects from "@/components/Pages/Projects/Projects";
import ReviewsSlider from "@/components/Pages/ReviewsSlider/ReviewsSlider";
import Sertificates from "@/components/Pages/Sertificates/Sertificates";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "О нас",
};

const AboutPage: FC = () => {
  return (
    <main>
      <Banner />
      <Contacts />
      <Benefits />
      <Sertificates />
      <ReviewsSlider />
      <Projects />
      <Map />
    </main>
  );
};

export default AboutPage;
