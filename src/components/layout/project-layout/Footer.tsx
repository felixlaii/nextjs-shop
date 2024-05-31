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

const Footer: React.FC = () => {
  return <div className="w-screen"></div>;
};

export default Footer;
