import Image from "next/image";
import MacaronLogo from "../../../../public/images/macaron-logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={MacaronLogo} width={300} height={300} alt="header logo" />
    </div>
  );
};

export default Logo;
