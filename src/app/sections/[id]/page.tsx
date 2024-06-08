import Benefits from "@/components/Pages/Benefits/Benefits";
import Categories from "@/components/Pages/Categories/Categories";
import Request from "@/components/Pages/Request/Request";
import SectionBanner from "@/components/Pages/SectionBanner/SectionBanner";
import { getSectionById } from "@/utils/getSectionById";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC } from "react";

interface SectionPageProps {
  params: {
    id: string;
  };
}

const SectionPage: FC<SectionPageProps> = async ({ params }) => {
  const section = await getSectionById(params.id);

  if (!section) redirect("/");

  return (
    <main>
      <SectionBanner section={section} />
      <Categories categories={section.categories} />
      <Benefits />
      <Request />
    </main>
  );
};

export default SectionPage;
