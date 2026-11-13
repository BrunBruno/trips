import type { CountryRecord } from "./types";
import {
  MAURITIUS_HISTORY,
  MAURITIUS_SLEEP,
  MAURITIUS_TRANSPORT,
} from "./history/2026MauritiusHistory";
import EuropeanUnion from "./svg/flags/eeu";
import {
  BALI_HISTORY,
  BALI_SLEEP,
  BALI_TRANSPORT,
} from "./history/2025BaliHistory";
import {
  SRI_LANKA_HISTORY,
  SRI_LANKA_SLEEP,
  SRI_LANKA_TRANSPORT,
} from "./history/2024SriLankaHistory";
import {
  EURO_TRIP_HISTORY,
  EURO_TRIP_SLEEP,
  EURO_TRIP_TRANSPORT,
} from "./history/2022EuroTrip";

import { MADEIRA_HISTORY } from "./history/2023MaderaHistory";
import Indonesia from "./svg/flags/idn";
import Madeira from "./svg/flags/mdr";
import Mauritius from "./svg/flags/mus";
import SriLanka from "./svg/flags/slk";
import Croatia from "./svg/flags/cro";
import { SPLIT_HISTORY } from "./history/2026SplitHistory";
import Egypt from "./svg/flags/egy";
import { MARSA_ALAM_HISTORY } from "./history/2025MarsaAlam";
import Sicily from "./svg/flags/scl";
import {
  SICILY_HISTORY,
  SICILY_SLEEP,
  SICILY_TRANSPORT,
} from "./history/2024Sicily";
import Cyprus from "./svg/flags/cyp";
import Greece from "./svg/flags/grc";
import Bulgaria from "./svg/flags/bgr";
import { GOLDEN_SANDS_18_HISTORY } from "./history/2018GoldenSands";

const countries: CountryRecord[] = [
  // {
  //   name: "Sousse",
  //   country: "Tunezja",
  //   year: 2008,
  //   month: 6,
  //   flag: Tunisia,
  //   folder: "tunisia-sousse",
  //   map: SousseMap("tunisia-sousse"),
  // },

  // {
  //   name: "Alanya",
  //   country: "Turcja",
  //   year: 2010,
  //   flag: Turkey,
  //   folder: "turkey-alanya",
  //   map: AlanyaMap("turkey-alanya"),
  // },

  // {
  //   name: "Hurghada",
  //   country: "Egipt",
  //   year: 2012,
  //   flag: Egypt,
  //   folder: "egypt-hurghada",
  //   map: HurghadaMap("egypt-hurghada"),
  // },

  // {
  //   name: "Leptokaria",
  //   country: "Grecja",
  //   year: 2014,
  //   flag: Greece,
  //   folder: "greece-leptokaria",
  //   map: LeptokariaMap("greece-leptokaria"),
  // },

  // {
  //   name: "Orebić",
  //   country: "Chorwacja",
  //   year: 2017,
  //   flag: Croatia,
  //   folder: "croatia-orebic",
  //   map: OrebicMap("croatia-orebic"),
  // },

  {
    name: "Złote Piaski",
    country: "Bułgaria",
    year: 2018,
    month: 7,
    flag: Bulgaria,
    folder: "golden-sands-18",
    history: GOLDEN_SANDS_18_HISTORY,
    transit: {
      from: "Katowice",
      to: "Vállaj",
      type: "bus",
    },
  },

  {
    name: "Złote Piaski",
    country: "Bułgaria",
    year: 2019,
    month: 8,
    flag: Bulgaria,
    folder: "golden-sands-19",
    transit: {
      from: "Katowice",
      to: "Złote Piaski",
      type: "bus",
    },
  },

  {
    name: "Kreta",
    country: "Grecja",
    year: 2021,
    month: 9,
    flag: Greece,
    folder: "greece-crete",
    transit: {
      from: "Katowice",
      to: "Iraklion",
      type: "plane",
    },
  },

  {
    name: "EuroTrip",
    country: "Europa",
    year: 2022,
    month: 9,
    flag: EuropeanUnion,
    folder: "euro-trip",
    coverCount: 12,
    history: EURO_TRIP_HISTORY,
    maps: [EURO_TRIP_TRANSPORT, EURO_TRIP_SLEEP],
    transit: {
      from: "Katowice",
      to: "Wiedeń",
      type: "train",
    },
  },

  {
    name: "Cypr",
    year: 2023,
    month: 3,
    flag: Cyprus,
    folder: "cyprus",
    transit: {
      from: "Katowice",
      to: "Pafos",
      type: "plane",
    },
  },

  {
    name: "Madera",
    country: "Portugalia",
    year: 2023,
    month: 8,
    flag: Madeira,
    folder: "madeira",
    history: MADEIRA_HISTORY,
    coverCount: 9,
    transit: {
      from: "Katowice",
      to: "Madera",
      type: "plane",
    },
  },

  {
    name: "Sycylia",
    country: "Włochy",
    year: 2024,
    month: 2,
    flag: Sicily,
    folder: "sicily",
    coverCount: 6,
    history: SICILY_HISTORY,
    maps: [SICILY_TRANSPORT, SICILY_SLEEP],
    transit: {
      from: "Katowice",
      to: "Katania",
      type: "plane",
    },
  },

  // {
  //   name: "Oslo",
  //   country: "Norwegia",
  //   year: 2023,
  //   month: 8,
  //   flag: Norway,
  //   folder: "norway-oslo",
  //   map: OsloMap("norway-oslo"),
  // },

  {
    name: "Sri Lanka",
    year: 2024,
    month: 9,
    flag: SriLanka,
    folder: "sri-lanka",
    coverCount: 9,
    history: SRI_LANKA_HISTORY,
    maps: [SRI_LANKA_TRANSPORT, SRI_LANKA_SLEEP],
    transit: {
      from: "Katowice",
      to: "Dubai",
      type: "plane",
    },
  },

  {
    name: "Marsa Alam",
    country: "Egipt",
    year: 2025,
    month: 3,
    flag: Egypt,
    folder: "marsa-alam",
    history: MARSA_ALAM_HISTORY,
    transit: {
      from: "Kraków",
      to: "Marsa Alam",
      type: "plane",
    },
  },

  {
    name: "Bali",
    country: "Indonezja",
    year: 2025,
    month: 9,
    flag: Indonesia,
    folder: "indonesia-bali",
    coverCount: 10,
    history: BALI_HISTORY,
    maps: [BALI_TRANSPORT, BALI_SLEEP],
    transit: {
      from: "Katowice",
      to: "Doha",
      through: "Wiedeń",
      type: "plane",
    },
  },

  {
    name: "Split",
    country: "Chorwacja",
    year: 2026,
    month: 7,
    flag: Croatia,
    folder: "croatia-split",
    history: SPLIT_HISTORY,
    transit: {
      from: "Katowice",
      to: "Split",
      type: "plane",
    },
  },

  {
    name: "Mauritius",
    year: 2026,
    month: 9,
    flag: Mauritius,
    folder: "mauritius",
    coverCount: 9,
    history: MAURITIUS_HISTORY,
    maps: [MAURITIUS_TRANSPORT, MAURITIUS_SLEEP],
    transit: {
      from: "Kraków",
      to: "Madryt",
      type: "plane",
    },
  },
];

export default countries;
