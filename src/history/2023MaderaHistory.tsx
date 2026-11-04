import { Madeira } from "../svg";
import type { MyHistory } from "../types";

export const MADEIRA_HISTORY: MyHistory[] = [
  //01
  {
    date: "27 sie. 2023",
    name: "Północ Madery",
    images: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    position: {
      lat: 32.6942,
      lng: -16.7781,
      zoom: 11,
    },
    svg: <Madeira />,
    svgStyles: { rotate: "7deg" },
  },
  //
  {
    date: "28 sie. 2023",
    name: "Południe Madery",
    images: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    position: {
      lat: 32.6942,
      lng: -16.7781,
      zoom: 11,
    },
  },
  //
  {
    date: "29 sie. 2023",
    name: "Pico Ruivo",
    images: [26, 27, 28, 29, 30, 31, 32],
    position: {
      lat: 32.7584,
      lng: -16.9429,
      zoom: 15,
    },
  },
  //
  {
    date: "29 sie. 2023",
    name: "Funchal",
    images: [33, 34, 35, 36, 37],
    position: {
      lat: 32.65,
      lng: -16.908,
      zoom: 14,
    },
  },
  //
  {
    date: "30 sie. 2023",
    name: "Funchal",
    images: [38, 39, 40, 41, 42, 43],
    position: {
      lat: 32.65,
      lng: -16.908,
      zoom: 14,
    },
  },
  //
  {
    date: "31 sie. 2023",
    name: "Porto Santo",
    images: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
    position: {
      lat: 33.0644,
      lng: -16.3298,
      zoom: 12,
    },
  },
  //
  {
    date: "01 wrz. 2023",
    name: "Ponta de São Lourenço",
    images: [56, 57, 58, 59, 60, 61, 62, 63, 64],
    position: {
      lat: 32.7431,
      lng: -16.6934,
      zoom: 13,
    },
  },
  //
  {
    date: "02 wrz. 2023",
    name: "Funchal",
    transit: {
      from: "Madera",
      to: "Katowice",
    },
    images: [65, 66, 67, 68, 69, 70],
    position: {
      lat: 32.65,
      lng: -16.908,
      zoom: 14,
    },
  },
];
