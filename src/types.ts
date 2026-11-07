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
  maps?: Position[];
  history?: MyHistory[];
  imgCount?: number;
  coverCount?: number;
  transit?: string;
  food?: {
    [key in number]: string;
  };
};

export type Point = {
  lat: number;
  lng: number;
  cap: string;
  typ?: "l" | "n" | "x";
  imgs?: number[];
};
export type Position = {
  points: Point[];
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
    styles?: CSSProperties;
  };
  images: number[];
  captions?: {
    [key in number]: string;
  };
  position: Position;

  imagePositions?: {
    [key in number]: Position;
  };
  svg?: {
    item: JSX.Element;
    styles?: CSSProperties;
  };
  svg2?: {
    item: JSX.Element;
    styles?: CSSProperties;
  };
  imgs?: {
    items: string[];
    styles?: CSSProperties;
  };
  img?: JSX.Element;
  imgStyles?: CSSProperties;
  hid?: 1;
};
