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

type CountryRecord = {
  name: string;
  folder: string;
  year: number;
  month?: number;
  imgCount?: number;
  flag: ComponentType;
  map?: ComponentType;
};

const countries: CountryRecord[] = [
  {
    name: "Sousse",
    year: 2008,
    flag: Tunisia,
    folder: "tunisia-sousse",
  },
  {
    name: "Alanya",
    year: 2010,
    flag: Turkey,
    folder: "turkey-alanya",
  },
  {
    name: "Hurghada",
    year: 2012,
    flag: Egypt,
    folder: "egypt-hurghada",
  },
  {
    name: "Leptokaria",
    year: 2014,
    flag: Greece,
    folder: "greece-leptokaria",
  },
  {
    name: "Orebić",
    year: 2017,
    flag: Croatia,
    folder: "croatia-orebic",
  },
  {
    name: "Złote Piaski",
    year: 2018,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-18",
  },
  {
    name: "Złote Piaski",
    year: 2019,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-19",
  },
  {
    name: "Kreta",
    year: 2021,
    flag: Greece,
    folder: "greece-crete",
    map: CreteMap,
  },
  {
    name: "EuroTrip",
    year: 2022,
    flag: EuropeanUnion,
    folder: "european-union-eurotrip",
    map: EuropeanUnionMap,
  },
  {
    name: "Wiedeń",
    year: 2022,
    flag: Austria,
    folder: "austria-wieden",
  },
  {
    name: "Berninapass",
    year: 2022,
    flag: Switzerland,
    folder: "switzerland-berninapass",
  },
  {
    name: "Mediolan",
    year: 2022,
    flag: Italy,
    folder: "italy-milan",
  },
  {
    name: "Cannes",
    year: 2022,
    flag: France,
    folder: "france-cannes",
  },
  {
    name: "Lloret de Mar",
    year: 2022,
    flag: Spain,
    folder: "spain-lloret-de-mar",
  },
  {
    name: "Paryż",
    year: 2022,
    flag: France,
    folder: "france-paris",
  },
  {
    name: "Berlin",
    year: 2022,
    flag: Germany,
    folder: "germany-berlin",
  },
  {
    name: "Praga",
    year: 2022,
    flag: Czechia,
    folder: "czechia-prague",
  },
  {
    name: "Cypr",
    year: 2023,
    flag: Cyprus,
    folder: "cyprus",
    map: CyprusMap,
  },
  {
    name: "Madera",
    year: 2023,
    flag: Madeira,
    folder: "madeira",
    map: MadeiraMap,
  },
  {
    name: "Sycylia",
    year: 2023,
    flag: Sicily,
    folder: "sicily",
    map: SicilyMap,
  },
  {
    name: "Oslo",
    year: 2024,
    flag: Norway,
    folder: "norway-oslo",
    map: OsloMap,
  },
  {
    name: "Dubaj",
    year: 2024,
    flag: UAE,
    folder: "uae-dubai",
    map: DubajMap,
  },
  {
    name: "Sri Lanka",
    year: 2024,
    flag: SriLanka,
    folder: "sri-lanka",
    map: SriLankaMap,
  },
  {
    name: "Marsa Alam",
    year: 2025,
    flag: Egypt,
    folder: "egypt-marsa-alam",
    map: MarsaAlamMap,
  },
  {
    name: "Doha",
    year: 2025,
    flag: Qatar,
    folder: "qatar-doha",
    map: DohaMap,
  },
  {
    name: "Kuala Lumpur",
    year: 2025,
    flag: Malaysia,
    folder: "malaysia-kuala-lumpur",
    map: KualaLumpurMap,
  },
  {
    name: "Bali",
    year: 2025,
    flag: Indonesia,
    folder: "indonesia-bali",
    map: BaliMap,
  },
  {
    name: "Split",
    year: 2026,
    flag: Croatia,
    folder: "croatia-split",
    map: SplitMap,
  },
  {
    name: "Cieszyn",
    year: 2026,
    flag: Czechia,
    folder: "czechia-cieszyn",
    map: CieszynMap,
  },
];

export default countries;
