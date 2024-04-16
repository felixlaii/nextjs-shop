import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import { Header } from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { NavigationLink } from "@/types/component-types";

/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useRouter();

  const navigationLinks: Array<NavigationLink> = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/photo-gallery" },
    { name: "EXPERTISE", href: "/flavours-pricing" },
    { name: "EXPERIENCE", href: "/contact-me" },
  ];

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
