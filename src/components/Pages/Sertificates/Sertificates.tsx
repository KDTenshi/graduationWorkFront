import { FC } from "react";
import st from "./Sertificates.module.css";
import Image from "next/image";
import Link from "next/link";

const Sertificates: FC = () => {
  const sertificates = ["/sertificate_1.jpeg", "/sertificate_2.jpeg", "/sertificate_3.jpeg"];

  return (
    <div className={st.Sertificates}>
      <h2>Наши сертификаты</h2>
      <div className={st.Wrap}>
        {sertificates.map((sertificate) => (
          <Link href={sertificate} className={st.Image} key={sertificate} target="_blank">
            <img src={sertificate} alt="Sertificate" loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sertificates;
