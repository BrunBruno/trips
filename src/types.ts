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

export type YearRecord = {
  year: string;
  folder: string;
  history?: MyHistory[];
  coverCount?: number;
};

export type DangerType =
  | "CYCLONES"
  | "MONSOON"
  | "RAINY_SEASON"
  | "EXTREME_HEAT"
  | "EXTREME_COLD"
  | "ROUGH_SEAS";

type Price = 1 | 2 | 3 | 4 | 5;
export type StayOption = "HOTEL" | "SIGHTSEEING" | "STOPOVER";
export interface TravelOption {
  code: string;
  name: string;
  place?: string;
  region?: string;
  monthF: string;
  monthT: string;
  dangerF?: string;
  dangerT?: string;
  dangerType?: DangerType;
  pricePlane: Price;
  priceStay: Price;
  pricePlaneZL: number;
  priceStayZL: number;
  stayOpt: StayOption;
}

export interface CountrySafetyMetrics {
  code: string;
  raw: {
    govAdvisory: number; // 1 - 4
    stabilityIndex: number; // 1 - 5
    informRisk: number; // 0 - 10
    worldRisk: number; // 0 - 100
  };
  normalized: {
    govAdvisory: number; // 0 - 100
    stabilityIndex: number; // 0 - 100
    informRisk: number; // 0 - 100
    worldRisk: number; // 0 - 100
  };
  compositeRiskScore: number; // 0 - 100
  updatedAt: string;
}

export type SafetyScoresMap = Record<string, CountrySafetyMetrics>;
