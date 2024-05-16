import Image from "next/image";
import MacaronLogo from "../../../../public/images/macaron-logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={MacaronLogo} width={250} height={250} alt="header logo" />
    </div>
  );
};

export default Logo;
