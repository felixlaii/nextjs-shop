import react from "react";
import Image from "next/image";
import MacaronLogo from "../../../../public/images/macaron-logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={MacaronLogo} width={200} height={200} alt="header logo" />
    </div>
  );
};

export default Logo;
