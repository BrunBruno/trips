import type { ComponentType, JSX } from "react";

export type CountryRecord = {
  name: string;
  country: string;
  folder: string;
  year: number;
  month?: number;
  flag: ComponentType;
  map?: JSX.Element;
  history?: MyHistory[];
  imgCount?: number;
};

export type MyHistory = {
  date: string;
  name: string;
  images: number[];
  captions?: {
    [key in number]: string;
  };
  position: {
    lat: number;
    lng: number;
    zoom: number;
  };
};
