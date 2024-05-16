import Image from "next/image";
import MacaronIcon from "../../../../public/images/macaron-mobile.png";

const HamburgerIcon: React.FC = () => {
  const genericHamburgerLine = `h-[2px] w-8 my-[0.3rem] rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="flex flex-col w-20 rounded justify-center items-center group">
      {/* <div className={`${genericHamburgerLine}`} />
      <div className={`${genericHamburgerLine}`} />
      <div className={`${genericHamburgerLine}`} /> */}
      <Image
        className=""
        src={MacaronIcon}
        width={350}
        height={350}
        alt="macaron icon"
      />
    </div>
  );
};

export default HamburgerIcon;
