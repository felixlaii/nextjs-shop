import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
      <Image width={90} height={90} alt="Hero" src="/images/macaron-hero.png" />
    </div>
  );
};

export default Hero;
