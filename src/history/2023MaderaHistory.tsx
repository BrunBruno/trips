import Madeira from "../svg/flags/mdr";
import type { MyHistory } from "../types";

export const MADEIRA_HISTORY: MyHistory[] = [
  //01 2708
  {
    date: "27 sie. 2023",
    name: "Północ Madery",
    // prettier-ignore
    images: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    position: {
      points: [{ lat: 32.6942, lng: -16.7781, cap: "Północ Madery" }],
      zoom: 11,
    },
    svg: {
      item: <Madeira />,
      styles: { rotate: "7deg" },
    },
  },

  //02 2808
  {
    date: "28 sie. 2023",
    name: "Południe Madery",
    // prettier-ignore
    images: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    position: {
      points: [{ lat: 32.6942, lng: -16.7781, cap: "Południe Madery" }],
      zoom: 11,
    },
  },

  //03 2908
  {
    date: "29 sie. 2023",
    name: "Pico Ruivo",
    images: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
    position: {
      points: [
        { lat: 32.7584, lng: -16.9429, cap: "Pico Ruivo" },
        { lat: 32.65, lng: -16.908, cap: "Funchal" },
      ],
      zoom: 15,
    },
  },

  //04 3008
  {
    date: "30 sie. 2023",
    name: "Funchal",
    images: [38, 39, 40, 41, 42, 43],
    position: {
      points: [{ lat: 32.65, lng: -16.908, cap: "Funchal" }],
      zoom: 14,
    },
  },

  //05 3108
  {
    date: "31 sie. 2023",
    name: "Porto Santo",
    // prettier-ignore
    images: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
    position: {
      points: [{ lat: 33.0644, lng: -16.3298, cap: "Porto Santo" }],
      zoom: 12,
    },
  },

  //06 0109
  {
    date: "01 wrz. 2023",
    name: "Ponta de São Lourenço",
    images: [56, 57, 58, 59, 60, 61, 62, 63, 64],
    position: {
      points: [{ lat: 32.7431, lng: -16.6934, cap: "Ponta de São Lourenço" }],
      zoom: 13,
    },
  },

  //07 0209
  {
    date: "02 wrz. 2023",
    name: "Funchal",
    transit: {
      from: "Madera",
      to: "Katowice",
    },
    images: [65, 66, 67, 68, 69, 70],
    position: {
      points: [{ lat: 32.65, lng: -16.908, cap: "Funchal" }],
      zoom: 14,
    },
  },
];
