import Beach from "../svg/icons/beach";
import Dodo from "../svg/icons/dodo";
import SeaTurtle from "../svg/icons/sea-turtle";
import TropicalFish from "../svg/icons/tropical-fish";
import SaudiArabia from "../svg/flags/sau";
import type { MyHistory } from "../types";
import Austria from "../svg/flags/aut";
import Mauritius from "../svg/flags/mus";
import Spain from "../svg/flags/spa";
import Crab from "../svg/icons/crab";
import Monkey from "../svg/icons/monkey";
import Tortoise from "../svg/icons/tortoise";
import Gecko from "../svg/icons/gecko";
import Bat from "../svg/icons/bat";

export const MAURITIUS_HISTORY: MyHistory[] = [
  //01 2609
  {
    date: "26 wrz. 2026",
    name: "Madrid",
    sleep: {
      name: "Min Hostel Capsules",
      styles: {},
    },
    // prettier-ignore
    images: [
      79, 98, 78, 100,
      74, 76, 99, 77,
      75
    ],
    captions: {
      "74": "Pomnik Filipa IV",
      "75": "Katedra Almudena",
      "76": "Pałac Królewski w Madrycie",
      "77": "Punkt widokowy przy Pałacu Królewskim",
      "78": "Plaza de la Villa",
      "79": "Pomnik Alfonsa XII",
      "98": "Port lotniczy Adolfo Suárez Madryt-Barajas",
      "99": "Metro de Madrid",
      "100": "Plaza Mayor",
    },
    position: {
      points: [
        { lat: 40.43732, lng: -3.642415, cap: "Min Hostel Capsules", typ: "n" },
        { lat: 40.492736, lng: -3.563839, cap: "MAD", typ: "l" },
        { lat: 40.434477, lng: -3.71902, cap: "Moncloa" },
        { lat: 40.415389, lng: -3.68353, cap: "Retiro" },
        { lat: 40.418815, lng: -3.703784, cap: "Centro" },
      ],
      zoom: 11,
    },
    svg: {
      item: <Spain />,
      styles: { rotate: "7deg", left: "unset", right: 0 },
    },
  },

  //02 2709
  {
    date: "27 wrz. 2026",
    name: "Madrid",
    transit: {
      from: "Madryt",
      to: "Mauritius",
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
    position: {
      points: [
        { lat: 50.08043, lng: 19.788938, cap: "KRK", typ: "l" },
        { lat: 40.492736, lng: -3.563839, cap: "MAD", typ: "l" },
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l" },
        { lat: -20.43071, lng: 57.679108, cap: "", typ: "x" },
      ],
      zoom: 2,
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
      "1": "Sir Seewoosagur Ramgoolam International Airport",
      "3": "Plaża Flic en Flac",
      "27": "Trois Mamelles",
      "28": "The Paramount",
      "105": "Suzuki Espresso",
    },
    position: {
      points: [
        { lat: -20.27741, lng: 57.3751, cap: "The Paramount", typ: "n" },
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l" },
      ],
      zoom: 9,
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
    position: {
      points: [
        { lat: -20.452125, lng: 57.324657, cap: "Le Morne" },
        { lat: -20.483012, lng: 57.353716, cap: "La Prairie Beach" },
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
    },
    position: {
      points: [
        { lat: -20.418185, lng: 57.492077, cap: "Grand Bassin" },
        { lat: -20.425017, lng: 57.391269, cap: "Chamarel" },
        { lat: -20.485279, lng: 57.371538, cap: "Maconde" },
        { lat: -20.503967, lng: 57.412576, cap: "Bel Ombre" },
        { lat: -20.52442, lng: 57.532203, cap: "Gris Gris" },
        { lat: -20.500738, lng: 57.516257, cap: "Rochester Falls" },
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
    position: {
      points: [
        { lat: -20.418198, lng: 57.430019, cap: "Black River Peak" },
        { lat: -20.372205, lng: 57.359588, cap: "Le Morne Viewpoint" },
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
    position: {
      points: [
        { lat: -20.27234, lng: 57.803991, cap: "Île aux Cerfs" },
        { lat: -20.483012, lng: 57.353716, cap: "La Prairie Beach" },
      ],
      zoom: 9,
    },
    svg: {
      item: <TropicalFish />,
      styles: { left: "unset", right: "2rem", bottom: "22rem" },
    },
  },

  //08 0310
  {
    date: "03 paź. 2026",
    name: "Le Pouce",
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
    position: {
      points: [
        { lat: -20.194234, lng: 57.522179, cap: "Le Pouce" },
        { lat: -20.161204, lng: 57.50141, cap: "Port Louis" },
        { lat: -20.009158, lng: 57.581453, cap: "Grand Baie" },
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
    sleep: {
      name: "Grand Baie View Appart",
      styles: {},
    },
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
    position: {
      points: [
        { lat: -20.007292, lng: 57.578545, cap: "La Cuvette" },
        { lat: -19.995804, lng: 57.587714, cap: "Pereybere" },
        {
          lat: -20.01511,
          lng: 57.583435,
          cap: "Grand Baie View Appart",
          typ: "n",
        },
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
    position: {
      points: [
        { lat: -19.986337, lng: 57.622253, cap: "Cap Malheureux" },
        { lat: -19.941948, lng: 57.619791, cap: "Gunner's Quoin" },
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
    position: {
      points: [{ lat: -20.104414, lng: 57.580338, cap: "Pamplemousses" }],
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
    position: {
      points: [
        { lat: -20.036961, lng: 57.548335, cap: "Trou-aux-Biches" },
        { lat: -20.014158, lng: 57.581453, cap: "Grand Baie" },
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
    sleep: {
      name: "Hotel Orient Guesthouse Auberge",
      styles: {},
    },
    transit: {
      from: "Mauritius",
      to: "Dżudda",
    },
    //prettier-ignore
    images: [
      88, 73,
      71, 72,
      87,
    ],
    captions: {
      "71": "Lion Mountain",
      "72": "Pointe Canon",
      "73": "Île aux Aigrettes",
      "87": "Mahébourg Waterfront",
      "88": "Bo'Valon Mall",
    },
    position: {
      points: [
        {
          lat: -20.411451,
          lng: 57.710688,
          cap: "Hotel Orient Guesthouse Auberge",
          typ: "n",
        },
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l" },
      ],
      zoom: 11,
    },
  },

  //14 0910
  {
    date: "09 paź. 2026",
    name: "Dżudda",
    //prettier-ignore

    transit: {
      from: "Dżudda",
      to: "Wiedeń",
    },
    images: [91, 89, 92],
    captions: {
      "92": "King Abdulaziz International Airport",
    },
    position: {
      points: [
        { lat: -20.43071, lng: 57.679108, cap: "MRU", typ: "l" },
        { lat: 21.68543, lng: 39.166107, cap: "JED", typ: "l" },
        { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l" },
      ],
      zoom: 2,
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
    },
    images: [96, 95],
    captions: {
      "95": "Schloss Belvedere",
      "96": "Wien Hauptbahnhof",
    },
    position: {
      points: [
        { lat: 48.118233, lng: 16.566228, cap: "VIE", typ: "l" },
        { lat: 48.192235, lng: 16.376597, cap: "Wien Hauptbahnhof", typ: "l" },
      ],
      zoom: 10,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "-7deg", left: "unset", right: 0 },
    },
  },
];
