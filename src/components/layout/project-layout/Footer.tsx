import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { STORE_DETAILS } from "../../../../public/data/store-info";
const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className=""
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
    <div className="flex flex-row">
      <div className="mx-5 mb-2">
        <a
          href="https://www.instagram.com/fl_macarons?igsh=ZjJkbGh0bmEwdzVl&utm_source=qr"
          target="_blank"
        >
          {" "}
          <Image
            width={20}
            height={35}
            src="/images/Instagram_Glyph_Gradient.png"
            alt="socials"
          />
        </a>
      </div>
      <div className="mx-5 mb-2">
        <a href="mailto:fl.macarons@hotmail.com" target="_blank">
          {" "}
          <AiOutlineMail className="w-5 h-5" />
        </a>
      </div>
      <div className="mx-5 mb-2">
        <a href="tel:+16472866922">
          {" "}
          <AiOutlinePhone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-screen">
      <div className="flex flex-col items-center justify-center">
        <div>
          <LogoFooter />
        </div>
        <div>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
