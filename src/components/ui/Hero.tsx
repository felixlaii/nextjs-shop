import Image from "next/image";
import Carousel from "./Carousel";

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center max-h-full mt-10 w-full bg-gray-70">
      <Carousel />
      {/* <Image
        width={500}
        height={500}
        alt="Hero"
        src="/images/macaron-boxes-heros.png"
        className="opacity-40"
      /> */}
    </div>
  );
};

export default Hero;
