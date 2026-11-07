import Beach from "../svg/icons/beach";
import Dodo from "../svg/icons/dodo";
import SeaTurtle from "../svg/icons/sea-turtle";
import TropicalFish from "../svg/icons/tropical-fish";
import SaudiArabia from "../svg/flags/sau";
import type { MyHistory, Position } from "../types";
import Austria from "../svg/flags/aut";
import Mauritius from "../svg/flags/mus";
import Spain from "../svg/flags/spa";
import Crab from "../svg/icons/crab";
import Monkey from "../svg/icons/monkey";
import Tortoise from "../svg/icons/tortoise";
import Gecko from "../svg/icons/gecko";
import Bat from "../svg/icons/bat";
import Ring from "../svg/icons/ring";

export const MAURITIUS_HISTORY: MyHistory[] = [
  //01 2609
  {
    date: "26 wrz. 2026",
    name: "Madrid",
    sleep: { name: "Min Hostel Capsules" },
    //prettier-ignore
    images: [
      79, 98, 78, 100,
      74, 76, 99, 77,
      75,
    ],
    captions: {
      "74": "Monument to Felipe IV",
      "75": "Catedral de la Almudena",
      "76": "Palacio Real de Madrid",
      "77": "Royal Palace's Ledge Viewpoint",
      "78": "Plaza de la Villa",
      "79": "Monumento a Alfonso XII",
      "98": "[MAD] Aeropuerto Adolfo Suárez Madrid-Barajas",
      "99": "Metro de Madrid",
      "100": "Plaza Mayor",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 40.418815, lng: -3.703784, cap: "Centro", imgs: [74, 75, 76, 77, 78, 100] },
        { lat: 40.415389, lng: -3.68353, cap: "Retiro", imgs: [79] },
        { lat: 40.43732, lng: -3.642415, cap: "Capsules", typ: "n", imgs: [99] },
        { lat: 40.492736, lng: -3.563839, cap: "MAD", typ: "l", imgs: [98] },
      ],
      zoom: 11,
    },
    svg: {
      item: <Spain />,
      styles: { rotate: "7deg", left: "unset", right: 0 },
    },
    // imgs: {
    //   items: ["palacio-real", "park-retiro"],
    // },
  },

  //02 2709
  {
    date: "27 wrz. 2026",
    name: "Madrid",
    transit: {
      from: "Madryt",
      to: "Mauritius",
      type: "plane",
    },
    // prettier-ignore
    images: [
      86, 85, 84, 80,
      82, 81, 102, 101,
      83
    ],
    captions: {
      "80": "Muzeum Aeronautyki i Astronautyki",
      "81": "Arco de Moncloa",
      "82": "Panorama Madrytu",
      "84": "Park del Oeste",
      "85": "Puerta de Alcalá",
      "86": "Park Retiro",
      "101": "Pałac Cybele",
      "102": "Latarnia Moncloa",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 40.418815, lng: -3.703784, cap: "Centro", imgs: [85,101] },
        { lat: 40.415389, lng: -3.68353, cap: "Retiro", imgs: [86] },
        { lat: 40.434477, lng: -3.71902, cap: "Moncloa", imgs: [84, 80, 82, 81, 102, 83] },
        { lat: 40.43732, lng: -3.642415, cap: "Capsules", typ: "n", imgs: [] },
      ],
      zoom: 12,
    },
  },

  //03 2809
  {
    date: "28 wrz. 2026",
    name: "Flic en Flac",
    sleep: {
      name: "The Paramount",
      styles: { left: "unset", right: "0" },
    },
    // prettier-ignore
    images: [
      104, 4, 5, 2,
      27, 105, 1, 28,
      3,
    ],
    captions: {
      "1": "[MRU] Sir Seewoosagur Ramgoolam International Airport",
      "3": "Plaża Flic en Flac",
      "27": "Trois Mamelles",
      "28": "The Paramount",
      "105": "Suzuki Espresso",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.27741, lng: 57.3751, cap: "Paramount", typ: "n", imgs: [2, 28, 105] },
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l", imgs: [1, 104] },
        { lat: -20.288799, lng: 57.363213, cap: "Flic en Flac", imgs: [3, 4, 5] },
        { lat: -20.304980, lng: 57.440604, cap: "Trois Mamelles", imgs: [27] },
      ],
      zoom: 10,
    },
    svg: {
      item: <Mauritius />,
      styles: { rotate: "7deg" },
    },
    svg2: {
      item: <Crab />,
      styles: {
        rotate: "-45deg",
        left: "unset",
        right: "0",
        bottom: "1rem",
        scale: 0.8,
      },
    },
  },

  //04 2909
  {
    date: "29 wrz. 2026",
    name: "Le Morne Brabant",
    // prettier-ignore
    images: [
      17, 9, 14, 109,
      11, 16, 113, 7,
      115, 8, 13, 12,
    ],
    captions: {
      "8": "Podwodny Wodospad",
      "12": "Plaża La Prairie",
      "13": "Plaża Le Morne",
      "115": "Le Morne Brabant",
    },
    // prettier-ignore
    position: {
      points: [
        // 
        { lat: -20.452125, lng: 57.324657, cap: "Le Morne", imgs: [8,9,109,7,115]},
        { lat: -20.483012, lng: 57.353716, cap: "La Prairie Beach", imgs: [12,11,16,113]},
        { lat: -20.451470, lng: 57.312739, cap: "Le Morne Beach", imgs: [14,13,17]},
      ],
      zoom: 12,
    },
    svg: {
      item: <SeaTurtle />,
      styles: { rotate: "45deg", left: "2rem", bottom: "20rem" },
    },
  },

  //05 3009
  {
    date: "30 wrz. 2026",
    name: "Black River Gorges\n National Park",
    // prettier-ignore
    images: [
      18, 129, 19, 26,
      117, 23, 24, 25,
      22, 21, 128, 20,
    ],
    captions: {
      "18": "Grand Bassin Temple",
      "19": "Alexandra Falls Viewpoint",
      "20": "Wodospad Chamarel",
      "21": "Seven Colored Earth Ground Zero",
      "22": "Żółw Olbrzymi z Aldabry",
      "23": "Maconde Viewpoint",
      "24": "Plaża Gris Gris",
      "25": "Roche Qui Pleure",
      "26": "Rochester Falls",
      "117": "Posąg Śiwy",
      "128": "Zatoka Baie du Cap",
      "129": "Plaża St. Felix",
      // prettier-ignore
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.418185, lng: 57.492077, cap: "Grand Bassin", imgs: [18, 117],},
        { lat: -20.425017, lng: 57.391269, cap: "Chamarel", imgs: [20, 21, 22], },
        { lat: -20.485279, lng: 57.371538, cap: "Maconde", imgs: [23, 128] },
        { lat: -20.503967, lng: 57.412576, cap: "Bel Ombre", imgs: [] },
        { lat: -20.524421, lng: 57.532203, cap: "Gris Gris", imgs: [24, 25] },
        { lat: -20.500738, lng: 57.516257, cap: "Rochester Falls", imgs: [26] },
        { lat: -20.432520, lng: 57.45694, cap: "Alexandra Falls", imgs: [19] },
        { lat: -20.509228, lng: 57.466005, cap: "St Felix Beach", imgs: [129] },
      ],
      zoom: 11,
    },
    svg: {
      item: <Monkey />,
      styles: { left: "unset", right: "0", bottom: "3rem" },
    },
  },

  //06 0110
  {
    date: "01 paź. 2026",
    name: "Black River Peak",
    // prettier-ignore
    images: [
      33, 32, 135,
      31, 35, 29,
      30,
    ],
    captions: {
      "29": "Gorges Viewpoint",
      "30": "Piton Saint Denis",
      "31": "Piton de la Petite Rivière Noire",
      "35": "Plaża z widokiem na Le Morne",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.418198, lng: 57.430019, cap: "Black River Peak", imgs: [29,30,31,32,33] }, 
        { lat: -20.372205, lng: 57.359588, cap: "Le Morne Viewpoint", imgs: [35,135] },
        { lat: -20.335959, lng: 57.373654, cap: "Tamarin", imgs: [] },
      ],
      zoom: 11,
    },
  },

  //07 0210
  {
    date: "02 paź. 2026",
    name: "Île aux Cerfs",
    transit: {
      from: "Flic en Flac",
      to: "Grand Baie",
      type: "car",
    },
    // prettier-ignore
    images: [
      38, 37, 36,
      39, 41, 136,
      40
    ],
    captions: {
      "39": "Île aux Cerfs",
      "40": "La Prairie Beach",
      "41": "Pointe Maurice",
      "136": "Ustnik Pawik",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.27234, lng: 57.803991, cap: "Île aux Cerfs", imgs: [39,41,136,36,37,38] },
        { lat: -20.483012, lng: 57.353716, cap: "La Prairie Beach", imgs: [40] },
      ],
      zoom: 9,
    },
    svg: {
      item: <TropicalFish />,
      styles: { left: "unset", right: "2rem", bottom: "22rem" },
    },
    svg2: {
      item: <Ring />,
      styles: { left: "1rem", bottom: "2rem", rotate: "30deg" },
    },
  },

  //08 0310
  {
    date: "03 paź. 2026",
    name: "Le Pouce",
    sleep: { name: "Grand Baie View Appart" },
    // prettier-ignore
    images: [
      140, 143, 45,
      43, 44, 46,
      42,
    ],
    captions: {
      "42": "Szczyt Pieter Both",
      "43": "Szczyt Le Pouce",
      "44": "Widok na Moka",
      "45": "China Town w Port Louis",
      "46": "Promenada Caudan Waterfront",
      "140": "Grand Baie View Appart",
      "143": "Central Market Port Louis",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.194234, lng: 57.522179, cap: "Le Pouce", imgs: [42, 43, 44] },
        { lat: -20.161204, lng: 57.50141, cap: "Port Louis", imgs: [45, 46, 143] },
        { lat: -20.01511, lng: 57.583435, cap: "Grand Baie", typ: "n", imgs: [140] },
      ],
      zoom: 10,
    },
    svg2: {
      item: <Bat />,
      styles: { left: "0rem", bottom: "20rem" },
    },
  },

  //09 0410
  {
    date: "04 paź. 2026",
    name: "Grand Baie",
    // prettier-ignore
    images: [
      47, 50, 52,
      145, 51, 49,
      53,
    ],
    captions: {
      "49": "Plaża La Cuvette",
      "51": "Plaża Pereybere",
      "53": "Plaża Grand Baie",
      "145": "Super U Grand Bay",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.007292, lng: 57.578545, cap: "La Cuvette", imgs: [49, 52] },
        { lat: -19.995804, lng: 57.587714, cap: "Pereybere", imgs: [51, 50] },
        { lat: -20.009158, lng: 57.581453, cap: "Grand Baie", imgs: [53, 145, 47] },
      ],
      zoom: 13,
    },
    svg: {
      item: <Dodo />,
      styles: {
        scale: 1.5,
        left: "unset",
        right: "-0.5rem",
        bottom: "-0.5rem",
        rotate: "5deg",
      },
    },
  },

  //10 0510
  {
    date: "05 paź. 2026",
    name: "Cap Malheureux",
    // prettier-ignore
    images: [
      58, 54,
      57, 56,
      55,
    ],
    captions: {
      "54": "Notre-Dame Auxiliatrice de Cap Malheureux",
      "55": "Gunner's Quoin",
      "56": "Temple Tamoul",
      "57": "Northernmost point of Mauritius",
      "58": "Bain Boeuf Beach",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -19.986337, lng: 57.622253, cap: "Cap Malheureux", imgs: [54, 56, 57] },
        { lat: -19.941948, lng: 57.619791, cap: "Gunner's Quoin", imgs: [55] },
        { lat: -19.986063, lng: 57.605575, cap: "Bain Boeuf Beach", imgs: [58] },
      ],
      zoom: 12,
    },
  },

  //11 0610
  {
    date: "06 paź. 2026",
    name: "Pamplemousses\n Botanical Garden",
    // prettier-ignore
    images: [
      59, 62, 61, 63,
      60, 66, 65, 64,
    ],
    captions: {
      "60": "Le Château de Mon Plaisir",
      "64": "Madagascar Day Gecko",
      "65": "Amazon Water Lily",
      "66": "Aldabra Giant Tortoise",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.104414, lng: 57.580338, cap: "Pamplemousses", imgs: [60, 64, 65, 66, 61, 62, 63] },
        { lat: -20.014158, lng: 57.581453, cap: "Grand Baie", imgs: [59] },
      ],
      zoom: 11,
    },
    svg: {
      item: <Tortoise />,
      styles: { left: "unset", right: "1rem", bottom: "0rem", scale: 1.2 },
    },
    svg2: {
      item: <Gecko />,
      styles: { left: "2rem", bottom: "18rem", rotate: "90deg" },
    },
  },

  //12 0710
  {
    date: "07 paź. 2026",
    name: "Trou-aux-Biches",
    transit: {
      from: "Grand Baie",
      to: "Mahébourg",
      type: "bus",
    },
    //prettier-ignore
    images: [
      70, 67,
      68, 69,
    ],
    captions: {
      "68": "Trou-aux-Biches Beach",
      "69": "Molo w Grand Baie",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: -20.036961, lng: 57.548335, cap: "Trou-aux-Biches", imgs: [68,67] },
        { lat: -20.014158, lng: 57.581453, cap: "Grand Baie", imgs: [69,70] },
      ],
      zoom: 12,
    },
    svg: {
      item: <Beach />,
      styles: { scale: 1.2 },
    },
  },

  //13 0810
  {
    date: "08 paź. 2026",
    name: "Mahébourg",
    sleep: { name: "Hotel Orient Guesthouse Auberge" },
    transit: {
      from: "Mauritius",
      to: "Dżudda",
      type: "plane",
    },
    //prettier-ignore
    images: [
      88, 73, 89,
      71, 155, 72,
      87
    ],
    captions: {
      "71": "Lion Mountain",
      "72": "Pointe Canon",
      "73": "Île aux Aigrettes",
      "87": "Mahébourg Waterfront",
      "88": "Bo'Valon Mall",
      "89": "[MRU] Sir Seewoosagur Ramgoolam International Airport",
      "155": "Hotel Orient Guesthouse Auberge",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: -20.411451, lng: 57.710688, cap: "Hotel Orient", typ: "n", imgs: [] },
        { lat: -20.404857, lng: 57.709703, cap: "Mahébourg Waterfront", imgs: [71, 72, 73, 87] },
        { lat: -20.423801, lng: 57.697728, cap: "Bo'Valon Mall", imgs: [88] },
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l", imgs: [89] },
      ],
      zoom: 12,
    },
  },

  //14 0910
  {
    date: "09 paź. 2026",
    name: "Dżudda",
    transit: {
      from: "Dżudda",
      to: "Wiedeń",
      type: "plane",
    },
    images: [91, 93, 138, 92],
    captions: {
      "92": "[JED] King Abdulaziz International Airport",
      "138": "Jeddah Tower",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 21.68543, lng: 39.166107, cap: "JED", typ: "l", imgs: [92,91,93] },
        { lat: 21.734147, lng: 39.082876, cap: "Jeddah Tower", imgs: [138] },
      ],
      zoom: 11,
    },
    svg: {
      item: <SaudiArabia />,
      styles: { rotate: "7deg" },
    },
  },

  //15 1010
  {
    date: "10 paź. 2026",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Katowice",
      type: "train",
    },
    images: [137, 96, 95],
    captions: {
      "95": "Schloss Belvedere",
      "96": "Wien Hauptbahnhof",
      "137": "[VIE] Flughafen Wien Schwechat",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 48.192235, lng: 16.376597, cap: "Wien Hauptbahnhof", typ: "l", imgs: [96] },
        { lat: 48.191554, lng: 16.380932, cap: "Schloss Belvedere", imgs: [95] },
        { lat: 48.118951, lng: 16.566126, cap: "VIE", typ: "l", imgs: [137] },
      ],
      zoom: 11,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "-7deg", left: "unset", right: 0 },
    },
  },
];

export const MAURITIUS_TRANSPORT: Position = {
  points: [
    { lat: 40.492736, lng: -3.563839, cap: "MAD", typ: "l" },
    { lat: 50.08043, lng: 19.788938, cap: "KRK", typ: "l" },
    { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l" },
    { lat: 21.68543, lng: 39.166107, cap: "JED", typ: "l" },
    { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l" },
  ],
  zoom: 1,
};

export const MAURITIUS_SLEEP: Position = {
  //prettier-ignore
  points: [
    { lat: -20.27741, lng: 57.3751, cap: "The Paramount", typ: "n" },
    { lat: -20.01511, lng: 57.583435, cap: "Grand Baie View Appart", typ: "n" },
    { lat: -20.411451, lng: 57.710688, cap: "Hotel Orient Guesthouse Auberge", typ: "n" },
  ],
  zoom: 9,
};

export const MAURITIUS_FOOD = {
  "146": "Churro",
  "147": "Fish & Chips",
  "148": "Samosa",
  "149": "Fired Noodles",
  "150": "Burger",
  "151": "Paróweczki",
  "152": "Mine Frite",
  "153": "Boiled Noodles",
  "154": "Grilled Seafood",
};
