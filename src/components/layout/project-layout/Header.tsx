import React, { Fragment, useEffect, useRef, useState } from "react";
import { HeaderProps } from "@/types/component-types";
import Link from "next/link";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";

export function useOnClickOutside<T extends HTMLDivElement>(
  ref: React.RefObject<T>,
  handler: (e: any) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const LogoLink: React.FC<
  Pick<HeaderProps, "onLinkClick" | "logo" | "alt"> & {
    logoClassName?: string;
    showSidePanel?: boolean;
  }
> = ({ onLinkClick, logoClassName }) => {
  return (
    <div>
      <Link
        href="/"
        className={clsx(
          "flex lg:inline-block w-full relative",
          "focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent",

          logoClassName
        )}
        onClick={onLinkClick}
      >
        {/* <Logo /> */}
      </Link>
    </div>
  );
};

const MenuLinks: React.FC<
  Pick<
    HeaderProps,
    | "navigationLinks"
    | "currentActiveLocation"
    | "activeLinkClassName"
    | "linkClassName"
    | "hoverClassName"
    | "onLinkClick"
    | "textClassName"
  > & { onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  linkClassName,
  onLinkClick,
}) => {
  return (
    <div>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                currentActiveLocation?.includes(link.href)
                  ? activeLinkClassName
                  : linkClassName,
                hoverClassName,
                textClassName,
                "text-center lg:text-left border-b-[1px] font-light py-[0.75rem]",
                "flex flex-col"
              )}
              onClick={onLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesktopNavBar: React.FC<
  Pick<
    HeaderProps,
    | "onLinkClick"
    | "navigationLinks"
    | "linkClassName"
    | "hoverClassName"
    | "activeLinkClassName"
    | "currentActiveLocation"
    | "textClassName"
  >
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  linkClassName,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });
  return (
    <ul className="flex">
      {navigationLinks.map((link, i) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                currentActiveLocation?.includes(link.href)
                  ? activeLinkClassName
                  : linkClassName,
                textClassName,
                "text-center lg:text-left",
                "flex flex-col"
              )}
              onClick={() => setIsClick(true)}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            >
              <span className={clsx(hoverClassName)}>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const Header: React.FC<HeaderProps> = ({
  navigationLinks,
  companyName,
  companyNameClassName,
  linkClassName,
  hoverClassName,
  activeLinkClassName,
  currentActiveLocation,
  textClassName,
  logo,
  logoClassName,
  alt,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <div>
      <header className="flex justify-between w-full items-center transition-all duration-100">
        <div className="flex items-center">
          <div className="m-1">
            {logo ? (
              <LogoLink logo={logo} alt={alt} logoClassName={logoClassName} />
            ) : (
              <Link href="/">
                <div className={clsx(companyNameClassName, "")}>
                  {companyName}
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center ">
          <Popover className=" lg:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button
                  className={clsx(
                    "flex px-6 mt-2",
                    "focus:outline-none focus:ring-1 focus-ring-inset focus:ring-black-100"
                  )}
                >
                  <HamburgerIcon />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-50 mt-4 tracking-widest w-full -translate-x-1/2 transform px-0 sm:px-0 lg:max-w-3xl bg-zinc-200 border-y-[2px] shadow-xl">
                    {({ close }) => (
                      <div>
                        <MenuLinks
                          navigationLinks={navigationLinks}
                          linkClassName={linkClassName}
                          hoverClassName={hoverClassName}
                          activeLinkClassName={activeLinkClassName}
                          currentActiveLocation={currentActiveLocation}
                          onLinkClick={() => close()}
                        />
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div className="hidden lg:inline-flex mt-3 justify-center">
          <DesktopNavBar
            navigationLinks={navigationLinks}
            textClassName={textClassName}
            linkClassName={linkClassName}
            hoverClassName={hoverClassName}
            activeLinkClassName={activeLinkClassName}
            currentActiveLocation={currentActiveLocation}
          />
        </div>
      </header>
    </div>
  );
};
