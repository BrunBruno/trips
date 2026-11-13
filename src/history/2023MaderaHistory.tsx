import Madeira from "../svg/flags/mdr";
import type { MyHistory } from "../types";

export const MADEIRA_HISTORY: MyHistory[] = [
  //01 2608
  {
    //hid: 1,
    date: "26 sie. 2023",
    name: "Funchal",
    sleep: {
      name: "Jardins d'Ajuda",
      styles: { left: "unset", right: 0 },
    },
    trip: {
      to: "Funchal",
      type: "bus",
      styles: { top: "75%", rotate: "-3deg" },
    },
    // prettier-ignore
    images: [
      73, 72,
      2, 71,
      74,
    ],
    captions: {
      "2": "[KTW] Międzynarodowy Port Lotniczy Katowice",
      "71": "Jardins d'Ajuda",
      "74": "[FNC] Międzynarodowy Port Lotniczy Cristiano Ronaldo",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 32.697667, lng: -16.774107, cap: "FNC", typ: "l", imgs:[] },
        { lat: 32.636701, lng: -16.941952, cap: "Jardins d'Ajuda", typ: "n", imgs:[] },
      ],
      zoom: 10,
    },
    // prettier-ignore
    position2: {
      points: [
        { lat: 32.697667, lng: -16.774107, cap: "FNC", typ: "l", imgs:[] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[] },
      ],
      zoom: 2,
    },
    svg: {
      item: <Madeira />,
      styles: { rotate: "7deg" },
    },
  },

  //02 2708
  {
    //hid: 1,
    date: "27 sie. 2023",
    name: "Północ Madery",
    food: {
      name: "Smart Fortwo",
      img: 79,
      styles: { rotate: "-5deg", bottom: "9rem", left: "-4rem" },
    },
    trip: {
      to: "North",
      type: "car",
      styles: { left: "-3rem", right: "unset", top: "1rem", rotate: "-3deg" },
    },
    // prettier-ignore
    images: [
      75,76,5,78,8,
      12, 13,77,6,11,
      7, 3, 4, 10,9,
    ],
    captions: {
      "3": "Miradouro Água d'Alto",
      "4": "Piscinas Naturais do Aquário",
      "6": "Porto Moniz",
      "7": "Piscinas Naturais do Porto Moniz",
      "9": "Praia do Porto do Seixal",
      "10": "Floresta do Fanal",
      "11": "Raça Madeirense",
      "12": "Ribeira da Janela",
      "13": "São Vicente",
      "77": "Miradouro do Guindaste",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 32.867366, lng: -17.166557, cap: "Porto Moniz", imgs:[4,5,6,7] },
        { lat: 32.822931, lng: -17.103589, cap: "Praia do Porto do Seixal", imgs:[8,9,75] },
        { lat: 32.810011, lng: -17.144285, cap: "Floresta do Fanal", imgs:[10,11,12,76] },
        { lat: 32.808559, lng: -17.049511, cap: "São Vicente", imgs:[3, 13] },
        { lat: 32.794304, lng: -16.849346, cap: "Miradouro do Guindaste", imgs:[78,77] },
      ],
      zoom: 10,
    },
  },

  //03 2808
  {
    //hid: 1,
    date: "28 sie. 2023",
    name: "Południe Madery",
    food: {
      name: "Espada",
      img: 80,
      styles: {
        left: "unset",
        right: "-4rem",
        bottom: "7rem",
        rotate: "3deg",
      },
    },
    trip: {
      to: "South",
      type: "car",
      styles: { top: "1rem", rotate: "3deg" },
    },
    // prettier-ignore
    images: [
      15,16,23,83,21,
      19,22,81,82,17,
      25,84,20,24,18,
    ],
    captions: {
      "84": "Cascata dos Anjos",
      "18": "Câmara de Lobos",
      "20": "Cabo Girão",
      "24": "Ponta do Pargo",
      "25": "Miradouro do Pico do Facho",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 32.650391, lng: -16.916667, cap: "Funchal", imgs:[15] },
        { lat: 32.648409, lng: -16.975215, cap: "Câmara de Lobos", imgs:[16, 17, 18, 19,81,82] },
        { lat: 32.655524, lng: -17.004255, cap: "Cabo Girão", imgs:[20,83] },
        { lat: 32.814028, lng: -17.262596, cap: "Ponta do Pargo", imgs:[22, 23, 24] },
        { lat: 32.723851, lng: -16.758707, cap: "Miradouro do Pico do Facho", imgs:[25] },
        { lat: 32.720641, lng: -17.178301, cap: "Praia da Calheta", imgs:[] },
        { lat: 32.692013, lng: -17.115075, cap: "Cascata dos Anjos", imgs:[21,84] },
      ],
      zoom: 9.5,
    },
  },

  //04 2908
  {
    //hid: 1,
    date: "29 sie. 2023",
    name: "Pico Ruivo",
    food: {
      name: "Espada com Banana",
      img: 88,
      styles: { left: "-4rem", bottom: "9rem", rotate: "7deg" },
    },
    trip: {
      to: "Pico do Arieiro",
      type: "car",
      styles: { top: "100%", rotate: "3deg" },
    },
    //prettier-ignore
    images: [
      85, 33, 87, 27, 86,
      28, 36, 30, 37, 29,
      32, 26, 34, 35, 31,
    ],
    captions: {
      "31": "Pico Ruivo",
      "26": "Pico do Arieiro",
      "35": "Cristo Rei",
      "32": "Arieiro ➤ Ruivo",
      "34": " Doca do Cavacas",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 32.758871, lng: -16.942994, cap: "Pico Ruivo", imgs:[86,28,30,29,31] },
        { lat: 32.735754, lng: -16.929039, cap: "Pico do Arieiro", imgs:[85,87,27,32,26] },
        { lat: 32.635597, lng: -16.947841, cap: " Doca do Cavacas", imgs:[34] },
        { lat: 32.638663, lng: -16.850736, cap: "Cristo Rei", imgs:[36,37,35] },
      ],
      zoom: 11,
    },
  },

  //05 3008
  {
    //hid: 1,
    date: "30 sie. 2023",
    name: "Funchal",
    food: {
      name: "Monstera Dziurawa",
      img: 94,
      styles: {
        left: "unset",
        right: "-4rem",
        bottom: "4rem",
        rotate: "8deg",
      },
    },
    //prettier-ignore
    images: [
      95, 41, 43, 90,  
      92, 91, 38, 93,
      39, 42, 40
    ],
    captions: {
      "38": "Jardins d'Ajuda",
      "39": "Museu CR7",
      "40": "Praça do Povo",
      "42": "Avenida do Mar",
      "91": "Mercado dos Lavradores",
      "92": "Willa Cristiano Ronaldo",
      "93": "Fórum Madeira",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 32.636701, lng: -16.941952, cap: "Jardins d'Ajuda", typ: "n", imgs:[38] },
        { lat: 32.635912, lng: -16.942954, cap: "Fórum Madeira", imgs:[93] },
        { lat: 32.644055, lng: -16.914069, cap: "Museu CR7", imgs:[95,39] },
        { lat: 32.646577, lng: -16.908073, cap: "Avenida do Mar", imgs:[41,43,90,92,42,40] },
        { lat: 32.648868, lng: -16.904092, cap: "Mercado dos Lavradores", imgs:[91] },
      ],
      zoom: 13,
    },
  },

  //06 3108
  {
    date: "31 sie. 2023",
    name: "Porto Santo",
    trip: {
      to: "Porto Santo",
      type: "ferry",
      styles: { rotate: "-2deg" },
    },
    // prettier-ignore
    images: [
      44, 55, 46, 47, 49,
      48, 98, 50, 96, 52,
      99, 53, 54, 51, 97,
    ],
    captions: {
      "99": "Vila Baleira",
      "54": "Porto de Porto Santo",
      "97": "Ponta da Calheta",
      "44": "Marina do Funchal",
      "51": "Miradouro do Furado Norte",
      "50": "Porto Santo Golfe",
      "53": "Camacha",
      "49": "Jaszczurka Maderska",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 33.024826, lng: -16.379973, cap: "Ponta da Calheta", imgs:[97,49,48,96] },
        { lat: 33.060331, lng: -16.310449, cap: "Porto de Porto Santo", typ:"l", imgs:[55,46,47,54] },
        { lat: 33.084574, lng: -16.300598, cap: "Pico Branco", imgs:[] },
        { lat: 33.059425, lng: -16.335153, cap: "Vila Baleira", imgs:[99,] },
        { lat: 33.086645, lng: -16.338182, cap: "Camacha", imgs:[50,52,53] },
        { lat: 33.041373, lng: -16.395747, cap: "Miradouro do Furado Norte", imgs:[51,98] },
      ],
      zoom: 11,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 32.645764, lng: -16.910134, cap: "Marina do Funchal",typ:"l", imgs:[44] },
        { lat: 33.060331, lng: -16.310449, cap: "Porto de Porto Santo", typ:"l", imgs:[55, 46, 47, 99,
      48, 49, 50, 51, 98,
      52, 53, 54, 96, 97,] },
      ],
      zoom: 7,
    },
  },

  //07 0109
  {
    //hid: 1,
    date: "01 wrz. 2023",
    name: "Przylądek św. Wawrzyńca",
    trip: {
      to: "Ponta de São Lourenço",
      type: "bus",
      styles: { rotate: "2deg" },
    },
    //prettier-ignore
    images: [
      56, 101, 60, 61,
      58, 59, 62, 57,
      100, 64, 63,
    ],
    captions: {
      "100": "CAM Funchal",
      "64": "Ponta de São Lourenço",
      "63": "Miradouro Ponta do Furado",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 32.743361, lng: -16.701101, cap: "Ponta de São Lourenço", imgs:[101,60,61,58,62,57,64] },
        { lat: 32.739046, lng: -16.681075, cap: "Miradouro Ponta do Furado", imgs:[59,63,62] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 32.743361, lng: -16.701101, cap: "Ponta de São Lourenço", imgs:[101,60,61,58,59,62,57,64,63] },
        { lat: 32.647658, lng: -16.915792, cap: "CAM Funchal", typ:"l", imgs:[100,56] },
      ],
      zoom: 9,
    },
  },

  //08 0209
  {
    //hid: 1,
    date: "02 wrz. 2023",
    name: "Funchal",
    transit: {
      from: "Madera",
      to: "Katowice",
      type: "plane",
    },
    trip: {
      to: "[FNC]",
      type: "bus",
      styles: { top: "75%", rotate: "3deg" },
    },
    //prettier-ignore
    images: [
      69, 67, 68, 104,
      66, 103, 65, 102,
      70,
    ],
    captions: {
      "66": "Doca do Cavacas",
      "70": "[FNC] Międzynarodowy Port Lotniczy Cristiano Ronaldo",
      "65": "Fórum Madeira",
      "102": "Praia Formosa",
      "103": "Lido Promenade",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 32.638544, lng: -16.949569, cap: "Praia Formosa", imgs:[102] },
        { lat: 32.635522, lng: -16.947829, cap: "Doca do Cavacas", imgs:[67,66] },
        { lat: 32.635912, lng: -16.942954, cap: "Fórum Madeira", imgs:[69,65] },
        { lat: 32.633903, lng: -16.943611, cap: "Lido Promenade", imgs:[68,104,103] },
        { lat: 32.636701, lng: -16.941952, cap: "Jardins d'Ajuda", typ: "n", imgs:[] },
      ],
      zoom: 15,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 32.697667, lng: -16.774107, cap: "FNC", typ: "l", imgs:[70] },
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[] },
      ],
      zoom: 2,
    },
  },
];
