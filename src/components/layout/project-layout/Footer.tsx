import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className="w-[8.3rem] h-[2.7rem] md:w-[8rem] md:h-[2.5rem] lg:w-[11.5rem] lg:h-[2.5rem] pt-4 pb-2"
          width={100}
          height={40}
          src="/images/macaron-logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

const FooterSocials = () => {
  return (
    <div>
      <div className="mx-5 mb-2">
        <a
          href="https://www.instagram.com/fl_macarons?igsh=ZjJkbGh0bmEwdzVl&utm_source=qr"
          target="_blank"
        >
          {" "}
          <Image
            width={35}
            height={35}
            src="/images/Instagram_Glyph_Gradient.png"
            alt="socials"
          />
        </a>
      </div>
      <div className="mx-5 mb-2">
        <a href="mailto:fl.macarons@hotmail.com" target="_blank">
          {" "}
          <AiOutlineMail />
        </a>
      </div>
      <div className="mx-5 mb-2">
        <a href="tel:+16472866922">
          {" "}
          <AiOutlinePhone />
        </a>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return <div className="w-screen"></div>;
};

export default Footer;
