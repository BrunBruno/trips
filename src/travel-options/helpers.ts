import type { DangerType, StayOption, TravelOption } from "../types";

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
  STP: "st",
  DEU: "de",
  HUN: "hu",
  ROU: "ro",
  MNE: "me",
  BIH: "ba",
  DNK: "dk",
  SWE: "se",
  FIN: "fi",
  BEL: "be",
  IRL: "ie",
  DOM: "do",
  CUB: "cu",
  JAM: "jm",
  COL: "co",
  CHL: "cl",
  PAN: "pa",
  ECU: "ec",
  KHM: "kh",
  JOR: "jo",
  SAU: "sa",
  UZB: "uz",
  EUR: "eu",
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

export function getFlagUrl(iso3: string): string | null {
  const iso2 = ISO3_TO_ISO2[iso3.toUpperCase()];
  return iso2 ? `https://flagcdn.com/w80/${iso2}.png` : null;
}

export function getMonthIndex(month: string): number {
  return MONTH_ORDER[month.trim().toLowerCase()] ?? 99;
}
// Sprawdza czy dany miesiąc (1-12) zawiera się w przedziale [monthF, monthT] (również przez przełom roku)
export function isMonthInRange(
  targetMonthIdx: number,
  fromMonth: string,
  toMonth: string,
): boolean {
  const start = getMonthIndex(fromMonth);
  const end = getMonthIndex(toMonth);
  if (start === 99 || end === 99) return false;

  if (start <= end) {
    return targetMonthIdx >= start && targetMonthIdx <= end;
  }
  // Zakres przechodzący przez przełom roku, np. Lis (11) -> Mar (3)
  return targetMonthIdx >= start || targetMonthIdx <= end;
}

export function parseNullableFloat(val: string | undefined): number | null {
  if (!val || val.trim() === "" || val.trim().toLowerCase() === "nan") {
    return null;
  }
  const num = Number(val.trim());
  return Number.isFinite(num) ? num : null;
}

export function parseCompositeRiskMap(csvText: string): Record<string, number> {
  const lines = csvText.trim().split(/\r?\n/);
  const map: Record<string, number> = {};

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length < 5) continue;

    const econ_code = parts[0].trim();
    const wgi_risk = parseNullableFloat(parts[parts.length - 1]);
    const inform_risk = parseNullableFloat(parts[parts.length - 2]);
    const gpi_risk = parseNullableFloat(parts[parts.length - 3]);

    const metrics = [gpi_risk, inform_risk, wgi_risk].filter(
      (v): v is number => v !== null,
    );

    if (metrics.length > 0) {
      const avg = metrics.reduce((sum, val) => sum + val, 0) / metrics.length;
      map[econ_code] = Math.round(avg * 100);
    }
  }

  return map;
}

export function getSeasonStyle(month: string): {
  seasonName: string;
  color: string;
  bg: string;
  border: string;
} {
  const monthIdx = getMonthIndex(month);

  if ([12, 1, 2].includes(monthIdx)) {
    return {
      seasonName: "Zima",
      color: "#0369a1",
      bg: "#e0f2fe",
      border: "#bae6fd",
    };
  }
  if ([3, 4, 5].includes(monthIdx)) {
    return {
      seasonName: "Wiosna",
      color: "#15803d",
      bg: "#dcfce7",
      border: "#bbf7d0",
    };
  }
  if ([6, 7, 8].includes(monthIdx)) {
    return {
      seasonName: "Lato",
      color: "#a16207",
      bg: "#fef9c3",
      border: "#fde047",
    };
  }
  if ([9, 10, 11].includes(monthIdx)) {
    return {
      seasonName: "Jesień",
      color: "#c2410c",
      bg: "#ffedd5",
      border: "#fed7aa",
    };
  }

  return {
    seasonName: "Inna",
    color: "#374151",
    bg: "#f3f4f6",
    border: "#e5e7eb",
  };
}

export function getRiskLevel(score: number): RiskLevel {
  if (score <= 25) return 1;
  if (score <= 50) return 2;
  if (score <= 75) return 3;
  return 4;
}

export function getRiskBadge(score: number): {
  level: RiskLevel;
  label: string;
  color: string;
  bg: string;
} {
  if (score <= 25) {
    return { level: 1, label: "Niskie", color: "#15803d", bg: "#dcfce7" };
  }
  if (score <= 50) {
    return { level: 2, label: "Umiarkowane", color: "#a16207", bg: "#fef9c3" };
  }
  if (score <= 75) {
    return { level: 3, label: "Podwyższone", color: "#c2410c", bg: "#ffedd5" };
  }
  return { level: 4, label: "Wysokie", color: "#b91c1c", bg: "#fee2e2" };
}

export const RISK_FILTER_OPTIONS: {
  level: RiskLevel;
  label: string;
  color: string;
  bg: string;
}[] = [
  { level: 1, label: "1 – Niskie (0–25)", color: "#15803d", bg: "#dcfce7" },
  {
    level: 2,
    label: "2 – Umiarkowane (26–50)",
    color: "#a16207",
    bg: "#fef9c3",
  },
  {
    level: 3,
    label: "3 – Podwyższone (51–75)",
    color: "#c2410c",
    bg: "#ffedd5",
  },
  { level: 4, label: "4 – Wysokie (76–100)", color: "#b91c1c", bg: "#fee2e2" },
];

export const STAY_OPT_META: Record<
  StayOption,
  { emoji: string; label: string; description: string }
> = {
  HOTEL: {
    emoji: "🏨",
    label: "Tylko hotel",
    description: "Wypoczynek stacjonarny / resort (lub bezpieczniej w hotelu)",
  },
  SIGHTSEEING: {
    emoji: "🎒",
    label: "Zwiedzanie",
    description: "Dłuższy wyjazd objazdowy, bezpieczny do eksploracji",
  },
  STOPOVER: {
    emoji: "✈️",
    label: "Przelotem",
    description: "Krótki wypad na kilka dni / blisko Polski / city break",
  },
};

export const STAY_OPT_LIST: StayOption[] = ["HOTEL", "SIGHTSEEING", "STOPOVER"];

export function getPriceBadge(level: number): {
  symbols: string;
  label: string;
  color: string;
  bg: string;
  border: string;
} {
  const clamped = Math.min(5, Math.max(1, Math.round(level)));
  const symbols = "$".repeat(clamped);

  switch (clamped) {
    case 1:
      return {
        symbols,
        label: "Bardzo tanio",
        color: "#15803d",
        bg: "#dcfce7",
        border: "#bbf7d0",
      };
    case 2:
      return {
        symbols,
        label: "Tanio",
        color: "#0f766e",
        bg: "#ccfbf1",
        border: "#99f6e4",
      };
    case 3:
      return {
        symbols,
        label: "Umiarkowanie",
        color: "#a16207",
        bg: "#fef9c3",
        border: "#fde047",
      };
    case 4:
      return {
        symbols,
        label: "Drogo",
        color: "#c2410c",
        bg: "#ffedd5",
        border: "#fed7aa",
      };
    case 5:
    default:
      return {
        symbols,
        label: "Bardzo drogo",
        color: "#b91c1c",
        bg: "#fee2e2",
        border: "#fecaca",
      };
  }
}

export const DANGER_CONFIG: Record<
  DangerType,
  { icon: string; label: string }
> = {
  CYCLONES: { icon: "🌀", label: "Ryzyko cyklonów, huraganów lub tajfunów" },
  MONSOON: { icon: "⛈️", label: "Sezon monsunowy (intensywne opady)" },
  RAINY_SEASON: { icon: "🌧️", label: "Pora deszczowa i wysoka wilgotność" },
  EXTREME_HEAT: { icon: "🔥", label: "Ekstremalne upały" },
  EXTREME_COLD: { icon: "❄️", label: "Ekstremalne mrozy" },
  ROUGH_SEAS: { icon: "🌊", label: "Silne wiatry i wzburzone morze" },
};
