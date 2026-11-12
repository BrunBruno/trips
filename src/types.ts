import type { ComponentType, CSSProperties, JSX } from "react";

export type Transit =
  | "plane"
  | "car"
  | "ferry"
  | "taxi"
  | "tuktuk"
  | "bus"
  | "train";

export type CountryRecord = {
  name: string;
  country?: string;
  folder: string;
  year: number;
  month?: number;
  flag: ComponentType;
  maps?: Position[];
  history?: MyHistory[];
  imgCount?: number;
  coverCount?: number;
  transit?: {
    from: string;
    to: string;
    through?: string;
    type?: Transit;
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
    type?: Transit;
  };
  sleep?: {
    name: string;
    styles?: CSSProperties;
  };
  trip?: {
    to: string;
    styles?: CSSProperties;
    type: Transit;
  };
  images: number[];
  captions?: {
    [key in number]: string;
  };
  position: Position;
  position2?: Position;

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
  food?: {
    name: string;
    img: number;
    styles?: CSSProperties;
  };
};
