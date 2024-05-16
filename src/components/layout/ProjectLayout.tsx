import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import { Header } from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import logo from "../../../public/images/felixlaii-logo.svg";
/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useRouter();

  const navigationLinks: Array<NavigationLink> = [
    { name: "home", href: "/" },
    { name: "gallery", href: "/photo-gallery" },
    { name: "menu", href: "/menu-options" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Wrapper>
      <Header
        logo={logo.src}
        navigationLinks={navigationLinks}
        currentActiveLocation={location.pathname}
        textClassName="group text-md transition-all duration-100 ease-in-out font-light mx-8 text-brand-lightish dark:text-brand-base"
        linkClassName="flex bg-left-bottom lg:text-md"
        logoClassName="w-full mt-2"
        hoverClassName={clsx(
          "flex bg-left-bottom hover:text-brand-base bg-gradient-to-r from-brand-darkest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        )}
        activeLinkClassName="text-brand-cardbg font-normal lg:text-lg font-light"
      />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
