import Sicily from "../svg/flags/scl";
import type { MyHistory, Position } from "../types";

export const SICILY_HISTORY: MyHistory[] = [
  //01 2502
  {
    date: "25 Lut. 2024",
    name: "Sycylia",
    sleep: {
      name: "Loft Home Sweet Home",
      styles: { left: "unset", right: 0 },
    },
    images: [1, 42, 2],
    captions: {
      "1": "[KTW] Lotnisko w Katowicach",
      "2": "Katania",
      "42": "Loft Home Sweet Home",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 37.506068, lng: 15.092682, cap: "Loft Home Sweet Home", typ:"n", imgs:[42] },
        { lat: 37.466681, lng: 15.064284, cap: "CTA", typ:"l", imgs:[] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 37.466681, lng: 15.064284, cap: "CTA", typ:"l", imgs:[] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[1] },
      ],
      zoom: 2,
    },
    svg: {
      item: <Sicily />,
      styles: { rotate: "7deg" },
    },
  },

  //02 2602
  {
    date: "26 Lut. 2024",
    name: "Taormina",
    food: {
      name: "Spaghetti Carbonara",
      img: 14,
      styles: { rotate: "-5deg", bottom: "6rem", left: "-3rem" },
    },
    trip: {
      to: "Taormina",
      type: "bus",
      styles: { right: "-2rem", top: "75%", rotate: "2deg" },
    },
    //prettier-ignore
    images: [
      13, 12, 6, 11,
      5, 8, 9, 10,
      7, 4, 3,
    ],
    captions: {
      "3": "Isola Bella",
      "4": "Piazza IX Aprile",
      "7": "Castelmola",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 37.851635, lng: 15.285893, cap: "Taormina", imgs:[12,5,6,8,9,10,11,3,13,4,7] },
        { lat: 37.511401, lng: 15.083375, cap: "Catania", imgs:[] },
      ],
      zoom: 9,
    },
  },

  //03 2702
  {
    date: "27 Lut. 2024",
    name: "Etna",
    food: {
      name: "Arancina",
      img: 20,
      styles: {
        left: "unset",
        right: "-3rem",
        bottom: "10rem",
        rotate: "-8deg",
      },
    },
    trip: {
      to: "Etna",
      type: "bus",
      styles: { right: "unset", left: "-1rem", top: "75%", rotate: "-2deg" },
    },
    //prettier-ignore
    images: [
      21, 22, 27, 16,
      15, 25, 23, 19,
      26, 24, 18,
    ],
    captions: {
      "26": "Giardino Bellini",
      "24": "Rifugio Sapienza",
      "18": "Etna",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 37.700563, lng: 14.998417, cap: "Etna", imgs:[21,22,16,15,23,19,24,18] },
        { lat: 37.511401, lng: 15.083375, cap: "Catania", imgs:[27,25,26] },
      ],
      zoom: 10,
    },
  },

  //04 2802
  {
    date: "28 Lut. 2024",
    name: "Katania",
    food: {
      name: "Pizza z Mortadelą",
      img: 28,
      styles: { left: "-4rem", bottom: "9rem", rotate: "-5deg" },
    },
    //prettier-ignore
    images: [
      29, 31, 44, 37,
      43, 32, 33, 35,
      30, 36, 34
    ],
    captions: {
      "34": "Anfiteatro Romano di Catania",
      "30": "Spiaggia della Plaia",
      "32": "Boschetto della Plaia",
      "36": "Cattedrale di Sant'Agata",
      "33": "Palazzo dell'Università",
      "43": "Loft Home Sweet Home",
      "35": "Centro Storico di Catania",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 37.506068, lng: 15.092682, cap: "Loft Home Sweet Home", typ:"n", imgs:[43] },
        { lat: 37.503999, lng: 15.086962, cap: "Centro Storico di Catania",  imgs:[29,35,37,33,36,34] },
        { lat: 37.478483, lng: 15.081949, cap: "Boschetto della Plaia",  imgs:[31,32] },
        { lat: 37.484763, lng: 15.086397, cap: "Spiaggia della Plaia",  imgs:[30] },
        
      ],
      zoom: 13,
    },
  },

  //05 2902
  {
    date: "29 Lut. 2024",
    name: "Katania",
    transit: {
      from: "Katania",
      to: "Katowice",
      type: "plane",
    },
    //prettier-ignore
    images: [
      38, 40,
      41, 39,
    ],
    captions: {
      "41": "Etna",
      "39": "[CTA] Aeroporto di Catania",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 37.466681, lng: 15.064284, cap: "CTA", typ:"l", imgs:[38, 39, 40, 41] },
      ],
      zoom: 6,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 37.466681, lng: 15.064284, cap: "CTA", typ:"l", imgs:[38, 39, 40, 41] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[] },
      ],
      zoom: 2,
    },
  },
];

export const SICILY_TRANSPORT: Position = {
  //prettier-ignore
  points: [
    { lat: 37.466681, lng: 15.064284, cap: "CTA", typ:"l" },
    { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l" },
  ],
  zoom: 3,
};

export const SICILY_SLEEP: Position = {
  //prettier-ignore
  points: [
    { lat: 37.506068, lng: 15.092682, cap: "Loft Home Sweet Home", typ:"n" },
  ],
  zoom: 7,
};
