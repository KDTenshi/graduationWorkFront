import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import PriceList from "@/components/Pages/PriceList/PriceList";
import ReviewsSlider from "@/components/Pages/ReviewsSlider/ReviewsSlider";
import Sections from "@/components/Pages/Sections/Sections";
import Sertificates from "@/components/Pages/Sertificates/Sertificates";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <main>
      <Banner />
      <Sections />
      <Benefits />
      <PriceList />
      <ReviewsSlider />
      <Sertificates />
    </main>
  );
};

export default HomePage;
