import Austria from "../svg/flags/aut";
import Indonesia from "../svg/flags/idn";
import Malaysia from "../svg/flags/mys";
import Qatar from "../svg/flags/qat";
import Frog from "../svg/icons/frog";
import type { MyHistory, Position } from "../types";

export const BALI_HISTORY: MyHistory[] = [
  //01 2209
  {
    date: "22 wrz. 2025",
    name: "Wiedeń & Doha",
    transit: {
      from: "Doha",
      to: "Bali ⮜ Kuala Lumpur",
      type: "plane",
    },
    //prettier-ignore
    images: [
      120, 2, 1,
      119, 4, 118,
    ],
    captions: {
      "118": "Schloss Belvedere",
      "119": "[VIE] Vienna International Airport",
      "4": "[DOH] Doha International Airport",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 25.271518, lng: 51.600731, cap: "DOH", typ: "l", imgs:[4,120] },
        { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l", imgs:[1,2,118,119] },
        { lat: 50.259712, lng: 19.017540, cap: "Katowice Dworzec PKP", typ: "l", imgs: [] },
      ],
      zoom: 3,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "7deg" },
    },
    svg2: {
      item: <Qatar />,
      styles: { rotate: "-7deg", left: "1rem", bottom: "0" },
    },
  },

  //02 2309
  {
    date: "23 wrz. 2025",
    name: "Kuala Lumpur & Bali",
    transit: {
      from: "Bali",
      to: "Nusa Penida",
      type: "ferry",
    },
    sleep: {
      name: "D nux House",
      styles: { left: "unset", right: "0" },
    },
    images: [5, 7, 6, 121],
    captions: {
      "6": "[KUL] Kuala Lumpur International Airport",
      "121": "[DPS] I Gusti Ngurah Rai International Airport",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 2.743373, lng: 101.701633, cap: "KUL", typ: "l", imgs:[5,6,7] },
        { lat: -8.745633, lng: 115.168307, cap: "DPS", typ: "l", imgs:[121] },
      ],
      zoom: 4,
    },
    // prettier-ignore
    position2: {
      points: [
        { lat: -8.745633, lng: 115.168307, cap: "DPS", typ: "l", imgs:[121] },
        { lat: -8.736988, lng: 115.165126, cap: "D Nux", typ: "n", imgs:[] },
      ],
      zoom: 12,
    },
    svg: {
      item: <Malaysia />,
      styles: { rotate: "7deg" },
    },
    svg2: {
      item: <Indonesia />,
      styles: { rotate: "-7deg", left: "1rem", bottom: "-2rem" },
    },
  },

  //03 2409
  {
    date: "24 wrz. 2025",
    name: "Nusa Penida",
    sleep: {
      name: "Pooja Ocean View Cottage",
      styles: { left: "unset", right: "0" },
    },
    // prettier-ignore
    images: [
      14, 13, 12,
      9, 10, 15,
      11,
    ],
    captions: {
      "9": "Port Benoa",
      "10": "Banjar Nyuh Harbor",
      "11": "Diamond Beach",
      "15": "Teletubbies Hills",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -8.774912, lng: 115.62026, cap: "Diamond Beach", imgs:[11,12,13] },
        { lat: -8.785152, lng: 115.574763, cap: "Teletubbies Hill", imgs:[14,15] },
        { lat: -8.680453, lng: 115.572884, cap: "Pooja", typ: "n", imgs:[] },
        { lat: -8.740912, lng: 115.209681, cap: "Port Benoa", typ: "l", imgs:[9] },
        { lat: -8.677029, lng: 115.488672, cap: "Banjar Nyuh Harbor", typ: "l", imgs:[10] },
        { lat: -8.736988, lng: 115.165126, cap: "D Nux", typ: "n", imgs:[] },
      ],
      zoom: 9,
    },
  },

  //04 2509
  {
    date: "25 wrz. 2025",
    name: "Nusa Penida",
    transit: {
      from: "Nusa Penida",
      to: "Gili Air",
      type: "ferry",
    },
    // prettier-ignore
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
    //prettier-ignore
    position: {
      points: [
        { lat: -8.715318, lng: 115.459079, cap: "Crystal Bay", imgs:[22,24,27] },
        { lat: -8.732582, lng: 115.450811, cap: "Broken Beach", imgs:[20,21,23] },
        { lat: -8.750409, lng: 115.473033, cap: "Kelingking Beach", imgs:[18,19,17] },
        { lat: -8.680453, lng: 115.572884, cap: "Pooja", typ: "n", imgs:[16,25,26]},
      ],
      zoom: 11,
    },
  },

  //05 2609
  {
    date: "26 wrz. 2025",
    name: "Gili Air",
    sleep: {
      name: "Oceans 5 Gili Air",
      styles: { left: "unset", right: 0 },
    },
    //prettier-ignore
    images: [
      28, 29, 30, 123,
      122, 124, 32, 31,
    ],
    captions: {
      "31": "Gili Air",
      "32": "Pulau Lombok",
      "122": "Banjar Nyuh Harbor",
      "124": "Gili Air Port",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.363622, lng: 116.083124, cap: "Gili Air Port", typ: "l", imgs:[28,29,30,31,124] },
        { lat: -8.677029, lng: 115.488672, cap: "Banjar Nyuh Harbor", typ: "l", imgs:[122,123] },
        { lat: -8.471610, lng: 116.121856, cap: "Lombok", imgs:[32] },
      ],
      zoom: 9,
    },
  },

  //06 2709
  {
    date: "27 wrz. 2025",
    name: "Gili Air",
    //prettier-ignore
    images: [
      115, 116, 117,
      34, 35, 33,
      36,
    ],
    captions: {
      "36": "Gili Trawangan & Gili Meno",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.358227, lng: 116.081349, cap: "Gili Air", imgs:[115,116,117,34,35,33] },
        { lat: -8.350381, lng: 116.056891, cap: "Gili Meno", imgs:[36] },
        { lat: -8.349551, lng: 116.036299, cap: "Gili Trawangan", imgs:[36] },
        { lat: -8.363442, lng: 116.082763, cap: "Oceans 5", typ: "n", imgs:[] },
      ],
      zoom: 13,
    },
  },

  //07 2809
  {
    date: "28 wrz. 2025",
    name: "Gili Air",
    transit: {
      from: "Gili Air",
      to: "Bali",
      type: "ferry",
    },
    images: [38, 39, 37],
    //prettier-ignore
    position: {
      points: [
        { lat: -8.358227, lng: 116.081349, cap: "Gili Air", imgs:[37,38,39] },
      ],
      zoom: 14,
    },
  },

  //08 2909
  {
    date: "29 wrz. 2025",
    name: "Bali",
    sleep: { name: "Eka Bali Guest House" },
    images: [40, 41, 42, 43],
    captions: {
      "40": "Port Padangbai",
      "41": "Eka Bali Guest House",
      "42": "Ubud",
      "43": "Żaba Rzekotkowata",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.363622, lng: 116.083124, cap: "Gili Air Port", typ: "l", imgs:[] },
        { lat: -8.533279, lng: 115.509159, cap: "Port Padangbai", typ: "l", imgs:[40] },
        { lat: -8.521912, lng: 115.263096, cap: "Eka Bali", typ: "n", imgs:[41,42,43] },
      ],
      zoom: 9,
    },
    svg: {
      item: <Frog />,
      styles: { left: "18rem", bottom: "2rem" },
    },
  },

  //09 3009
  {
    date: "30 wrz. 2025",
    name: "Ubud",
    // prettier-ignore
    images: [
      44, 52, 47, 54,
      51, 49, 55, 48,
      45, 53, 46, 50
    ],
    captions: {
      "45": "Mandala Suci Wenara Wana",
      "46": "Campuhan Ridge Walk",
      "50": "Tegallalang Rice Terrace",
      "53": "Kanto Lampo Waterfall",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.431563, lng: 115.279346, cap: "Tegallalang Rice Terrace", imgs:[51,49,55,48,50] },
        { lat: -8.493976, lng: 115.2556245, cap: "Campuhan Ridge Walk", imgs:[47,46]  },
        { lat: -8.532338, lng: 115.332851, cap: "Kanto Lampo Waterfall", imgs:[52,54,53]  },
        { lat: -8.519192, lng: 115.260694, cap: "Mandala Suci Wenara Wana", imgs:[45,44]  },
      ],
      zoom: 11,
    },
  },

  //10 0110
  {
    date: "01 paź. 2025",
    name: "Wulkan Batur",
    // prettier-ignore
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
    //prettier-ignore
    position: {
      points: [
        { lat: -8.239323, lng: 115.377451, cap: "Batur", imgs:[64,57,56] },
        { lat: -8.404518, lng: 115.321695, cap: "Cat Poo Chino", imgs:[62,61,63]},
        { lat: -8.251129, lng: 115.400206, cap: "Hot Spring", imgs:[60,58,59] },
      ],
      zoom: 10,
    },
  },

  //11 0210
  {
    date: "02 paź. 2025",
    name: "Północ Bali",
    transit: {
      from: "Ubud",
      to: "Kuta",
      type: "taxi",
    },
    // prettier-ignore
    images: [
      73, 76, 68, 67,
      65, 75, 71, 72,
      66, 74, 70, 69,
    ],
    captions: {
      "65": "Jatiluwih",
      "66": "Jatiluwih Rice Terraces",
      "69": "Ulun Danu Beratan Temple",
      "70": "Bali Handara Gate",
      "71": "Makaki Jawajskie",
      "72": "Buyan Viewpoint",
      "74": "Wodospady Sekumpul",
      "75": "Grombong Waterfall",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.274958, lng: 115.166823, cap: "Ulun Danu Beratan", imgs:[68,67,69] },
        { lat: -8.177351, lng: 115.182625, cap: "Sekumpul", imgs:[76,75,74,73] },
        { lat: -8.367122, lng: 115.131399, cap: "Jatiluwih", imgs:[65,66] },
        { lat: -8.236898, lng: 115.136446, cap: "Buyan Viewpoint", imgs:[71,72] },
        { lat: -8.252824, lng: 115.158275, cap: "Handara Gate", imgs:[70] },
      ],
      zoom: 10,
    },
  },

  //12 0310
  {
    date: "03 paź. 2025",
    name: "Kuta",
    sleep: { name: "Kost Melasti Legian" },
    transit: {
      from: "Bali",
      to: "Kuala Lumpur",
      type: "plane",
    },
    images: [78, 77, 125, 79],
    captions: {
      "79": "Legian Beach",
      "80": "[DPS] Port lotniczy Denpasar",
      "125": "Garuda Wisnu Kencana",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -8.708677, lng: 115.170961, cap: "Kost Melasti Legian", typ: "n", imgs:[77,79,78] },
        { lat: -8.521912, lng: 115.263096, cap: "Eka Bali Guest House", typ: "n" },
        { lat: -8.809953, lng: 115.167983, cap: "Garuda Wisnu Kencana", imgs:[125] },
        { lat: -8.745633, lng: 115.168307, cap: "DPS", typ: "l", imgs:[] },
      ],
      zoom: 10,
    },
  },

  //13 0410
  {
    date: "04 paź. 2025",
    name: "Kuala Lumpur",
    sleep: {
      name: "The Luxe By Infinitum KLCC",
      styles: { left: "unset", right: 0 },
    },
    //prettier-ignore
    images: [
      126, 127, 128,
      82, 84, 80,
      83,
    ],
    captions: {
      "82": "Quill City Mall Kuala Lumpur",
      "83": "The Luxe By Infinitum KLCC",
      "84": "Menara Kuala Lumpur",
      "126": "KLCC",
      "127": "[KUL] Kuala Lumpur International Airport",
      "128": "Boeing 777",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 2.743201, lng: 101.701032, cap: "KUL", typ: "l", imgs:[127,128] },
        { lat: 3.161124, lng: 101.700345, cap: "The Luxe", typ: "n", imgs:[82,83,84] },
        { lat: 3.159362, lng: 101.713391, cap: "KLCC", typ: "l", imgs:[126] },
      ],
      zoom: 9,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 2.743373, lng: 101.701633, cap: "KUL", typ: "l", imgs:[126, 127, 128,82, 84, 83] },
        { lat: -8.745633, lng: 115.168307, cap: "DPS", typ: "l", imgs:[80] },
      ],
      zoom: 3,
    },
    svg: {
      item: <Malaysia />,
      styles: { rotate: "7deg" },
    },
  },

  //14 0510
  {
    date: "05 paź. 2025",
    name: "Kuala Lumpur",
    transit: {
      from: "Kuala Lumpur",
      to: "Doha",
      type: "plane",
    },
    // prettier-ignore
    images: [
      87, 89, 90, 95,
      100, 102, 96, 92,
      101, 93, 94,
    ],
    captions: {
      "87": "Posąg Lorda Murugana",
      "89": "Batu Caves",
      "90": "Kuala Lumpur View",
      "95": "Petronas Twin Towers",
      "92": "Bosco Verticale",
      "93": "Petronas Towers",
      "94": "KLCC Park",
      "96": "Merdeka Maybank Tower",
      "100": "Metro Kuala Lumpur",
      "101": "Tokong Thean Hou",
      "102": "Chinatown Kuala Lumpur",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 3.161124, lng: 101.700345, cap: "The Luxe By Infinitum KLCC", typ: "n", imgs:[] },
        { lat: 3.122135, lng: 101.687668, cap: "Tokong Thean Hou", imgs:[101,100] },
        { lat: 3.238129, lng: 101.684074, cap: "Batu Caves", imgs:[87,89,90] },
        { lat: 3.157966, lng: 101.712081, cap: "Petronas Twin Towers", imgs:[95,92,93,94] },
        { lat: 3.145856, lng: 101.695408, cap: "Chinatown", imgs:[102,96] },
      ],
      zoom: 11,
    },
  },

  //15 0610
  {
    date: "06 paź. 2025",
    name: "Doha",
    sleep: {
      name: "Premier Inn Doha",
    },
    transit: {
      from: "Doha",
      to: "Wiedeń",
      type: "plane",
    },
    // prettier-ignore
    images: [
      110, 104, 111, 106,
      107, 103, 109, 108,
      105,
    ],
    captions: {
      "103": "Souq Waqif",
      "104": "Al Fanar Masjid",
      "105": "Katara Towers",
      "106": "OliOli Doha",
      "107": "Katara Cultural Village",
      "108": "Katara Multi-Purpose Hall",
      "109": "Medina Centrale",
      "110": "Floresta Gardens",
      "111": "The Pearl-Qatar",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 25.281828, lng: 51.550442, cap: "Premier Inn", typ: "n", imgs:[] },
        { lat: 25.271518, lng: 51.600731, cap: "DOH", typ: "l", imgs:[] },
        { lat: 25.288206, lng: 51.532883, cap: "Souq Waqif", imgs:[103,104] },
        { lat: 25.389679, lng: 51.531605, cap: "Katara Towers", imgs:[105] },
        { lat: 25.360074, lng: 51.525174, cap: "Katara Cultural Village", imgs:[106,108,107] },
        { lat: 25.369269, lng: 51.551325, cap: "Pearl Qatar", imgs:[110,111,109,] },
      ],
      zoom: 11,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 25.271518, lng: 51.600731, cap: "DOH", typ: "l", imgs:[110, 104, 111, 106,107, 103, 109,108,105] },
        { lat: 2.743373, lng: 101.701633, cap: "KUL", typ: "l", imgs:[] },
      ],
      zoom: 2,
    },
    svg: {
      item: <Qatar />,
      styles: { rotate: "7deg", left: "unset", right: "-1rem" },
    },
  },

  //16 0710
  {
    date: "07 paź. 2025",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Katowice",
      type: "train",
    },
    images: [112, 113, 114],
    //prettier-ignore
    position: {
      points: [
        { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l", imgs:[112,113]  },
        { lat: 48.184741, lng: 16.378619, cap: "Wien Hauptbahnhof", typ: "l", imgs:[114]  },
      ],
      zoom: 11,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l", imgs:[112,113,114]  },
        { lat: 25.271518, lng: 51.600731, cap: "DOH", typ: "l", imgs:[] },
      ],
      zoom: 2,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "-7deg" },
    },
  },
];

export const BALI_TRANSPORT: Position = {
  points: [
    { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l" },
    { lat: 25.271518, lng: 51.600731, cap: "DOH", typ: "l" },
    { lat: 2.743373, lng: 101.701633, cap: "KUL", typ: "l" },
    { lat: -8.745633, lng: 115.168307, cap: "DPS", typ: "l" },
    { lat: -8.745633, lng: 115.168307, cap: "", typ: "x" },
  ],
  zoom: 1,
};

export const BALI_SLEEP: Position = {
  //prettier-ignore
  points: [
    { lat: -8.736988, lng: 115.165126, cap: "D nux House", typ: "n" },
    { lat: -8.680453, lng: 115.572884, cap: "Pooja Ocean View Cottage", typ: "n" },
    { lat: -8.363442, lng: 116.082763, cap: "Oceans 5 Gili Air", typ: "n" },
    { lat: -8.521912, lng: 115.263096, cap: "Eka Bali Guest House", typ: "n" },
    { lat: -8.708677, lng: 115.170961, cap: "Kost Melasti Legian", typ: "n" },
  ],
  zoom: 8,
};

export const BALI_FOOD = {
  "129": "Degustacja Herbaty",
  "133": "Chicken Soup",
  "134": "Naleśniki z Banana",
  "135": "Pizza",
  "136": "Pancakes",
  "137": "Kurczak Curry",
  "138": "Sato Ayam",
  "140": "Kebaba",
  "141": "Kawa",
  "142": "Pizza",
  "144": "Sajgonki",
  "145": "Kurczak BBQ",
  "146": "Kotlety z Kurczaka",
  "147": "Mie Goreng",
  "148": "Satay z Kurczaka",
  "149": "Nasi Goreng",
};
