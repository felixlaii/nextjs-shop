import React, { ReactNode } from "react";

export interface NavigationLink {
  name: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavigationLink[];
  linkClassName: string;
  hoverClassName: string;
  activeLinkClassName: string;
  currentActiveLocation?: string;
  textClassName?: string;
  companyName?: string;
  companyNameClassName?: string;
  logo: string;
  logoClassName?: string;
  alt?: string;
  onLinkClick?: () => void;
}

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export interface PhotoGalleryProps {
  photo: string;
  src: string;
}

export interface FormData {
  floating_name: string;
  floating_email: string;
  floating_phone: string;
  floating_date: string;
  floating_message: string;
  dropzone_file?: File[]; // Define dropzone_file as an array of File
}
