import { FC } from "react";
import st from "./BenefitCard.module.css";
import { TBenefit } from "@/Types";

interface BenefitCardProps {
  benefit: TBenefit;
}

const BenefitCard: FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className={st.Card}>
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </div>
  );
};

export default BenefitCard;
