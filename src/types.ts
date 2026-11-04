import type { ComponentType, CSSProperties, JSX } from "react";

export type CountryRecord = {
  name: string;
  country?: string;
  folder: string;
  year: number;
  month?: number;
  flag: ComponentType;
  flags?: JSX.Element[];
  map?: JSX.Element;
  history?: MyHistory[];
  imgCount?: number;
  coverCount?: number;
  transit?: string;
};

export type Position = {
  lat: number;
  lng: number;
  zoom: number;
};
export type MyHistory = {
  date: string;
  name: string;
  transit?: {
    from: string;
    to: string;
  };
  sleep?: {
    name: string;
    styles: CSSProperties;
  };
  images: number[];
  captions?: {
    [key in number]: string;
  };
  position: Position;
  imagePositions?: {
    [key in number]: Position;
  };
  svg?: JSX.Element;
  svgStyles?: CSSProperties;
  img?: JSX.Element;
  imgStyles?: CSSProperties;

  hid?: 1;
};
