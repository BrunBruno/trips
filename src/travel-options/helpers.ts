import type { StayOption, TravelOption } from "../types";

// Mapowanie kodów ISO-3 (z CSV / TRAVEL_OPTIONS) na ISO-2 wymagane przez FlagCDN
export const ISO3_TO_ISO2: Record<string, string> = {
  THA: "th",
  VNM: "vn",
  PER: "pe",
  JPN: "jp",
  KOR: "kr",
  CRI: "cr",
  PHL: "ph",
  CPV: "cv",
  PRT: "pt",
  BHS: "bs",
  ISL: "is",
  TTO: "tt",
  KGZ: "kg",
  CHN: "cn",
  GEO: "ge",
  ESP: "es",
  MEX: "mx",
  NZL: "nz",
  AUS: "au",
  MDV: "mv",
  BRN: "bn",
  TWN: "tw",
  HKG: "hk",
  SGP: "sg",
  MAR: "ma",
  TUN: "tn",
  MLT: "mt",
  USA: "us",
  CAN: "ca",
  BRA: "br",
  ARG: "ar",
  ALB: "al",
  GBR: "gb",
  NLD: "nl",
  SYC: "sc",
  PLW: "pw",
  FJI: "fj",
  MYS: "my",
  YEM: "ye",
  TZA: "tz",
  MDG: "mg",
  REU: "re",
  ABW: "aw",
  ZAF: "za",
  OMN: "om",
  IND: "in",
  NPL: "np",
  KEN: "ke",
  TUR: "tr",
  SVN: "si",
  KAZ: "kz",
  MNG: "mn",
  MUS: "mu",
  HRV: "hr",
  GRC: "gr",
  CYP: "cy",
  NOR: "no",
  ITA: "it",
  LKA: "lk",
  ARE: "ae",
  QAT: "qa",
  IDN: "id",
  FRA: "fr",
  CZE: "cz",
  AUT: "at",
  CHE: "ch",
  EGY: "eg",
  BGR: "bg",
};

export type RiskLevel = 1 | 2 | 3 | 4;
export interface EnrichedTravelOption extends TravelOption {
  compositeRiskScore: number | null; // skala 0 - 100
  riskLevel: RiskLevel | null; // 1 - 4
  avgPrice: number; // dokładna średnia z pricePlane oraz priceStay (1 - 5)
  avgPriceLevel: number; // zaokrąglony poziom 1 - 5 odpowiadający znakom $ - $$$$$
  estimatedDays: number;
  estimatedTotalCostZL: number; // pricePlaneZL + estimatedDays * priceStayZL
}

export const STAY_OPT_DAYS: Record<StayOption, number> = {
  HOTEL: 7,
  SIGHTSEEING: 14,
  STOPOVER: 2,
};

export type SortField = "season" | "risk" | "avgPrice";
export type SortDirection = "asc" | "desc";
export type FilterColumn = "season" | "avgPrice" | "risk" | "stayOpt";

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export const ALL_MONTHS = [
  "Sty",
  "Lut",
  "Mar",
  "Kwi",
  "Maj",
  "Cze",
  "Lip",
  "Sie",
  "Wrz",
  "Paź",
  "Lis",
  "Gru",
] as const;

export const MONTH_ORDER: Record<string, number> = {
  sty: 1,
  styczeń: 1,
  lut: 2,
  luty: 2,
  mar: 3,
  marzec: 3,
  kwi: 4,
  kwiecień: 4,
  maj: 5,
  cze: 6,
  czerwiec: 6,
  lip: 7,
  lipiec: 7,
  sie: 8,
  sierpień: 8,
  wrz: 9,
  wrzesień: 9,
  paź: 10,
  październik: 10,
  lis: 11,
  listopad: 11,
  gru: 12,
  grudzień: 12,
};
