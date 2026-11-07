import MadeiraMap from "./map/MadeiraMap";
import type { CountryRecord } from "./types";
import {
  MAURITIUS_FOOD,
  MAURITIUS_HISTORY,
  MAURITIUS_SLEEP,
  MAURITIUS_TRANSPORT,
} from "./history/2026MauritiusHistory";
import EuropeanUnion from "./svg/flags/eeu";
import { BALI_HISTORY } from "./history/2025BaliHistory";
import { SRI_LANKA_HISTORY } from "./history/2024SriLankaHistory";
import { EURO_TRIP_HISTORY } from "./history/2022EuroTrip";
import SaudiArabia from "./svg/flags/sau";
import UnitedArabEmirates from "./svg/flags/uae";
import Portugal from "./svg/flags/ptg";
import { MADEIRA_HISTORY } from "./history/2023MaderaHistory";
import Austria from "./svg/flags/aut";
import Czechia from "./svg/flags/cze";
import France from "./svg/flags/fra";
import Germany from "./svg/flags/ger";
import Indonesia from "./svg/flags/idn";
import Italy from "./svg/flags/ita";
import Madeira from "./svg/flags/mdr";
import Mauritius from "./svg/flags/mus";
import Malaysia from "./svg/flags/mys";
import Poland from "./svg/flags/pol";
import Qatar from "./svg/flags/qat";
import Spain from "./svg/flags/spa";
import Switzerland from "./svg/flags/swi";
import SriLanka from "./svg/flags/slk";

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

  // {
  //   name: "Złote Piaski",
  //   country: "Bułgaria",
  //   year: 2018,
  //   flag: Bulgaria,
  //   folder: "bulgaria-zlote-piaski-18",
  //   map: GoldenSands18Map("bulgaria-zlote-piaski-18"),
  // },

  // {
  //   name: "Złote Piaski",
  //   country: "Bułgaria",
  //   year: 2019,
  //   flag: Bulgaria,
  //   folder: "bulgaria-zlote-piaski-19",
  //   map: GoldenSands19Map("bulgaria-zlote-piaski-19"),
  // },

  // {
  //   name: "Kreta",
  //   country: "Grecja",
  //   year: 2021,
  //   flag: Greece,
  //   folder: "greece-crete",
  //   map: CreteMap("greece-crete"),
  // },

  {
    name: "EuroTrip",
    country: "Europa",
    year: 2022,
    flag: EuropeanUnion,
    flags: [
      <Austria />,
      <Switzerland />,
      <Italy />,
      <France />,
      <Spain />,
      <Germany />,
      <Czechia />,
      <Poland />,
    ],
    folder: "euro-trip",
    history: EURO_TRIP_HISTORY,
    coverCount: 12,
    transit: "Katowice ➤ Wiedeń",
  },

  // {
  //   name: "Cypr",
  //   year: 2023,
  //   month: 3,
  //   flag: Cyprus,
  //   folder: "cyprus",
  //   map: CyprusMap("cyprus"),
  // },

  {
    name: "Madera",
    country: "Portugalia",
    year: 2023,
    month: 8,
    flag: Madeira,
    flags: [<Madeira />, <Portugal />],
    folder: "madeira",
    map: MadeiraMap("madeira"),
    history: MADEIRA_HISTORY,
    coverCount: 9,
    transit: "Katowice ➤ Madera",
  },

  // {
  //   name: "Sycylia",
  //   country: "Włochy",
  //   year: 2024,
  //   flag: Sicily,
  //   folder: "sicily",
  //   map: SicilyMap("sicily"),
  // },

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
    flag: SriLanka,
    flags: [<SriLanka />, <UnitedArabEmirates />],
    folder: "sri-lanka",
    history: SRI_LANKA_HISTORY,
    transit: "Katowice ➤ Dubai",
    coverCount: 9,
  },

  // {
  //   name: "Marsa Alam",
  //   country: "Egipt",
  //   year: 2025,
  //   month: 3,
  //   flag: Egypt,
  //   folder: "egypt-marsa-alam",
  //   map: MarsaAlamMap("egypt-marsa-alam"),
  // },

  {
    name: "Bali",
    country: "Indonezja",
    year: 2025,
    month: 9,
    flag: Indonesia,
    flags: [<Indonesia />, <Malaysia />, <Qatar />, <Austria />],
    folder: "indonesia-bali",
    history: BALI_HISTORY,
    coverCount: 10,
    transit: "Katowice ➤ Wiedeń",
  },

  // {
  //   name: "Split",
  //   country: "Chorwacja",
  //   year: 2026,
  //   month: 7,
  //   flag: Croatia,
  //   folder: "croatia-split",
  //   history: SPLIT_HISTORY,
  // },

  {
    name: "Mauritius",
    year: 2026,
    month: 9,
    flag: Mauritius,
    flags: [<Spain />, <Mauritius />, <SaudiArabia />, <Austria />],
    folder: "mauritius",
    history: MAURITIUS_HISTORY,
    maps: [MAURITIUS_TRANSPORT, MAURITIUS_SLEEP],
    food: MAURITIUS_FOOD,
    coverCount: 9,
    transit: "Kraków ➤ Madryt",
  },
];

export default countries;
