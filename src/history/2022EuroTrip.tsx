import Austria from "../svg/flags/aut";
import Czechia from "../svg/flags/cze";
import France from "../svg/flags/fra";
import Germany from "../svg/flags/ger";
import Italy from "../svg/flags/ita";
import Poland from "../svg/flags/pol";
import Spain from "../svg/flags/spa";
import Switzerland from "../svg/flags/swi";
import Disco from "../svg/icons/disco";
import Palm from "../svg/icons/palm";
import Yacht from "../svg/icons/yacht";
import type { MyHistory } from "../types";

export const EURO_TRIP_HISTORY: MyHistory[] = [
  //01 0109
  {
    date: "01 wrz. 2022",
    name: "Wiedeń",
    // prettier-ignore
    images: [
      4, 5, 3,
      6, 81, 2,
      1
    ],
    captions: {
      "1": "Karlskirche",
      "2": "Schloss Belvedere",
      "3": "Schloss Belvedere",
      "4": "Belvedere-Schlossgarten",
      "5": "Stephansdom",
      "6": "Volksgarten",
      "81": "Österreichisches Parlament",
    },
    position: {
      points: [{ lat: 48.2082, lng: 16.3738, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "7deg" },
    },
  },

  //02 0209
  {
    date: "02 wrz. 2022",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Chur",
    },
    images: [7, 8, 9, 10, 11],
    captions: {
      "7": "Hostel Be Free",
      "8": "Schloss Schönbrunn",
      "9": "Schloss Schönbrunn",
      "10": "Widok na Schönbrunn",
      "11": "Glorieta w Schönbrunn",
    },
    position: {
      points: [{ lat: 48.2082, lng: 16.3738, cap: "" }],
      zoom: 6,
    },
  },

  //03 0309
  {
    date: "03 wrz. 2022",
    name: "Przełęcz Bernina",
    transit: {
      from: "Chur",
      to: "Mediolan",
    },
    // prettier-ignore
    images: [
      15, 13, 95,
      16, 12, 14, 
            18, 17, 82,
    ],
    captions: {
      "12": "Dworzec Główny w Chur",
      "14": "Berninapass",
      "16": "Bernina Express",
      "17": "Lago di Como",
      "18": "Kanały Navigli",
      "82": "Bellano",
    },
    position: {
      points: [{ lat: 46.4158, lng: 10.0115, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Switzerland />,
      styles: { rotate: "7deg", left: "unset", right: 0 },
    },
    svg2: {
      item: <Italy />,
      styles: { rotate: "-7deg", left: "unset", right: "-1rem" },
    },
  },

  //04 0409
  {
    date: "04 wrz. 2022",
    name: "Mediolan",
    transit: {
      from: "Mediolan",
      to: "Cannes",
    },
    // prettier-ignore
    images: [
      84, 20, 21,
      22, 83, 23,
      19,
    ],
    captions: {
      "19": "Arco della Pace",
      "20": "Castello Sforzesco",
      "21": "Bosco Verticale",
      "22": "Torre UniCredit",
      "23": "Duomo di Milano",
      "83": "Famedio",
      "84": "Galeria Wiktora Emanuela II",
    },
    position: {
      points: [{ lat: 45.4642, lng: 9.19, cap: "" }],
      zoom: 6,
    },
  },

  //05 0509
  {
    date: "05 wrz. 2022",
    name: "Cannes",
    images: [24, 25],
    captions: {
      "24": "Menton",
      "25": "Résidence Villa Francia",
    },
    position: {
      points: [{ lat: 43.5528, lng: 7.0174, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <France />,
      styles: { rotate: "-7deg" },
    },
  },

  //06 0609
  {
    date: "06 wrz. 2022",
    name: "Cannes",
    //prettier-ignore
    images: [
      28, 85, 86, 87,
      27, 26, 29, 30,
    ],
    captions: {
      "26": "Plaża Midi",
      "27": "Résidence Villa Francia",
      "29": "Grand Auditorium Louis Lumière",
      "30": "Plaża Roseraie",
    },
    position: {
      points: [{ lat: 43.5528, lng: 7.0174, cap: "" }],
      zoom: 6,
    },
    img: <img src="/trips/img/euro-trip/cannes.png" />,
    imgStyles: { left: "1rem", bottom: "20rem" },
  },

  //07 0709
  {
    date: "07 wrz. 2022",
    name: "Cannes",
    transit: {
      from: "Cannes",
      to: "Lloret de Mar",
    },
    //prettier-ignore
    images: [
      32, 31,
      88, 33,
    ],
    captions: {
      "33": "Park Croix des Gardes",
      "88": "Résidence Villa Francia",
    },
    position: {
      points: [{ lat: 43.5528, lng: 7.0174, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Yacht />,
      styles: {
        scale: 1.5,
        left: "-0.5rem",
        bottom: "-0.5rem",
        rotate: "-5deg",
      },
    },
  },

  //08 0809
  {
    date: "08 wrz. 2022",
    name: "Lloret de Mar",
    //prettier-ignore
    images: [
      89, 90,
      34, 35,
    ],
    captions: {
      "34": "Centrum Lloret de Mar",
      "35": "Plaża Sa Caravera",
      "89": "Stacja kolejowa Portbou",
      "90": "Cannes",
    },
    position: {
      points: [{ lat: 41.7006, lng: 2.8386, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Spain />,
      styles: { rotate: "-7deg" },
    },
  },

  //09 0909
  {
    date: "09 wrz. 2022",
    name: "Lloret de Mar",
    //prettier-ignore
    images: [
      36, 91,
      38, 37,
    ],
    captions: {
      "36": "Plaża w Lloret de Mar",
      "37": "Dona Marinera",
      "38": "Apartamenty Blau",
      "91": "Klub Disco Tropics",
    },
    position: {
      points: [{ lat: 41.7006, lng: 2.8386, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Disco />,
      styles: { left: "0rem", bottom: "-3rem" },
    },
  },

  //10 1009
  {
    date: "10 wrz. 2022",
    name: "Lloret de Mar",
    images: [39, 40],
    position: {
      points: [{ lat: 41.7006, lng: 2.8386, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Palm />,
      styles: { scale: 1.5, left: "unset", right: 0, bottom: "1rem" },
    },
  },

  //11 1109
  {
    date: "11 wrz. 2022",
    name: "Lloret de Mar",
    transit: {
      from: "Lloret de Mar",
      to: "Barcelona",
    },
    //prettier-ignore
    images: [
      42, 43, 41,
      47, 45, 44,
      46,
    ],
    captions: {
      "46": "Camí de Ronda",
    },
    position: {
      points: [{ lat: 41.7006, lng: 2.8386, cap: "" }],
      zoom: 6,
    },
  },

  //12 1209
  {
    date: "12 wrz. 2022",
    name: "Barcelona",
    transit: {
      from: "Lloret de Mar",
      to: "Paryż",
    },
    //prettier-ignore
    images: [
      51, 53, 50, 48,
      52, 54, 49, 55,
    ],
    captions: {
      "48": "Sagrada Família",
      "49": "Park Guinardó",
      "50": "Punkt widokowy Nen de la Rutlla",
      "51": "Park Güell",
      "52": "Punkt widokowy Nen de la Rutlla",
      "53": "Camp Nou",
      "54": "Wieże Weneckie",
      "55": "Pałac Narodowy",
    },
    position: {
      points: [{ lat: 41.3874, lng: 2.1686, cap: "" }],
      zoom: 6,
    },
  },

  //13 1309
  {
    date: "13 wrz. 2022",
    name: "Paryż",
    //prettier-ignore
    images: [
      56, 92,
      93, 57,
    ],
    captions: {
      "56": "Clignancourt",
      "57": "Wieża Eiffla",
      "92": "Centrum Paryża",
      "93": "International Youth Hostel",
    },
    position: {
      points: [{ lat: 48.8566, lng: 2.3522, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <France />,
      styles: { rotate: "7deg", left: "unset", right: 0 },
    },
  },

  //14 1409
  {
    date: "14 wrz. 2022",
    name: "Paryż",
    transit: {
      from: "Paryż",
      to: "Berlin",
    },
    // prettier-ignore
    images: [
      63, 62, 59,
      58, 60, 64,
      61,
    ],
    captions: {
      "58": "Musée du Louvre",
      "60": "Arc de Triomphe du Carrousel",
      "61": "Taras Wieży Eiffla",
      "64": "Cathédrale Notre-Dame de Paris",
    },
    position: {
      points: [{ lat: 48.8566, lng: 2.3522, cap: "" }],
      zoom: 6,
    },
  },

  //15 1509
  {
    date: "15 wrz. 2022",
    name: "Berlin",
    transit: {
      from: "Berlin",
      to: "Praga",
    },
    // prettier-ignore
    images: [
      65, 66, 67, 68,
      69, 70, 72, 71,
    ],
    captions: {
      "65": "Berlin Hauptbahnhof",
      "66": "Cube Berlin",
      "67": "Berliner Fernsehturm",
      "68": "Deutscher Dom",
      "69": "Berliner Mauer",
      "70": "Brandenburger Tor",
      "71": "Reichstag",
      "72": "Spree in Berlin",
    },
    position: {
      points: [{ lat: 52.52, lng: 13.405, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Germany />,
      styles: { rotate: "7deg" },
    },
  },

  //16 1609
  {
    date: "16 wrz. 2022",
    name: "Praga",
    transit: {
      from: "Praga",
      to: "Katowice",
    },
    // prettier-ignore
    images: [
      76, 77, 75,
      73, 74, 78,
    ],
    captions: {
      "73": "Rynek Staromiejski",
      "74": "Zamek na Hradczanach",
      "78": "Ogrody Letenskie",
    },
    position: {
      points: [{ lat: 50.0755, lng: 14.4378, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Czechia />,
      styles: { rotate: "-7deg" },
    },
  },

  //17 1709
  {
    date: "17 wrz. 2022",
    name: "Katowice",
    images: [79, 80],
    position: {
      points: [{ lat: 50.2649, lng: 19.0238, cap: "" }],
      zoom: 6,
    },
    svg: {
      item: <Poland />,
      styles: { rotate: "-7deg", left: "unset", right: 0 },
    },
  },
];
