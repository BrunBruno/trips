import type { MyHistory } from "../types";

export const EURO_TRIP_HISTORY: MyHistory[] = [
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
      lat: 48.2082,
      lng: 16.3738,
      zoom: 6,
    },
  },
  {
    date: "02 wrz. 2022",
    name: "Wiedeń",
    transit: "Wiedeń ➤ Chur",
    images: [7, 8, 9, 10, 11],
    captions: {
      "7": "Be Free Hostel",
      "8": "Schloss Schönbrunn",
      "9": "Schloss Schönbrunn",
      "10": "Blick auf Schönbrunn",
      "11": "Gloriette Schönbrunn",
    },
    position: {
      lat: 48.2082,
      lng: 16.3738,
      zoom: 10,
    },
  },
  {
    date: "03 wrz. 2022",
    name: "Przełęcz Bernina",
    transit: "Mediolan ⮜ Chur",
    // prettier-ignore
    images: [
      12, 16, 15, 13,
      18, 17, 14, 82,
    ],
    captions: {
      "12": "Bahnhof Chur",
      "13": "Berninapass",
      "14": "Berninapass",
      "15": "Berninapass",
      "16": "Bernina Express",
      "17": "Lago di Como",
      "18": "Navigli",
      "82": "Bellano",
    },
    position: {
      lat: 46.4158,
      lng: 10.0115,
      zoom: 6,
    },
  },

  {
    date: "04 wrz. 2022",
    name: "Mediolan",
    transit: "Mediolan ➤ Cannes",
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
      "84": "Galleria Vittorio Emanuele II",
    },
    position: {
      lat: 45.4642,
      lng: 9.19,
      zoom: 6,
    },
  },

  {
    date: "05 wrz. 2022",
    name: "Cannes",
    images: [24, 25],
    captions: {
      "24": "Menton",
      "25": "Résidence Villa Francia",
    },
    position: {
      lat: 43.5528,
      lng: 7.0174,
      zoom: 6,
    },
  },

  {
    date: "06 wrz. 2022",
    name: "Cannes",
    //prettier-ignore
    images: [
      28, 85, 86, 87,
      27, 26, 29, 30,
    ],
    captions: {
      "26": "Plage du Midi",
      "27": "Résidence Villa Francia",
      "28": "Résidence Villa Francia",
      "29": "Grand Auditorium Louis Lumière",
      "30": "Plage de la Roseraie",
      "85": "Résidence Villa Francia",
      "86": "Plage du Midi",
      "87": "Plage du Midi",
    },
    position: {
      lat: 43.5528,
      lng: 7.0174,
      zoom: 10,
    },
  },
  {
    date: "07 wrz. 2022",
    name: "Cannes",
    transit: "Lloret de Mar ⮜ Cannes",
    images: [32, 31, 88, 33],
    captions: {
      "31": "Plage du Midi",
      "32": "Parcours de santé de la Croix des Gardes",
      "33": "Parcours de santé de la Croix des Gardes",
      "88": "Résidence Villa Francia",
    },
    position: {
      lat: 43.5528,
      lng: 7.0174,
      zoom: 10,
    },
  },
  {
    date: "08 wrz. 2022",
    name: "Lloret de Mar",
    images: [89, 90, 34, 35],
    captions: {
      "34": "Centre de Lloret de Mar ",
      "35": "Platja Sa Caravera",
      "89": "Estació de Portbou",
      "90": "Cannes",
    },
    position: {
      lat: 41.7006,
      lng: 2.8386,
      zoom: 6,
    },
  },
  {
    date: "09 wrz. 2022",
    name: "Lloret de Mar",
    images: [36, 37, 38],
    position: {
      lat: 41.7006,
      lng: 2.8386,
      zoom: 10,
    },
  },
  {
    date: "10 wrz. 2022",
    name: "Lloret de Mar",
    images: [39, 40],
    position: {
      lat: 41.7006,
      lng: 2.8386,
      zoom: 10,
    },
  },
  {
    date: "11 wrz. 2022",
    name: "Lloret de Mar",
    transit: "Barcelona ⮜ Lloret de Mar",
    images: [41, 42, 43, 44, 45, 46, 47],
    position: {
      lat: 41.7006,
      lng: 2.8386,
      zoom: 10,
    },
  },
  {
    date: "12 wrz. 2022",
    name: "Barcelona",
    transit: "Lloret de Mar ➤ Paryż",
    images: [48, 49, 50, 51, 52, 53, 54, 55],
    position: {
      lat: 41.3874,
      lng: 2.1686,
      zoom: 8,
    },
  },
  {
    date: "13 wrz. 2022",
    name: "Paryż",
    images: [56, 57],
    position: {
      lat: 48.8566,
      lng: 2.3522,
      zoom: 6,
    },
  },
  {
    date: "14 wrz. 2022",
    name: "Paryż",
    transit: "Paryż ➤ Berlin",
    images: [58, 59, 60, 61, 62, 63, 64],
    position: {
      lat: 48.8566,
      lng: 2.3522,
      zoom: 10,
    },
  },
  {
    date: "15 wrz. 2022",
    name: "Berlin",
    transit: "Praga ⮜ Berlin",
    images: [65, 66, 67, 68, 69, 70, 71, 72],
    position: {
      lat: 52.52,
      lng: 13.405,
      zoom: 6,
    },
  },
  {
    date: "16 wrz. 2022",
    name: "Praga",
    transit: "Praga ➤ Katowice",
    images: [73, 74, 75, 76, 77, 78],
    position: {
      lat: 50.0755,
      lng: 14.4378,
      zoom: 6,
    },
  },
  {
    date: "17 wrz. 2022",
    name: "Katowice",
    images: [79, 80],
    position: {
      lat: 50.2649,
      lng: 19.0238,
      zoom: 6,
    },
  },
];
