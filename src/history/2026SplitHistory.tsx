import Croatia from "../svg/flags/cro";
import type { MyHistory } from "../types";

export const SPLIT_HISTORY: MyHistory[] = [
  //01 1807
  {
    date: "18 lip. 2026",
    name: "Kaštel Lukšić",
    sleep: {
      name: "Villa Comfort",
      styles: { left: "unset", right: 0 },
    },
    //prettier-ignore
    images: [
      6, 2, 8,
      4, 3, 1,
      7,
    ],
    captions: {
      "1": "[KTW] Międzynarodowy Port Lotniczy Katowice im. Wojciecha Korfantego",
      "3": "[SPU] Zračna luka Split",
      "4": "Plaža Kaštel Lukšić",
      "7": "Villa Comfort",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs: [2, 3] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [6, 7, 8] },
        { lat: 43.550437, lng: 16.363151, cap: "Plaża Kaštel Lukšić", imgs: [4] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs: [2, 3, 4, 5, 6, 7, 8] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs: [1] },
      ],
      zoom: 3,
    },
    svg: {
      item: <Croatia />,
      styles: { rotate: "7deg" },
    },
  },

  //02 1907
  {
    date: "19 lip. 2026",
    name: "Kaštel Lukšić",
    food: {
      name: "Burger",
      img: 16,
      styles: { bottom: "7rem", left: "-3rem", rotate: "-3deg" },
    },
    //prettier-ignore
    images: [
      10, 12, 15, 67,
      66, 9, 14, 11,
      13
    ],
    captions: {
      "14": "Španjolska vs Argentina ⚽",
      "9": "Villa Comfort",
      "11": "Lučica Kaštel Stari",
      "66": "Kaštel Lukšić",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [9, 66, 67] },
        { lat: 43.549781, lng: 16.344235, cap: "Przystań Kaštel Stari", imgs: [10, 11, 12, 13, 14, 15] },
      ],
      zoom: 13,
    },
  },

  //03 2007
  {
    date: "20 lip. 2026",
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
        { lat: 43.516531, lng: 16.249594, cap: "Trogir", imgs: [20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31] },
        { lat: 43.550973, lng: 16.356347, cap: "Kaštel Lukšić", imgs: [17, 18, 19, 68] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.550973, lng: 16.356347, cap: "Kąpielisko Šumica", imgs: [17, 18, 19] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [68] },
      ],
      zoom: 13,
    },
  },

  //04 2107
  {
    date: "21 lip. 2026",
    name: "Kaštel Lukšić",
    //prettier-ignore
    images: [
      37, 34, 33,
      35, 36, 32,
    ],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [32, 33] },
        { lat: 43.549781, lng: 16.344235, cap: "Przystań Kaštel Stari", imgs: [34, 35, 36, 37] },
      ],
      zoom: 13,
    },
  },

  //05 2207
  {
    date: "22 lip. 2026",
    name: "Drvenik Veliki i Drvenik Mali",
    trip: {
      to: "Drvenik Veliki i Drvenik Mali",
      type: "ferry",
      styles: { top: "1rem", rotate: "2deg" },
    },
    food: {
      name: "Smażona makrela",
      img: 45,
      styles: {
        left: "unset",
        right: "-5rem",
        bottom: "13rem",
        rotate: "2deg",
      },
    },
    //prettier-ignore
    images: [
      38, 39, 41, 43, 44,
      46, 48, 49, 51, 53,
      52, 50, 42, 40, 47
    ],
    captions: {
      "50": "Trogir",
      "42": "Drvenik Veliki",
      "47": "Drvenik Mali",
      "52": "Kula Kamerlengo",
      "40": "Plava laguna (Krknjaši)",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [] },
        { lat: 43.516531, lng: 16.249594, cap: "Trogir", imgs: [38, 39, 51, 53, 52, 50] },
        { lat: 43.448704, lng: 16.145569, cap: "Drvenik Veliki", imgs: [41, 43, 44, 42, 40] },
        { lat: 43.444833, lng: 16.083033, cap: "Drvenik Mali", imgs: [46, 48, 49, 47] },
      ],
      zoom: 10,
    },
  },

  //06 2307
  {
    date: "23 lip. 2026",
    name: "Split",
    trip: {
      to: "Split",
      type: "bus",
      styles: { right: "unset", left: "-3rem", rotate: "-3deg", top: "70%" },
    },
    //prettier-ignore
    images: [
      55, 54,
      56, 57,
      69,
    ],
    //prettier-ignore
    position: {
      points: [
        { lat: 43.507825, lng: 16.438231, cap: "Promenada Riva w Splicie", imgs: [54, 55, 56, 57] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [69] },
      ],
      zoom: 11,
    },
  },

  //07 2407
  {
    date: "24 lip. 2026",
    name: "Park Pamięci",
    trip: {
      to: "Park Pamięci",
      type: "taxi",
      styles: { rotate: "3deg", top: "2rem" },
    },
    food: {
      name: "Pizza",
      img: 74,
      styles: {
        left: "unset",
        right: "-5rem",
        bottom: "11rem",
        rotate: "4deg",
      },
    },
    //prettier-ignore
    images: [
      71, 65, 58, 59,
      60, 62, 64, 72,
      73, 63, 70, 61
    ],
    captions: {
      "73": "Kupalište Šumica",
      "63": "Spomen park",
      "70": "Kaštel Lukšić",
      "61": "Split",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.581287, lng: 16.322591, cap: "Park Pamięci", imgs: [65, 60, 62, 64, 63, 61] },
        { lat: 43.551077, lng: 16.356052, cap: "Kąpielisko Šumica", imgs: [71, 58, 59, 72, 73, 70] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [] },
      ],
      zoom: 12,
    },
  },

  //08 2507
  {
    date: "25 lip. 2026",
    name: "Split",
    trip: {
      to: "Split",
      type: "bus",
      styles: { rotate: "3deg" },
    },
    transit: {
      from: "Split",
      to: "Katowice",
      type: "plane",
    },
    //prettier-ignore
    images: [
      77, 81, 82, 79,
      84, 83, 76, 80,
      75, 78, 85,
    ],
    captions: {
      "85": "Šumica uz plažu",
      "80": "Splitska Riva",
      "76": "Dioklecijanova palača",
      "78": "Prva vidilica na Marjanu",
      "83": "[SPU] Zračna luka Split",
      "75": "Katedrala sv. Duje",
      "84": "Cable Park Split",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.507825, lng: 16.438231, cap: "Promenada Riva w Splicie", imgs: [77, 82, 80] },
        { lat: 43.508249, lng: 16.440181, cap: "Pałac Dioklecjana", imgs: [75, 76] },
        { lat: 43.507733, lng: 16.430306, cap: "Pierwszy punkt widokowy na Marjan", imgs: [79, 78] },
        { lat: 43.500522, lng: 16.451764, cap: "Lasek przy plaży", imgs: [81, 85] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 43.508606, lng: 16.436183, cap: "Split", imgs: [77, 81, 82, 79, 76, 80, 75, 78, 85] },
        { lat: 43.536767, lng: 16.299004, typ: "l", cap: "SPU", imgs: [84, 83] },
        { lat: 43.554197, lng: 16.358631, typ: "n", cap: "Villa Comfort", imgs: [] },
      ],
      zoom: 10,
    },
  },
];
