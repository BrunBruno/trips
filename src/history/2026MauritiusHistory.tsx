import { Austria, Mauritius, Spain } from "../svg";
import Crab from "../svg/icons/crab";
import Plane from "../svg/icons/plane";
import Sailboat from "../svg/icons/sailboat";
import SeaTurtle from "../svg/icons/sea-turtle";
import TropicalFish from "../svg/icons/tropical-fish";
import SaudiArabia from "../svg/sau";
import type { MyHistory } from "../types";

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
      lat: 40.4168,
      lng: -3.7038,
      zoom: 5,
    },
    svg: <Spain />,
    svgStyles: { rotate: "7deg", left: "unset", right: 0 },
    //img: <img src="/trips/mauritius/icons/palacio-real.png" />,
    //imgStyles: { left: "22rem", top: "6rem" },
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
      "83": "",
      "84": "Park del Oeste",
      "85": "Puerta de Alcalá",
      "86": "Park Retiro",
      "101": "Pałac Cybele",
      "102": "Latarnia Moncloa",
    },
    position: {
      lat: 40.4168,
      lng: -3.7038,
      zoom: 11,
    },
    //img: <img src="/trips/mauritius/icons/park-retiro.png" />,
    //imgStyles: { left: "0rem", top: "2rem" },
  },
  //03 2809
  {
    date: "28 wrz. 2026",
    name: "Plaine Magnien",
    transit: {
      from: "Plaine Magnien",
      to: "Flic en Flac",
    },
    images: [103, 104, 1],
    captions: {
      "1": "Sir Seewoosagur Ramgoolam International Airport",
    },
    position: {
      lat: -20.43,
      lng: 57.6836,
      zoom: 10,
    },
    svg: <Mauritius />,
    svgStyles: { rotate: "7deg" },
    img: <Plane />,
    imgStyles: {
      rotate: "-135deg",
      left: "unset",
      right: "2rem",
      bottom: "6rem",
      filter: "drop-shadow(-6px -6px 2px #000)",
    },
  },
  //04 2809
  {
    date: "28 wrz. 2026",
    name: "Flic en Flac",
    sleep: {
      name: "The Paramount",
      styles: {},
    },
    // prettier-ignore
    images: [
      105, 4,
      5, 2, 
      3,
    ],
    captions: {
      "3": "Plaża Flic en Flac",
    },
    position: {
      lat: -20.28107,
      lng: 57.36464,
      zoom: 10,
    },
    svg: <Crab />,
    svgStyles: { rotate: "-45deg", left: "unset", right: "0" },
    //img: <img src="/trips/mauritius/icons/flic-en-flac-beach.png" />,
    //imgStyles: { left: "2rem", top: "6rem" },
  },
  //05 2909
  {
    date: "29 wrz. 2026",
    name: "Le Morne Brabant",
    // prettier-ignore
    images: [
      110, 107, 109, 7,
      6, 106, 111, 108,
      10, 9, 8,
    ],
    position: {
      lat: -20.4492,
      lng: 57.3168,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/underwater-waterfall.png" />,
    //imgStyles: { left: "0rem", top: "2rem", bottom: "unset" },
  },
  //06 2909
  {
    date: "29 wrz. 2026",
    name: "La Prairie Beach",
    // prettier-ignore
    images: [
      11, 114, 15,
      16, 112, 113,
      12,
    ],
    position: {
      lat: -20.483,
      lng: 57.3538,
      zoom: 11,
    },
    svg: <SeaTurtle />,
    svgStyles: { rotate: "45deg", left: "2rem", bottom: "18rem" },
    //img: <img src="/trips/mauritius/icons/le-morne.png" />,
    //imgStyles: { left: "-2rem", bottom: "2rem" },
  },
  //07 2909
  {
    date: "29 wrz. 2026",
    name: "Le Morne Beach",
    // prettier-ignore
    images: [
      14, 115,
      17, 116,
      13,
    ],
    position: {
      lat: -20.4515,
      lng: 57.3125,
      zoom: 11,
    },
    //img: <img src="/trips/mauritius/icons/le-morne-beach.png" />,
    //imgStyles: { left: "2rem", bottom: "16rem" },
  },
  //08 3009
  {
    date: "30 wrz. 2026",
    name: "Black River Gorges\n National Park",
    // prettier-ignore
    images: [
      121, 118, 119, 120,
      18, 122, 117, 123,
      19
    ],
    captions: {
      "18": "Grand Bassin Temple",
      "19": "Alexandra Falls Viewpoint",
      "117": "Posąg Śiwy",
      "122": "Makaki Krabożerne",
      "123": "Gorges Viewpoint",
    },
    position: {
      lat: -20.4085,
      lng: 57.4381,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/grand-bassin-temple.png" />,
    //imgStyles: { top: "6rem", bottom: "unset", left: "0rem" },
  },
  //09 3009
  {
    date: "30 wrz. 2026",
    name: "Chamarel Geopark",
    // prettier-ignore
    images: [
      127, 126, 124,
      21, 125, 22,
      20,
    ],
    captions: {
      "20": "Chamarel Waterfall",
      "21": "Seven Colored Earth Ground Zero",
      "22": "Żółw Olbrzymi z Aldabry",
      "125": "Chamarel Waterfall Viewpoint",
    },
    position: {
      lat: -20.4399,
      lng: 57.3731,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/chamarel-waterfall.png" />,
    //imgStyles: { top: "6rem", bottom: "unset", left: "0rem" },
  },
  //10 3009
  {
    date: "30 wrz. 2026",
    name: "Południe Mauritiusa",
    // prettier-ignore
    images: [
      26, 130, 25,
      24, 129, 23,
      128,
    ],
    captions: {
      "23": "Punkt widokowy Maconde",
      "24": "Plaża Gris Gris",
      "25": "Roche Qui Pleure",
      "26": "Wodospad Rochester",
      "129": "St Felix Beach",
      "130": "Bel Ombre",
    },
    position: {
      lat: -20.5246,
      lng: 57.5306,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/maconde.png" />,
    //imgStyles: { bottom: "8rem", left: "-2rem" },
  },
  //11 3009
  {
    date: "30 wrz. 2026",
    name: "Flic en Flac",
    images: [28, 131, 27],
    captions: {
      "27": "Trois Mamelles",
    },
    position: {
      lat: -20.2784,
      lng: 57.3737,
      zoom: 10,
    },
  },
  //12 0110
  {
    date: "01 paź. 2026",
    name: "Black River Peak",
    // prettier-ignore
    images: [
      132, 33, 133,
      32, 29, 31,
      30,
    ],
    captions: {
      "30": "Piton Saint Denis",
    },
    position: {
      lat: -20.40473,
      lng: 57.40932,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/black-river-peak.png" />,
    //imgStyles: { bottom: "10rem", left: "-1rem" },
  },
  //13 0110
  {
    date: "01 paź. 2026",
    name: "Tamarin",
    // prettier-ignore
    images: [
      135, 34,
      134, 35,
    ],
    captions: {
      "35": "Plaża z widokiem na Le Morne",
      "134": "Cascavelle Shopping Mall",
    },
    position: {
      lat: -20.3375,
      lng: 57.3747,
      zoom: 10,
    },
  },
  //14 0210
  {
    date: "02 paź. 2026",
    name: "Île aux Cerfs",
    // prettier-ignore
    images: [
      41, 37, 36,
      39, 38, 136
    ],
    position: {
      lat: -20.2697,
      lng: 57.8031,
      zoom: 10,
    },
    svg: <TropicalFish />,
    svgStyles: { left: "unset", right: "4rem", bottom: "22rem" },
    //img: <img src="/trips/mauritius/icons/ile-aux-cerfs.png" />,
    //imgStyles: { left: "unset", right: "0rem", bottom: "6rem" },
  },
  //15 0210
  {
    date: "02 paź. 2026",
    name: "Plaża La Prairie",
    transit: {
      from: "Flic en Flac",
      to: "Grand Baie",
    },
    images: [137, 40],
    position: {
      lat: -20.483,
      lng: 57.3538,
      zoom: 10,
    },
  },
  //16 0310
  {
    date: "03 paź. 2026",
    name: "Le Pouce",
    // prettier-ignore
    images: [
      138, 139,
      44, 43,
      42,
    ],
    captions: {
      "42": "Szczyt Pieter Both",
      "43": "Szczyt Le Pouce",
      "44": "Moka",
    },
    position: {
      lat: -20.1935,
      lng: 57.5224,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/pieter-both.png" />,
    //imgStyles: { left: "2rem", bottom: "18rem" },
  },
  //17 0310
  {
    date: "03 paź. 2026",
    name: "Port Louis",
    images: [142, 143, 46, 45],
    captions: {
      "45": "China Town w Port Louis",
      "46": "Promenada Caudan Waterfront",
    },
    position: {
      lat: -20.1613,
      lng: 57.5002,
      zoom: 10,
    },
  },
  //18 0310
  {
    date: "03 paź. 2026",
    name: "Grand Baie",
    sleep: {
      name: "Grand Baie View Appart",
      styles: {},
    },
    images: [141, 140],
    position: {
      lat: -20.0081,
      lng: 57.5802,
      zoom: 10,
    },
    svg: <Sailboat />,
    svgStyles: { left: "2rem", bottom: "unset", top: "6rem", rotate: "-15deg" },
  },
  //19
  {
    date: "04 paź. 2026",
    name: "Grand Baie",
    // prettier-ignore
    images: [
      47, 50, 52, 144,
      145, 51, 49, 53,
    ],
    captions: {
      "49": "Plaża La Cuvette",
      "51": "Plaża Pereybere",
      "53": "Plaża Grand Baie",
      "145": "Super U Grand Bay",
    },
    position: {
      lat: -20.0081,
      lng: 57.5802,
      zoom: 10,
    },
    svg: (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M63.01 99.87s-3.81 9.69-5.89 13.34c-1.64 2.88-8.27 3.66-12.32 4.7c-3.52.9-8.08.88-8.52 2.86c-.44 1.99 1.06 3.04 4.62 3.17c3.57.13 29.37 0 31.18 0c1.81 0 3.12-2.31-.6-4.86c-3.27-2.24-4.53-2.43-3.21-5.33c1.32-2.91 7.45-12.4 7.45-12.4l-12.71-1.48z"
          fill="#e8a631"
        ></path>
        <path
          d="M32.6 20.99s2.14 2.89 1.94 5.53c-.13 1.7 0 4.31-8.22 7.7c-9.96 4.11-14.95 8.54-14.88 16.34c.1 10.95 6.68 16.59 9.6 18.77s1.45 8.31 8.92 15.56c10.7 10.39 16.65 9.05 22.19 11.52c2.09.93 2.36.98 4.89 4.52c1.95 2.73 6.24 7.08 12.11 7.08c7.55 0 8.7-6.36 11.65-7.74s24.08-3.17 26.48-20.66c1.88-13.7-13.48-35.13-38.45-40.65c-11.21-2.48-18.35.69-22.16 1.64c-.92.23-3.19 1.16-3.19 1.16c-.71-1.85 2.54-3.61 4.87-5.73c2.68-2.44 5.72-5.08 7.19-7.69C62.97 15.07 51.94.93 38.7 4.59c-4.72 1.3-6.1 16.4-6.1 16.4z"
          fill="#78a3ad"
        ></path>
        <path
          d="M91.63 50.13s-1.61-6.25 3.05-9.16c3.37-2.12 7.08-1.82 9.48.63c1.27-1.09 2.63-2.18 4.25-2.59c4.57-1.18 9.42 0 11.71 4.32c3.11 5.86.39 8.93-3.35 12.49c0 0 4.51 2.03 4.68 9.28c.15 6.42-2.22 13.06-11.37 15.65c-3.56 1.01-13.92 1.72-17.87-5.73c-1.9-3.59-.26-5.72.55-6.74c2.75-3.47 7.14-1.68 7.14-1.68c.38-10.28-8.27-16.47-8.27-16.47z"
          fill="#e0e0e0"
        ></path>
        <path
          d="M113.36 66.39c0-6.63-6.72-6.58-6.72-6.58s5.09 1.71 2.54 6.59c-1.36 2.61-5.44 1.77-7.4-.25c-1.05-1.08-2.33-4.25-2.33-4.25s.45 2.85.45 4.67c0 0-4.39-1.8-7.14 1.68c-.14.17-.3.39-.47.63c3.33-3.11 6.72-.56 8.6 1.59c2.33 2.67 5.22 2.78 7.37 2.31c2.51-.55 5.1-2.44 5.1-6.39z"
          fill="#bdbdbd"
        ></path>
        <path
          d="M117.23 55.83c7.68-4.76 2.9-12.52 2.9-12.52s1.36 5.72-2.72 8.09c-2.36 1.37-6.23 1.15-6.95-2.82c-.46-2.54 2.44-3.71 2.44-3.71s-2.2-.56-3.98.86c-2.12 1.69-2.6 4.73-1.26 7.09c2 3.54 6.31 4.65 9.57 3.01z"
          fill="#bdbdbd"
        ></path>
        <path
          d="M72.8 79.56c1.49-2.98 4.74-7.62 1.55-14.8c-.54-1.22-1.6-1.58-1.65-.36c-.05 1.22.72 3.91.72 5.54c0 1.44.13 3.19-.79 4.34c-.25.31-2.66-.48-5.74-5.38c-.22-.36-.92-1.46-1.48-1.02c-.11.08-.61.93.54 3.64c1.42 3.34 5.32 4.81 3.88 10.13c-.17.63-3.86-.93-6.76-5.32c-.63-.96-1.12-1.68-1.83-1.52c-.72.15-.13 2.16.31 3.2c1.29 3.07 3.16 4.49 5.03 5.61c3.86 2.3 4.46 4.56 4.35 4.93c-.11.37-5.09 2.09-10.15-2.31c-6.6-5.74-6.23-14.97-6.39-17.6c-.21-3.59.04-6.54-2.86-9.37c-1.56-1.52-3.95-1.49-4.6-1.34c-.29.07-.73.42-.73.87c0 .31.21.78.85.97c2.97.9 4.23 2.13 4.25 9.05c.07 19.26 11.09 22.96 16.79 23.19c3.52.14 6.4-1.56 6.59-2.31c.19-.74-.98-2.06-1.53-3.58c-1.61-4.32-.53-6.22-.35-6.56z"
          fill="#546e7a"
        ></path>
        <path
          d="M20.71 7.08c4.35 1.63 7.76 2.47 10.67 1.75c2.51-.63 5.8-5.37 8.52-3.38c.87.63 1.61 1.42 2.2 2.32c1.82 2.77 2.68 5.46 2.39 9.51c-.09 1.27-1.73 9.82-7.39 10.24c-2.04.15-3.98-.89-5.49-2.27s-2.83-2.7-5.41-4.29c-3.55-2.19-6.91-2.5-10.82-3.96l5.33-9.92z"
          fill="#e0e0e0"
        ></path>
        <path
          d="M15.33 5.39c1.9-.57 4.99-.23 7.12 2.14c5.32 5.95-.39 11.32-3.5 11.45c-4.17.18-4.66-1.02-7-1.79c-1.84-.6-3.15.3-4.43 1.05c-.67.39-1.55-.2-1.35-.95c2.21-8.02 5.37-10.77 9.16-11.9z"
          fill="#e8a631"
        ></path>
        <ellipse
          transform="rotate(-53.991 36.994 13.725)"
          cx="36.99"
          cy="13.73"
          rx="2.65"
          ry="2.01"
          fill="#212121"
        ></ellipse>
        <path
          d="M31.2 17.98c-1.71-.63-8.9-2.44-14.03-2.74c-4.5-.26-7.47 1.83-7.6 1.88c-.15.06-.27.15-.37.25c.76-.29 1.6-.43 2.62-.21c1.19-.36 2.98-.73 5.16-.58c5.16.35 15.75 3.46 15.86 3.49c.08.02 1.71.66 1.6.1c.01.01-.01-1-3.24-2.19z"
          fill="#424242"
        ></path>
      </svg>
    ),
    svgStyles: {
      scale: 1.5,
      left: "unset",
      right: "-0.5rem",
      bottom: "-0.5rem",
      rotate: "5deg",
    },
  },
  //10
  {
    date: "05 paź. 2026",
    name: "Cap Malheureux",
    // prettier-ignore
    images: [
      58, 55,
      57, 56,
      54,
    ],
    captions: {
      "54": "Kościół Notre-Dame Auxiliatrice",
      "55": "Wyspa Coin de Mire",
      "56": "Świątynia Tamilska",
      "57": "Najdalej na północ wysunięty punkt Mauritiusa",
      "58": "Plaża Bain Boeuf",
    },
    position: {
      lat: -19.9842,
      lng: 57.6147,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/gunners-quoin.png" />,
    //imgStyles: { left: "6rem", bottom: "22rem" },
  },
  //11
  {
    date: "06 paź. 2026",
    name: "Pamplemousses\n Botanical Garden",
    // prettier-ignore
    images: [
      59, 62, 61, 63,
      60, 66, 65, 64,
    ],
    captions: {
      "60": "Pałac Mon Plaisir", // Le Château de Mon Plaisir
      "64": "Felsuma Madagaskarska", // Madagascar Day Gecko
      "65": "Wiktoria Królewska",
      "66": "Żółw Olbrzymi z Aldabry",
    },
    position: {
      lat: -20.1056,
      lng: 57.5786,
      zoom: 10,
    },
    svg: <img src="/trips/icons/giant-tortoise.png" />,
    svgStyles: { left: "unset", right: 0 },
  },
  //12
  {
    date: "07 paź. 2026",
    name: "Trou-aux-Biches",
    transit: {
      from: "Grand Baie",
      to: "Mahébourg",
    },
    images: [70, 67, 69, 68],
    captions: {
      "68": "Plaża Trou-aux-Biches",
      "69": "Molo w Grand Baie",
    },
    position: {
      lat: -20.0369,
      lng: 57.5452,
      zoom: 10,
    },
    svg: (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M17.71 113.37c-3.88-2.29-9.05-6.55-8.9-13.71c.13-6.08 8.73-15.75 30.78-19.45c22.05-3.7 34.22-1.94 44.1-.88c9.88 1.06 16.05 4.23 16.05 4.23l-9 18.17l-73.03 11.64z"
          fill="#04c1ea"
        ></path>
        <path
          d="M56.82 96.76l-20.27 5.38l-16.24 7.17s-2.02 4.26-1.01 5.38s15.91 9.64 42.33 9.74c29.24.11 44.79-7.5 50.17-11.42s-10.64-26.43-10.64-26.43l-13.37-5.5l-15.19 1.47l-8.96 4.48l-6.82 9.73z"
          fill="#f5c876"
        ></path>
        <path
          d="M70.01 94.93l22.65-1.2s-2.96-5.68-4.05-8.23c-1.24-2.9-1.47-4.57-1.47-4.57s2.66-.74 7.2.41s20.68 6.33 24.63 16.31c3.44 8.7-7.24 15.43-7.24 15.43s-7.2-4.91-9.89-7.48c-4.21-4.02-6.49-7.39-6.49-7.39l-25.58.9l-1.52-1.01l1.76-3.17z"
          fill="#f2a159"
        ></path>
        <path
          d="M21.33 98.55c-2.86 2.86.45 6.38.45 6.38s-6.49 1.46-6.27 5.26c.11 1.9 2.69 4.14 3.81 4.48c1.12.34.9-1.84 2.46-3.36c4.03-3.92 16.46-4.82 25.08-5.71s12.16-3.87 13.77-4.93c4.26-2.8 2.69-10.73 7.33-14.26c7.46-5.68 24.52-4.9 24.4-5.53c-.12-.63-14.14-3.78-26.99 1.42c-8.59 3.48-8.43 10.75-14.47 12.77s-24.98-1.11-29.57 3.48z"
          fill="#dcecf6"
        ></path>
        <path
          d="M33.39 101.25c-1.81.66-.1 2.57.74 3.05c1.68.96 3.95 1.97 3.95 1.97s-4.77 3.62-3.45 5.51c.97 1.39 9.95-2.06 9.95-2.06c.09 0 5.54 4.45 7.86 4.46c1.73.01.56-6.45.56-6.45s7.29-1.55 7.29-3.77c0-1.73-3.62-1.23-3.62-1.23s-21.47-2.14-23.28-1.48z"
          fill="#ee594a"
        ></path>
        <path
          d="M48.84 96.81c-1.89-.17-5.37 3.74-5.37 3.74s-10.25-.7-10.42 1.03s5.43 2.47 5.43 3.45s-4.52 4.6-4.11 5.75c.41 1.15 9.36-4.03 10.03-3.78s7.45 6.8 8.66 5.68c1.04-.96-.03-6.59-.03-6.59s6.91-1.64 6.82-2.88c-.08-1.23-8.71-2.14-8.71-2.14s-.49-4.1-2.3-4.26z"
          fill="#f79228"
        ></path>
        <path
          d="M61.61 17.83l-4.73-.34l4.82 35.26s4.83 39.73 5.16 42.11c.42 3.04 1.17 4.66 3.85 4.25c2.68-.41 2.41-3.04 2.24-5.09c-.17-2.05-4.46-39.33-4.46-39.33l-6.88-36.86z"
          fill="#4ea4b0"
        ></path>
        <path
          d="M57.74 11.84s-22.83 2.5-37.53 18.82C8.35 43.83 6.42 55.66 7.26 55.79c1.41.22 5-.98 8.92.65s6.2 5 7.51 5c1.31 0 6.09-3.26 12.84-2.28c6.74.98 11.31 5 12.73 5s7.07-4.24 15.77-4.68c7.94-.4 13.27 1.52 14.36 1.41c1.09-.11 3.21-6.84 11.59-9.34c8.38-2.5 11.15-.45 12.35-.45c1.2 0 1.85-5.87 7.83-8.16c5.98-2.28 8.27-1.31 9.57-1.52s-4.79-14.78-26.38-24.65c-17.85-8.15-36.61-4.93-36.61-4.93z"
          fill="#ee5948"
        ></path>
        <path
          d="M58.79 13.49s-14.86 4.45-25.2 20.66c-8.46 13.26-8.59 23.06-8.05 23.6c.54.54 5.55-1.96 11.64-1.41c6.09.54 11.23 5.07 11.53 4.03c.38-1.32.26-13.02 1.64-22.87c2.57-18.43 8.57-22.44 8.57-22.44s8 5.36 14.07 20.49c3.81 9.49 5.7 19.24 6.49 20.48c.35.55 3.64-4.49 10.48-6.71c6.33-2.06 11.86-.47 12.62-.9c.76-.44-6.34-15.84-18.19-24.7c-13.38-10.03-25.6-10.23-25.6-10.23z"
          fill="#fefefe"
        ></path>
        <path
          d="M57.44 3.91c-2.92.4-1.99 4.67-1.77 7.18c.1 1.11.34 5.37 3.27 5.14c2.44-.19 2.1-3.44 1.88-5.83c-.21-2.4-.31-6.91-3.38-6.49z"
          fill="#4ea4b0"
        ></path>
      </svg>
    ),
    svgStyles: { scale: 1.2 },
  },
  //13
  {
    date: "08 paź. 2026",
    name: "Mahébourg",
    images: [72, 73, 71],
    captions: {
      "71": "Lion Mountain",
      "72": "Pointe Canon",
      "73": "Île aux Aigrettes",
    },
    position: {
      lat: -20.4081,
      lng: 57.7,
      zoom: 10,
    },
    //img: <img src="/trips/mauritius/icons/lion-mountain.png" />,
    //imgStyles: { left: "unset", right: 0, bottom: "4rem" },
  },
  //14
  {
    date: "09 paź. 2026",
    name: "Mahébourg",
    transit: {
      from: "Mauritius",
      to: "Dżudda",
    },
    images: [88, 89, 87],
    captions: {
      "87": "Promenada w Mahébourg",
    },
    position: {
      lat: -20.4081,
      lng: 57.7,
      zoom: 10,
    },
    svg: <img src="/trips/icons/mauritius-map.png" />,
  },
  //15
  {
    date: "09 paź. 2026",
    name: "Dżudda",
    transit: {
      from: "Dżudda",
      to: "Wiedeń",
    },
    //prettier-ignore
    images: [
      90, 91, 
      93, 97,
      92,
    ],
    captions: {
      "92": "King Abdulaziz International Airport",
    },
    position: {
      lat: 21.4858,
      lng: 39.1925,
      zoom: 6,
    },
    svg: <SaudiArabia />,
    svgStyles: { rotate: "7deg" },
  },
  //16
  {
    date: "10 paź. 2026",
    name: "Vienna",
    transit: {
      from: "Wiedeń",
      to: "Katowice",
    },
    images: [94, 96, 95],
    captions: {
      "95": "Schloss Belvedere",
    },
    position: {
      lat: 48.2082,
      lng: 16.3738,
      zoom: 6,
    },
    svg: <Austria />,
    svgStyles: { rotate: "-7deg", left: "unset", right: 0 },
  },
];
