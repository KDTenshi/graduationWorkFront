import { FC } from "react";
import st from "./BenefitCard.module.css";
import { TBenefit } from "@/Types";
import Image from "next/image";

interface BenefitCardProps {
  benefit: TBenefit;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className={st.Card}>
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
      <Image src={benefit.img} alt="Benefit" width={64} height={64} />
    </div>
  );
};

export default BenefitCard;
