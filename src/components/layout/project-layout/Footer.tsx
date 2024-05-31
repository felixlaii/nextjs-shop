import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { STORE_DETAILS } from "../../../../public/data/store-info";

const LogoFooter = () => {
  return (
    <div>
      <div className="relative">
        <Image
          className=""
          width={150}
          height={50}
          src="/images/macaron-logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

const FooterCTA = () => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <Link href="/contact">
          <button className="bg-transparent text-pink-300 font-light text-sm hover:text-pink-400 mt-2 py-1 px-3 border-double border-4 border-pink-200 hover:border-pink-400 rounded">
            contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

const StoreContact = () => {
  return (
    <div>
      <div className="pb-1">
        <div className="flex flex-row items-center justify-center mt-2 mb-1">
          <AiOutlinePhone className="mr-2 w-5 h-5 text-pink-300" />
          <a
            className="hover:underline text-[.8em] text-pink-400 tracking-widest"
            href={`tel:${STORE_DETAILS.phone}`}
          >
            {STORE_DETAILS.phone}
          </a>
        </div>
        <div className="flex flex-row items-center justify-center mt-2 mb-1">
          <AiOutlineMail className="mr-2 w-5 h-5 text-pink-300" />
          <a
            className="text-[.8em] hover:underline tracking-[.3em] text-pink-400"
            href={`mailto:${STORE_DETAILS.email}`}
          >
            {STORE_DETAILS.email}
          </a>
        </div>
        <div className=" flex flex-row items-center justify-center mt-2 mb-1">
          <AiOutlineInstagram className="mr-2 w-5 h-5 text-pink-300 " />
          <a
            className="text-[.8em] hover:underline tracking-[.3em] text-pink-400"
            href="https://www.instagram.com/fl_macarons?igsh=ZjJkbGh0bmEwdzVl&utm_source=qr"
            target="_blank"
          >
            {" "}
            {STORE_DETAILS.ig}
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-screen mb-6">
      <div className="flex flex-col items-center justify-center">
        <div>
          <LogoFooter />
        </div>
        <div>
          <StoreContact />
        </div>
      </div>
      <div>
        <FooterCTA />
      </div>
    </footer>
  );
};

export default Footer;
