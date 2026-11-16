import Croatia from "../svg/flags/cro";
import type { MyHistory } from "../types";

export const SPLIT_HISTORY: MyHistory[] = [
  //01 1807
  {
    date: "18 Jul. 2026",
    name: "Kaštel Lukšić",
    sleep: { name: "Villa Comfort", styles: { left: "unset", right: 0 } },
    //prettier-ignore
    images: [
      6, 2, 8,
      4, 3, 1,
      7,
    ],
    captions: {
      "1": "[KTW] Katowice Wojciech Korfanty International Airport",
      "3": "[SPU] Split Saint Jerome Airport",
      "4": "Beach Kaštel Lukšić",
      "7": "Villa Comfort",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs:[2,3] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[6,7,8] },
        { lat: 43.550437, lng: 16.363151, cap: "Beach Kaštel Lukšić", imgs:[4] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs:[2,3,4,5,6,7,8] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[1] },
      ],
      zoom: 3,
    },
    svg: {
      item: <Croatia />,
      styles: { rotate: "7deg" },
    },
  },

  //021907
  {
    date: "19 Jul. 2026",
    name: "Kaštel Lukšić",
    //prettier-ignore
    images: [
      10, 12, 15, 67,
      66, 9,  14, 11,
      13
    ],
    captions: {
      "14": "Hiszpania vs Argentyna ⚽",
      "9": "Villa Comfort",
      "11": "Lučica Kaštel Stari",
      "66": "Kaštel Lukšić",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[9,66,67] },
        { lat: 43.549781, lng: 16.344235,  cap: "Lučica Kaštel Stari", imgs:[10,11,12,13,14,15] },
      ],
      zoom: 13,
    },
  },

  //03 2007
  {
    date: "20 Jul. 2026",
    name: "Trogir",
    trip: {
      to: "Trogir",
      type: "bus",
      styles: { top: "75%", right: "-4rem", rotate: "2deg" },
    },
    //prettier-ignore

    images: [
      18, 19, 20, 21, 23,
      24, 68, 27, 29, 30,
      31, 17, 26, 28, 22,
    ],
    captions: {
      "22": "Katedrala sv. Lovre",
      "17": "Kupalište Šumica",
      "26": "Kula Kamerlengo",
      "31": "Domaći Okusi",
      "28": "Glorijet maršala Marmonta",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.516531, lng: 16.249594, cap: "Trogir", imgs:[20,21,22,23,24,26,27,28,29,30,31,] },
        { lat: 43.550973, lng: 16.356347, cap: "Kaštel Lukšić", imgs:[17,18,19,68] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.550973, lng: 16.356347, cap: "Kupalište Šumica", imgs:[17,18,19] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[68] },

      ],
      zoom: 13,
    },
  },

  //04 2107
  {
    date: "21 Jul. 2026",
    name: "Kaštel Lukšić",
    images: [32, 33, 34, 35, 36, 37],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[] },
        { lat: 43.549781, lng: 16.344235,  cap: "Lučica Kaštel Stari", imgs:[] },
      ],
      zoom: 13,
    },
  },

  //05 2207
  {
    date: "22 Jul. 2026",
    name: "Drvenik Veliki & Drvenik Mali",
    trip: { to: "Drvenik Veliki & Drvenik Mali", type: "ferry" },
    images: [38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[] },
        { lat: 43.516531, lng: 16.249594, cap: "Trogir", imgs:[] },
        { lat: 43.448704, lng: 16.145569, cap: "Drvenik Veliki", imgs:[] },
        { lat: 43.444833, lng: 16.083033, cap: "Drvenik Mali", imgs:[] },
      ],
      zoom: 10,
    },
  },
  {
    date: "23 Jul. 2026",
    name: "Split",
    images: [54, 55, 56, 57, 69],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.507825, lng: 16.438231, cap: "Split Riva", imgs:[] },
      ],
      zoom: 13,
    },
  },
  {
    date: "24 Jul. 2026",
    name: "Memorijalni Park",
    trip: { to: "Split", type: "bus" },
    transit: { from: "Spit", to: "Katowice", type: "plane" },
    images: [70, 71, 72, 73, 58, 59, 60, 61, 62, 63, 64, 65],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.581287, lng: 16.322591, cap: "Memorijalni Park", imgs:[] }
      ],
      zoom: 12,
    },
  },
  {
    date: "25 Jul. 2026",
    name: "Split",
    images: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],

    //prettier-ignore
    position: {
      points: [
        { lat: 43.507825, lng: 16.438231, cap: "Split Riva", imgs:[] },
        { lat: 43.508249, lng: 16.440181, cap: "Dioklecijanova Palača", imgs:[] },
        { lat: 43.507733, lng: 16.430306, cap: "Prva vidilica na Marjanu", imgs:[] },
        { lat: 43.500522, lng: 16.451764, cap: "Small Forest by the Beach", imgs:[] }
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.508606, lng: 16.436183, cap: "Split", imgs:[] },
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs:[] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs:[] },
      ],
      zoom: 10,
    },
  },
];
