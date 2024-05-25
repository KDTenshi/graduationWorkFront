import Link from "next/link";
import { FC } from "react";

interface MailLinkProps {
  className: string;
}

const MailLink: FC<MailLinkProps> = ({ className }) => {
  return (
    <Link href={"mailto:sales@alfagroup-sport.ru"} className={className} target="_blank">
      sales@alfagroup-sport.ru
    </Link>
  );
};

export default MailLink;
