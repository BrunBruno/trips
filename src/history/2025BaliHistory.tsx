import Austria from "../svg/flags/aut";
import Indonesia from "../svg/flags/idn";
import Malaysia from "../svg/flags/mys";
import Qatar from "../svg/flags/qat";
import Diamond from "../svg/icons/diamond";
import Frog from "../svg/icons/frog";
import Island from "../svg/icons/island";
import Monkey from "../svg/icons/monkey";
import Octopus from "../svg/icons/octopus";
import Surfboard from "../svg/icons/surfboard";
import TwinTower from "../svg/icons/twin-tower";
import Volcano from "../svg/icons/volcano";
import Yacht from "../svg/icons/yacht";
import type { MyHistory } from "../types";

export const BALI_HISTORY: MyHistory[] = [
  //01 2209
  {
    date: "22 wrz. 2025",
    name: "Wiedeń ➤ Doha",
    transit: {
      from: "Doha",
      to: "Kuala Lumpur",
    },
    images: [2, 4, 1],
    captions: {
      "1": "Pałac Belweder",
      "2": "Wien Hauptbahnhof",
      "4": "Doha International Airport",
    },
    position: {
      points: [
        { lat: 48.2082, lng: 16.3738, cap: "VIE", typ: "l" },
        { lat: 25.2606, lng: 51.6138, cap: "DOH", typ: "l" },
        { lat: 2.7456, lng: 101.7072, cap: "KUL", typ: "l" },
        { lat: -8.7482, lng: 115.1672, cap: "DPS", typ: "l" },
      ],
      zoom: 2,
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
    name: "Kuala Lumpur ➤ Bali",
    transit: {
      from: "Bali",
      to: "Nusa Penida",
    },
    sleep: {
      name: "Jepun Segara Guest House",
      styles: { left: "unset", right: "0" },
    },
    images: [5, 7, 6],
    captions: {
      "6": "Kuala Lumpur International Airport",
    },
    position: {
      points: [
        { lat: -8.7482, lng: 115.1672, cap: "DPS", typ: "l" },
        {
          lat: -8.738007,
          lng: 115.165627,
          cap: "Jepun Segara Guest House",
          typ: "n",
        },
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
    position: {
      points: [
        { lat: -8.774912, lng: 115.62026, cap: "Diamond Beach" },
        { lat: -8.785152, lng: 115.574763, cap: "Teletubbies Hill" },
        {
          lat: -8.680453,
          lng: 115.572884,
          cap: "Pooja Ocean View Cottage",
          typ: "n",
        },
        { lat: -8.740912, lng: 115.209681, cap: "Port Benoa", typ: "l" },
        {
          lat: -8.677029,
          lng: 115.488672,
          cap: "Banjar Nyuh Harbor",
          typ: "l",
        },
      ],
      zoom: 9,
    },
    svg: {
      item: <Diamond />,
      styles: { rotate: "15deg", left: "1rem", bottom: "1rem" },
    },
  },

  //04 2509
  {
    date: "25 wrz. 2025",
    name: "Nusa Penida",
    transit: {
      from: "Nusa Penida",
      to: "Gili Air",
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
    position: {
      points: [
        { lat: -8.715318, lng: 115.459079, cap: "Crystal Bay" },
        { lat: -8.732582, lng: 115.450811, cap: "Broken Beach" },
        { lat: -8.750409, lng: 115.473033, cap: "Kelingking Beach" },
        {
          lat: -8.680453,
          lng: 115.572884,
          cap: "Pooja Ocean View Cottage",
          typ: "n",
        },
      ],
      zoom: 11,
    },
    svg: {
      item: <Octopus />,
      styles: { rotate: "-7deg", left: "1rem", bottom: "6rem" },
    },
  },

  //05 2609
  {
    date: "26 wrz. 2025",
    name: "Gili Air",
    sleep: {
      name: "Oceans 5 Gili Air",
    },
    images: [28, 29, 30, 32, 31],
    position: {
      points: [
        { lat: -8.363622, lng: 116.083124, cap: "Gili Air Port", typ: "l" },
        {
          lat: -8.677029,
          lng: 115.488672,
          cap: "Banjar Nyuh Harbor",
          typ: "l",
        },
      ],
      zoom: 9,
    },
    svg: {
      item: <Yacht />,
      styles: { rotate: "-7deg", left: "14rem", bottom: "18rem" },
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
    position: {
      points: [
        { lat: -8.358227, lng: 116.081349, cap: "Gili Air" },
        { lat: -8.363442, lng: 116.082763, cap: "Oceans 5 Gili Air", typ: "n" },
      ],
      zoom: 14,
    },
  },

  //07 2809
  {
    date: "28 wrz. 2025",
    name: "Gili Air",
    transit: {
      from: "Gili Air",
      to: "Bali",
    },
    images: [38, 39, 37],
    position: {
      points: [
        { lat: -8.358227, lng: 116.081349, cap: "Gili Air" },
        { lat: -8.350381, lng: 116.056891, cap: "Gili Meno" },
        { lat: -8.349551, lng: 116.036299, cap: "Gili Trawangan" },
      ],
      zoom: 13,
    },
    svg: {
      item: <Island />,
      styles: { left: "1rem", bottom: "1rem" },
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
    position: {
      points: [
        { lat: -8.363622, lng: 116.083124, cap: "Gili Air Port", typ: "l" },
        { lat: -8.533279, lng: 115.509159, cap: "Port Padangbai", typ: "l" },
        {
          lat: -8.521912,
          lng: 115.263096,
          cap: "Eka Bali Guest House",
          typ: "n",
        },
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
    position: {
      points: [
        { lat: -8.431563, lng: 115.279346, cap: "Tegallalang Rice Terrace" },
        { lat: -8.493976, lng: 115.2556245, cap: "Campuhan Ridge Walk" },
        { lat: -8.532338, lng: 115.332851, cap: "Kanto Lampo Waterfall" },
        {
          lat: -8.521912,
          lng: 115.263096,
          cap: "Eka Bali Guest House",
          typ: "n",
        },
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
    position: {
      points: [
        { lat: -8.239323, lng: 115.377451, cap: "Batur" },
        { lat: -8.404518, lng: 115.321695, cap: "Bali Cat Poo Chino" },
      ],
      zoom: 10,
    },
    svg: {
      item: <Volcano />,
      styles: { left: "0rem", bottom: "2rem", scale: 1.4 },
    },
  },

  //11 0210
  {
    date: "02 paź. 2025",
    name: "Północ Bali",
    transit: {
      from: "Ubud",
      to: "Kuta",
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
    position: {
      points: [
        { lat: -8.274958, lng: 115.166823, cap: "Ulun Danu Beratan Temple" },
        { lat: -8.177351, lng: 115.182625, cap: "Sekumpul Waterfall" },
        { lat: -8.367122, lng: 115.131399, cap: "Jatiluwih Rice Terraces" },
        { lat: -8.236898, lng: 115.136446, cap: "Buyan Viewpoint" },
      ],
      zoom: 10,
    },
    svg: {
      item: <Monkey />,
      styles: { left: "20rem", bottom: "5rem" },
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
    },
    images: [78, 77, 79],
    captions: {
      "79": "Legian Beach",
    },
    position: {
      points: [
        { lat: -8.709098, lng: 115.166499, cap: "Pantai Legian Bali" },
        {
          lat: -8.708677,
          lng: 115.170961,
          cap: "Kost Melasti Legian",
          typ: "n",
        },
      ],
      zoom: 13,
    },
    svg: {
      item: <Surfboard />,
      styles: { left: "18rem", bottom: "3rem", rotate: "-15deg" },
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
    images: [80, 82, 84, 83],
    captions: {
      "80": "Port lotniczy Denpasar",
      "82": "Quill City Mall Kuala Lumpur",
      "83": "The Luxe By Infinitum KLCC",
      "84": "Menara Kuala Lumpur",
    },
    position: {
      points: [
        { lat: 2.7456, lng: 101.7072, cap: "KUL", typ: "l" },
        { lat: -8.7482, lng: 115.1672, cap: "DPS", typ: "l" },
      ],
      zoom: 4,
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
    position: {
      points: [
        {
          lat: 3.161124,
          lng: 101.700345,
          cap: "The Luxe By Infinitum KLCC",
          typ: "n",
        },
        { lat: 3.122135, lng: 101.687668, cap: "Tokong Thean Hou" },
        { lat: 3.238129, lng: 101.684074, cap: "Batu Caves" },
        { lat: 3.157966, lng: 101.712081, cap: "Petronas Twin Towers" },
        { lat: 3.145856, lng: 101.695408, cap: "Chinatown" },
      ],
      zoom: 11,
    },
    svg: {
      item: <TwinTower />,
      styles: { left: "0rem", bottom: "1rem", scale:1.2 },
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

    position: {
      points: [
        { lat: 25.281828, lng: 51.550442, cap: "Premier Inn Doha", typ: "n" },
        { lat: 25.2606, lng: 51.6138, cap: "DOH", typ: "l" },
        { lat: 25.288206, lng: 51.532883, cap: "Souq Waqif" },
        { lat: 25.389679, lng: 51.531605, cap: "Katara Towers" },
        { lat: 25.360074, lng: 51.525174, cap: "Katara Cultural Village" },
        { lat: 25.369269, lng: 51.551325, cap: "Pearl Qatar" },
      ],
      zoom: 11,
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
    },
    images: [112, 113, 114],
    position: {
      points: [
        { lat: 48.2082, lng: 16.3738, cap: "VIE", typ: "l" },
        { lat: 48.184741, lng: 16.378619, cap: "Wien Hauptbahnhof", typ: "l" },
      ],
      zoom: 11,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "-7deg" },
    },
  },
];
