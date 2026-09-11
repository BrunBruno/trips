import type { ComponentType } from "react";

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
import SousseMap from "./map/SousseMap";
import AlanyaMap from "./map/AlanyaMap";
import HurghadaMap from "./map/HurghadaMap";
import LeptokariaMap from "./map/LeptokariaMap";
import OrebicMap from "./map/OrebicMap";
import GoldenSands18Map from "./map/GoldenSands18Map";
import GoldenSands19Map from "./map/GoldenSands19Map";
import PragueMap from "./map/PragueMap";
import BerlinMap from "./map/BerlinMap";
import ParisMap from "./map/ParisMap";
import LloretDeMarMap from "./map/LloretDeMarMap";
import CannesMap from "./map/CannesMap";
import MilanMap from "./map/MilanMap";
import BerninapassMap from "./map/BerninapassMap";
import WienMap from "./map/WienMap";
import MadeiraMap from "./map/MadeiraMap";
import BaliMap from "./map/BaliMap";
import CreteMap from "./map/CreteMap";
import CyprusMap from "./map/CyprusMap";
import DohaMap from "./map/DohaMap";
import DubajMap from "./map/DubajMap";
import KualaLumpurMap from "./map/KualaLumpurMap";
import MarsaAlamMap from "./map/MarsaAlamMap";
import OsloMap from "./map/OsloMap";
import SicilyMap from "./map/SicilyMap";
import SplitMap from "./map/SplitMap";
import type { JSX } from "react/jsx-dev-runtime";

export type CountryRecord = {
  name: string;
  country: string;
  folder: string;
  year: number;
  month?: number;
  flag: ComponentType;
  map?: JSX.Element;
  imgCount?: number;
};

const countries: CountryRecord[] = [
  {
    name: "Sousse",
    country: "Tunezja",
    year: 2008,
    month: 6,
    flag: Tunisia,
    folder: "tunisia-sousse",
    map: SousseMap("tunisia-sousse"),
  },

  {
    name: "Alanya",
    country: "Turcja",
    year: 2010,
    flag: Turkey,
    folder: "turkey-alanya",
    map: AlanyaMap("turkey-alanya"),
  },

  {
    name: "Hurghada",
    country: "Egipt",
    year: 2012,
    flag: Egypt,
    folder: "egypt-hurghada",
    map: HurghadaMap("egypt-hurghada"),
  },

  {
    name: "Leptokaria",
    country: "Grecja",
    year: 2014,
    flag: Greece,
    folder: "greece-leptokaria",
    map: LeptokariaMap("greece-leptokaria"),
  },

  {
    name: "Orebić",
    country: "Chorwacja",
    year: 2017,
    flag: Croatia,
    folder: "croatia-orebic",
    map: OrebicMap("croatia-orebic"),
  },

  {
    name: "Złote Piaski",
    country: "Bułgaria",
    year: 2018,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-18",
    map: GoldenSands18Map("bulgaria-zlote-piaski-18"),
  },

  {
    name: "Złote Piaski",
    country: "Bułgaria",
    year: 2019,
    flag: Bulgaria,
    folder: "bulgaria-zlote-piaski-19",
    map: GoldenSands19Map("bulgaria-zlote-piaski-19"),
  },

  {
    name: "Kreta",
    country: "Grecja",
    year: 2021,
    flag: Greece,
    folder: "greece-crete",
    map: CreteMap("greece-crete"),
  },

  // {
  //   name: "EuroTrip",
  //   country: "Europa",
  //   year: 2022,
  //   flag: EuropeanUnion,
  //   folder: "european-union-eurotrip",
  //   map: EuropeanUnionMap("european-union-eurotrip"),
  // },

  {
    name: "Wiedeń",
    country: "Austria",
    year: 2022,
    flag: Austria,
    folder: "austria-wieden",
    map: WienMap("austria-wieden"),
  },

  {
    name: "Przełęcz Bernina",
    country: "Szwajcaria",
    year: 2022,
    flag: Switzerland,
    folder: "switzerland-berninapass",
    map: BerninapassMap("switzerland-berninapass"),
  },

  {
    name: "Mediolan",
    country: "Włochy",
    year: 2022,
    flag: Italy,
    folder: "italy-milan",
    map: MilanMap("italy-milan"),
  },

  {
    name: "Cannes",
    country: "Francja",
    year: 2022,
    flag: France,
    folder: "france-cannes",
    map: CannesMap("france-cannes"),
  },

  {
    name: "Lloret de Mar",
    country: "Hiszpania",
    year: 2022,
    flag: Spain,
    folder: "spain-lloret-de-mar",
    map: LloretDeMarMap("spain-lloret-de-mar"),
  },

  {
    name: "Paryż",
    country: "Francja",
    year: 2022,
    flag: France,
    folder: "france-paris",
    map: ParisMap("france-paris"),
  },

  {
    name: "Berlin",
    country: "Niemcy",
    year: 2022,
    flag: Germany,
    folder: "germany-berlin",
    map: BerlinMap("germany-berlin"),
  },

  {
    name: "Praga",
    country: "Czechy",
    year: 2022,
    flag: Czechia,
    folder: "czechia-prague",
    map: PragueMap("czechia-prague"),
  },

  {
    name: "Cypr",
    country: "Cypr",
    year: 2023,
    flag: Cyprus,
    folder: "cyprus",
    map: CyprusMap("cyprus"),
  },

  {
    name: "Madera",
    country: "Portugalia",
    year: 2023,
    flag: Madeira,
    folder: "madeira",
    map: MadeiraMap("madeira"),
  },

  {
    name: "Sycylia",
    country: "Włochy",
    year: 2024,
    flag: Sicily,
    folder: "sicily",
    map: SicilyMap("sicily"),
  },

  {
    name: "Oslo",
    country: "Norwegia",
    year: 2023,
    month: 8,
    flag: Norway,
    folder: "norway-oslo",
    map: OsloMap("norway-oslo"),
  },

  {
    name: "Dubaj",
    country: "Zjednoczone Emiraty Arabskie",
    year: 2024,
    flag: UAE,
    folder: "uae-dubai",
    map: DubajMap("uae-dubai"),
  },

  {
    name: "Sri Lanka",
    country: "Sri Lanka",
    year: 2024,
    flag: SriLanka,
    folder: "sri-lanka",
    map: SriLankaMap("sri-lanka"),
  },

  {
    name: "Marsa Alam",
    country: "Egipt",
    year: 2025,
    month: 3,
    flag: Egypt,
    folder: "egypt-marsa-alam",
    map: MarsaAlamMap("egypt-marsa-alam"),
  },

  {
    name: "Doha",
    country: "Katar",
    year: 2025,
    month: 10,
    flag: Qatar,
    folder: "qatar-doha",
    map: DohaMap("qatar-doha"),
  },

  {
    name: "Kuala Lumpur",
    country: "Malezja",
    year: 2025,
    month: 10,
    flag: Malaysia,
    folder: "malaysia-kuala-lumpur",
    map: KualaLumpurMap("malaysia-kuala-lumpur"),
  },

  {
    name: "Bali",
    country: "Indonezja",
    year: 2025,
    month: 9,
    flag: Indonesia,
    folder: "indonesia-bali",
    map: BaliMap("indonesia-bali"),
  },

  {
    name: "Nusa Penida",
    country: "Indonezja",
    year: 2025,
    month: 9,
    flag: Indonesia,
    folder: "indonesia-nusa-penida",
    map: BaliMap("indonesia-nusa-penida"),
  },

  {
    name: "Split",
    country: "Chorwacja",
    year: 2026,
    month: 7,
    flag: Croatia,
    folder: "croatia-split",
    map: SplitMap("croatia-split"),
    imgCount: 48,
  },

  // {
  //   name: "Cieszyn",
  //   country: "Czechy",
  //   year: 2026,
  //   flag: Czechia,
  //   folder: "czechia-cieszyn",
  //   map: CieszynMap("czechia-cieszyn"),
  // },
];

export default countries;
