import { Austria, Indonesia, Malaysia, Qatar } from "../svg";
import type { MyHistory } from "../types";

export const BALI_HISTORY: MyHistory[] = [
  {
    date: "22 wrz. 2025",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Doha",
    },
    images: [2, 1],
    captions: {
      "1": "Pałac Belweder",
      "2": "Wien Hauptbahnhof",
    },
    position: {
      lat: 48.2082,
      lng: 16.3738,
      zoom: 12,
    },
    svg: <Austria />,
    svgStyles: { rotate: "7deg" },
  },
  //02
  {
    date: "22 wrz. 2025",
    name: "Doha",
    transit: {
      from: "Doha",
      to: "Kuala Lumpur",
    },
    images: [4, 3],
    captions: {
      "3": "Doha International Airport",
    },
    position: {
      lat: 25.2606,
      lng: 51.6138,
      zoom: 6,
    },
    svg: <Qatar />,
    svgStyles: { rotate: "-7deg", left: "unset", right: "-1rem" },
  },
  //03
  {
    date: "23 wrz. 2025",
    name: "Kuala Lumpur",
    transit: {
      from: "Kuala Lumpur",
      to: "Bali",
    },
    images: [5, 7, 6],
    captions: {
      "6": "Kuala Lumpur International Airport",
    },
    position: {
      lat: 2.7456,
      lng: 101.7072,
      zoom: 10,
    },
    svg: <Malaysia />,
    svgStyles: { rotate: "7deg" },
  },
  //
  {
    date: "24 wrz. 2025",
    name: "Bali",
    transit: {
      from: "Bali",
      to: "Nusa Penida",
    },
    images: [8, 9],
    captions: {
      "9": "Port Tanjung Emas",
    },
    position: {
      lat: -8.7482,
      lng: 115.1672,
      zoom: 10,
    },
    svg: <Indonesia />,
    svgStyles: { rotate: "-7deg" },
  },
  //
  {
    date: "24 wrz. 2025",
    name: "Nusa Penida",
    //prettier-ignore
    images: [
      13, 12, 14,
      10, 15, 11,
    ],
    captions: {
      "10": "Banjar Nyuh Harbor",
      "11": "Diamond Beach",
      "15": "Teletubbies Hills",
    },
    position: {
      lat: -8.727,
      lng: 115.5444,
      zoom: 10,
    },
  },
  {
    date: "25 wrz. 2025",
    name: "Nusa Penida",
    transit: {
      from: "Nusa Penida",
      to: "Gili Air",
    },
    //prettier-ignore
    images: [
      16, 25, 18, 19,
      20, 21, 22, 27,
      24, 17, 26, 23
    ],
    captions: {
      "17": "Kelingking Beach",
      "23": "Broken Beach",
      "24": "Crystal Bay",
      "26": "Pooja Ocean View Cottage",
    },
    position: {
      lat: -8.727,
      lng: 115.5444,
      zoom: 10,
    },
  },
  {
    date: "26 wrz. 2025",
    name: "Gili Air",
    images: [28, 29, 30, 32, 31],
    position: {
      lat: -8.357,
      lng: 116.082,
      zoom: 10,
    },
  },
  {
    date: "27 wrz. 2025",
    name: "Gili Air",
    images: [36, 34, 35, 33],
    position: {
      lat: -8.357,
      lng: 116.082,
      zoom: 10,
    },
  },
  {
    date: "28 wrz. 2025",
    name: "Gili Air",
    transit: {
      from: "Gili Air",
      to: "Bali",
    },
    images: [38, 39, 37],
    position: {
      lat: -8.357,
      lng: 116.082,
      zoom: 10,
    },
  },
  {
    date: "29 wrz. 2025",
    name: "Bali",
    images: [40, 41, 42, 43],
    captions: {
      "40": "Port Padangbai",
      "41": "Eka Bali Guest House",
      "42": "Ubud",
      "43": "Żaba Rzekotkowata",
    },
    position: {
      lat: -8.5069,
      lng: 115.2625,
      zoom: 10,
    },
  },
  {
    date: "30 wrz. 2025",
    name: "Ubud",
    //prettier-ignore
    images: [
      44, 52, 47, 54,
      51, 49, 55, 48,
      45, 53, 46, 50
    ],
    captions: {
      "45": "Święty Las Małp",
      "46": "Campuhan Ridge Walk",
      "50": "Tarasy Ryżowe Tegalalang",
      "53": "Wodospad Kanto Lampo",
    },
    position: {
      lat: -8.431,
      lng: 115.279,
      zoom: 10,
    },
  },
  {
    date: "01 paź. 2025",
    name: "Wulkan Batur",
    //prettier-ignore
    images: [
      64, 57, 60, 62,
      58, 61, 63, 59,
      56,
    ],
    captions: {
      "56": "Gunung Batur",
      "58": "Danau Batur",
      "59": "Batur Natural Hot Spring",
      "61": "Bali Cat Poo Chino",
      "63": "Luwak",
    },
    position: {
      lat: -8.239,
      lng: 115.375,
      zoom: 10,
    },
  },
  //
  {
    date: "02 paź. 2025",
    name: "Północ Bali",
    transit: {
      from: "Ubud",
      to: "Kuta",
    },
    //prettier-ignore
    images: [
      73, 65, 68, 67,
      76, 75, 71, 72,
      66, 74, 70, 69,
    ],
    captions: {
      "66": "Tarasy Ryżowe Jatiluwih",
      "69": "Ulun Danu Beratan Temple",
      "70": "Bali Handara Gate",
      "74": "Wodospady Sekumpul",
    },
    position: {
      lat: -8.275,
      lng: 115.166,
      zoom: 10,
    },
  },
  //
  {
    date: "03 paź. 2025",
    name: "Kuta",
    transit: {
      from: "Kuta",
      to: "Denpasar",
    },
    images: [78, 77, 79],
    captions: {
      "79": "Plaża Legian",
    },
    position: {
      lat: -8.7482,
      lng: 115.1672,
      zoom: 10,
    },
  },
  //
  {
    date: "04 paź. 2025",
    name: "Denpasar",
    transit: {
      from: "Bali",
      to: "Kuala Lumpur",
    },
    images: [81, 80],
    captions: {
      "80": "Port lotniczy Denpasar",
    },
    position: {
      lat: -8.723,
      lng: 115.175,
      zoom: 10,
    },
  },
  //
  {
    date: "04 paź. 2025",
    name: "Kuala Lumpur",
    images: [82, 84, 83],
    captions: {
      "82": "Quill City Mall Kuala Lumpur",
      "83": "The Luxe By Infinitum KLCC",
      "84": "Menara Kuala Lumpur",
    },
    position: {
      lat: 3.139,
      lng: 101.6869,
      zoom: 10,
    },
    svg: <Malaysia />,
    svgStyles: { rotate: "7deg" },
  },
  //
  {
    date: "05 paź. 2025",
    name: "Jaskinie Bantu",
    //prettier-ignore
    images: [
      85, 89, 91,
      88, 86, 90,
      87,
    ],
    captions: {
      "87": "Posąg Lorda Murugana",
    },
    position: {
      lat: 3.139,
      lng: 101.6869,
      zoom: 10,
    },
  },
  //
  {
    date: "05 paź. 2025",
    name: "Kuala Lumpur",
    transit: {
      from: "Kuala Lumpur",
      to: "Doha",
    },
    //prettier-ignore
    images: [
      95, 98, 97, 99,
      100, 102, 96, 92,
      101, 93, 94,
    ],
    captions: {
      "92": "Bosco Verticale",
      "93": "Petronas Towers",
      "94": "KLCC Park",
      "96": "Merdeka Maybank Tower",
      "100": "Metro Kuala Lumpur",
      "101": "Świątynia Thean Hou",
      "102": "Chinatown Kuala Lumpur",
    },
    position: {
      lat: 3.139,
      lng: 101.6869,
      zoom: 10,
    },
  },
  //
  {
    date: "06 paź. 2025",
    name: "Doha",
    transit: {
      from: "Doha",
      to: "Wiedeń",
    },
    //prettier-ignore
    images: [
      110, 104, 111, 106,
      107, 103, 109, 108,
      105, 
    ],
    captions: {
      "103": "Bazar Souq Waqif",
      "104": "Meczet Al Fanar",
      "105": "Katara Towers",
      "106": "OliOli Doha",
      "107": "Katara Cultural Village",
      "108": "Katara Multi-Purpose Hall",
      "109": "Medina Centrale",
      "110": "Floresta Gardens",
      "111": "The Pearl-Qatar",
    },
    position: {
      lat: 25.2854,
      lng: 51.531,
      zoom: 10,
    },
    svg: <Qatar />,
    svgStyles: { rotate: "7deg", left: "unset", right: "-1rem" },
  },
  //
  {
    date: "07 paź. 2025",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Katowice",
    },
    images: [112, 113, 114],
    position: {
      lat: 48.1103,
      lng: 16.5697,
      zoom: 10,
    },
    svg: <Austria />,
    svgStyles: { rotate: "-7deg" },
  },
];
