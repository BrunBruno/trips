import {
  BaliMap,
  CieszynMap,
  CreteMap,
  CyprusMap,
  DohaMap,
  DubajMap,
  EuropeanUnionMap,
  KualaLumpurMap,
  MadeiraMap,
  MarsaAlamMap,
  OsloMap,
  SicilyMap,
  SplitMap,
} from "./map";

import {
  Tunisia,
  Turkey,
  Greece,
  Spain,
  Switzerland,
  France,
  Italy,
  Germany,
  Norway,
  Croatia,
  Bulgaria,
  Czechia,
  Austria,
  SriLanka,
  Indonesia,
  Malaysia,
  UAE,
  Qatar,
  Egypt,
  Madeira,
  Sicily,
  Cyprus,
} from "./svg";

import SriLankaMap from "./map/SriLankaMap";
import EuropeanUnion from "./svg/eeu";
import type { ComponentType } from "react";
import SousseMap from "./map/SousseMap";
import AlanyaMap from "./map/AlanyaMap";
import HurghadaMap from "./map/HurghadaMap";
import LeptokariaMap from "./map/LeptokariaMap";
import OrebicMap from "./map/OrebicMap";
import GoldenSands18Map from "./map/GoldenSands18Map";
import GoldenSands19Map from "./map/GoldenSands19Map";

export type CountryRecord = {
  name: string;
  country: string;
  folder: string;
  year: number;
  month?: number;
  flag: ComponentType;
  map?: ComponentType;
};

const countries: CountryRecord[] = [
  {
    name: "Sousse",
    country: "Tunisia",
    year: 2008,
    month: 6,
    flag: Tunisia,
    folder: "tunisia-sousse",
    map: SousseMap,
  },
  {
    name: "Alanya",
    country: "Turkey",
    year: 2010,
    flag: Turkey,
    folder: "turkey-alanya",
    map: AlanyaMap,
  },
  {
    name: "Hurghada",
    country: "Egypt",
    year: 2012,
    flag: Egypt,
    folder: "egypt-hurghada",
    map: HurghadaMap,
  },
  {
    name: "Leptokaria",
    country: "Greece",
    year: 2014,
    flag: Greece,
    folder: "greece-leptokaria",
    map: LeptokariaMap,
  },
  {
    name: "Orebić",
    country: "Croatia",
    year: 2017,
    flag: Croatia,
    folder: "croatia-orebic",
    map: OrebicMap,
  },
  {
    name: "Złote Piaski",
    country: "Bulgaria",
    year: 2018,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-18",
    map: GoldenSands18Map,
  },
  {
    name: "Złote Piaski",
    country: "Bulgaria",
    year: 2019,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-19",
    map: GoldenSands19Map,
  },
  {
    name: "Kreta",
    country: "Greece",
    year: 2021,
    flag: Greece,
    folder: "greece-crete",
    map: CreteMap,
  },
  {
    name: "EuroTrip",
    country: "Europe",
    year: 2022,
    flag: EuropeanUnion,
    folder: "european-union-eurotrip",
    map: EuropeanUnionMap,
  },
  {
    name: "Wiedeń",
    country: "Austria",
    year: 2022,
    flag: Austria,
    folder: "austria-wieden",
  },
  {
    name: "Berninapass",
    country: "Switzerland",
    year: 2022,
    flag: Switzerland,
    folder: "switzerland-berninapass",
  },
  {
    name: "Mediolan",
    country: "Italy",
    year: 2022,
    flag: Italy,
    folder: "italy-milan",
  },
  {
    name: "Cannes",
    country: "France",
    year: 2022,
    flag: France,
    folder: "france-cannes",
  },
  {
    name: "Lloret de Mar",
    country: "Spain",
    year: 2022,
    flag: Spain,
    folder: "spain-lloret-de-mar",
  },
  {
    name: "Paryż",
    country: "France",
    year: 2022,
    flag: France,
    folder: "france-paris",
  },
  {
    name: "Berlin",
    country: "Germany",
    year: 2022,
    flag: Germany,
    folder: "germany-berlin",
  },
  {
    name: "Praga",
    country: "Czechia",
    year: 2022,
    flag: Czechia,
    folder: "czechia-prague",
  },
  {
    name: "Cypr",
    country: "Cyprus",
    year: 2023,
    flag: Cyprus,
    folder: "cyprus",
    map: CyprusMap,
  },
  {
    name: "Madera",
    country: "Portugal",
    year: 2023,
    flag: Madeira,
    folder: "madeira",
    map: MadeiraMap,
  },
  {
    name: "Sycylia",
    country: "Italy",
    year: 2023,
    flag: Sicily,
    folder: "sicily",
    map: SicilyMap,
  },
  {
    name: "Oslo",
    country: "Norway",
    year: 2023,
    month: 8,
    flag: Norway,
    folder: "norway-oslo",
    map: OsloMap,
  },
  {
    name: "Dubaj",
    country: "United Arab Emirates",
    year: 2024,
    flag: UAE,
    folder: "uae-dubai",
    map: DubajMap,
  },
  {
    name: "Sri Lanka",
    country: "Sri Lanka",
    year: 2024,
    flag: SriLanka,
    folder: "sri-lanka",
    map: SriLankaMap,
  },
  {
    name: "Marsa Alam",
    country: "Egypt",
    year: 2025,
    month: 3,
    flag: Egypt,
    folder: "egypt-marsa-alam",
    map: MarsaAlamMap,
  },
  {
    name: "Doha",
    country: "Qatar",
    year: 2025,
    month: 10,
    flag: Qatar,
    folder: "qatar-doha",
    map: DohaMap,
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    year: 2025,
    month: 10,
    flag: Malaysia,
    folder: "malaysia-kuala-lumpur",
    map: KualaLumpurMap,
  },
  {
    name: "Bali",
    country: "Indonesia",
    year: 2025,
    month: 9,
    flag: Indonesia,
    folder: "indonesia-bali",
    map: BaliMap,
  },
  {
    name: "Split",
    country: "Croatia",
    year: 2026,
    month: 7,
    flag: Croatia,
    folder: "croatia-split",
    map: SplitMap,
  },
  {
    name: "Cieszyn",
    country: "Czechia",
    year: 2026,
    flag: Czechia,
    folder: "czechia-cieszyn",
    map: CieszynMap,
  },
];

export default countries;
