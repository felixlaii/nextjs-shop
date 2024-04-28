import react from "react";
import Image from "next/image";
import MacaronLogo from "../../../../public/images/macaron-logo.svg";

const Logo = () => {
  return (
    <div>
      <Image src={MacaronLogo} width={100} height={100} alt="header logo" />
    </div>
  );
};

export default Logo;
