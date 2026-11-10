import Austria from "../svg/flags/aut";
import Catania from "../svg/flags/cat";
import Czechia from "../svg/flags/cze";
import France from "../svg/flags/fra";
import Germany from "../svg/flags/ger";
import Italy from "../svg/flags/ita";
import Poland from "../svg/flags/pol";
import Spain from "../svg/flags/spa";
import Switzerland from "../svg/flags/swi";
import type { MyHistory } from "../types";

export const EURO_TRIP_HISTORY: MyHistory[] = [
  //01 0109
  {
    hid: 1,
    date: "01 wrz. 2022",
    name: "Wiedeń",
    sleep: { name: "Be Free Hostel", styles: { left: "unset", right: 0 } },
    // prettier-ignore
    images: [
      97, 98, 99, 105,3,
      103,104,100,4,  2,
      101,6,  81, 5,  1
    ],
    captions: {
      "1": "Karlskirche",
      "2": "Schloss Belvedere",
      "3": "Schloss Belvedere",
      "4": "Belvedere-Schlossgarten",
      "5": "Stephansdom",
      "6": "Volksgarten",
      "81": "Österreichisches Parlament",
      "97": "The Icon Vienna",
      "98": "Haus des Meeres",
      "99": "Wien",
      "100": "Karlskirche",
      "101": "Belvedere-Schlossgarten",
      "102": "Wien",
      "103": "Pestsäule",
      "104": "Hofburg",
      "105": "Wiener Rathaus",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 48.185195, lng: 16.376606, cap: "Wien Hauptbahnhof", typ: "l", imgs: [97] },
        { lat: 48.198354, lng: 16.332845, cap: "Be Free", typ: "n", imgs: [] },
        { lat: 48.191539, lng: 16.380846, cap: "Belvedere", imgs: [3,2,4,101] },
        { lat: 48.198684, lng: 16.371701, cap: "Karlskirche", imgs: [1,100] },
        { lat: 48.197695, lng: 16.352859, cap: "Haus des Meeres", imgs: [98] },
        { lat: 48.208301, lng: 16.370559, cap: "Innere Stadt", imgs: [104,6,81,105,103,5] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 48.185195, lng: 16.376606, cap: "Wien HB", typ: "l", imgs: [97,98,99,105,3,103,104,100,4,5,101,6,81,2,1] },
        { lat: 50.259712, lng: 19.017540, cap: "Katowice", typ: "l", imgs: [] },
      ],
      zoom: 4,
    },
    svg: {
      item: <Austria />,
      styles: { rotate: "7deg" },
    },
  },

  //02 0209
  {
    hid: 1,
    date: "02 wrz. 2022",
    name: "Wiedeń",
    transit: {
      from: "Wiedeń",
      to: "Chur",
      type: "train",
    },
    //prettier-ignore
    images: [
      106,9,  109,107,
      112,11, 10 ,114,
      7,  115,113,8,
    ],
    captions: {
      "7": "Be Free Hostel",
      "8": "Schloss Schönbrunn",
      "9": "Schloss Schönbrunn",
      "10": "Schönbrunn Wien Wiew",
      "11": "Gloriette Schönbrunn",
      "106": "Wien Hbf",
      "107": "Schlosspark Schönbrunn",
      "109": "Schlosspark Schönbrunn",
      "112": "Wien Hauptbahnhof",
      "113": "Wien ➤ Zürich",
      "114": "Wien ➤ Zürich",
      "115": "Zürich Hauptbahnhof",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 48.198354, lng: 16.332845, cap: "Be Free", typ: "n", imgs: [7] },
        { lat: 48.185837, lng: 16.312722, cap: "Schönbrunn", imgs: [8,9,10,11,109,107] },
        { lat: 48.185195, lng: 16.376606, cap: "Wien HB", typ: "l", imgs: [112,113,106] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 48.185195, lng: 16.376606, cap: "Wien HB", typ: "l", imgs: [8,9,10,11,109,107,112,113,106,7] },
        { lat: 47.411550, lng: 8.544091, cap: "Zürich HB", typ: "l", imgs: [114,115] },
        { lat: 46.853572, lng: 9.529726, cap: "Chur HB", typ: "l", imgs: [] },
      ],
      zoom: 5,
    },
  },

  //03 0309
  {
    hid: 1,
    date: "03 wrz. 2022",
    name: "Przełęcz Bernina",
    transit: {
      from: "Chur",
      to: "Mediolan",
      type: "train",
    },
    sleep: { name: "Hotel Residence Cenisio" },
    // prettier-ignore
    images: [
      15, 13, 119,121,95,
      116,118,16, 120,122,
      12, 17, 18, 82, 14,
    ],
    captions: {
      "12": "Chur Hauptbahnhof",
      "13": "Berninapass",
      "14": "Berninapass",
      "15": "Berninapass",
      "16": "Bernina Express",
      "17": "Lago di Como",
      "18": "Navigli",
      "82": "Bellano",
      "95": "Chur Hbf",
      "116": "St. Moritz",
      "118": "Tirano",
      "119": "Bellano",
      "120": "Piazza Gae Aulenti",
      "121": "Navigli",
      "122": "Hotel Residence Cenisio",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 46.410906, lng: 10.026428, cap: "Berninapass", imgs: [15,13,16,14,117] },
        { lat: 46.853572, lng: 9.529726, cap: "Chur HB", typ: "l", imgs: [95,12] },
        { lat: 46.498018, lng: 9.845863, cap: "St.Moritz", typ: "l", imgs: [116] },
        { lat: 46.040036, lng: 9.303778, cap: "Bellano", typ: "l", imgs: [17,82,119] },
        { lat: 46.215623, lng: 10.166966, cap: "Tirano", typ: "l", imgs: [118] },
        { lat: 45.487205, lng: 9.204779, cap: "Milano", typ: "l", imgs: [18,120,121] },
      ],
      zoom: 7,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 45.487205, lng: 9.204779, cap: "Milano", typ: "l", imgs: [120] }, 
        { lat: 45.490510, lng: 9.172719, cap: "Residence Cenisio", typ: "n", imgs: [122] },
        { lat: 45.452454, lng: 9.176919, cap: "Navigli", imgs: [18,121] },
      ],
      zoom: 10,
    },
    svg: {
      item: <Switzerland />,
      styles: { rotate: "7deg", left: "unset", right: "1rem" },
    },
    svg2: {
      item: <Italy />,
      styles: { rotate: "-7deg", left: "unset", right: "-1.5rem", bottom: 0 },
    },
  },

  //04 0409 127
  {
    hid: 1,
    date: "04 wrz. 2022",
    name: "Mediolan",
    transit: {
      from: "Mediolan",
      to: "Cannes",
      type: "train",
    },
    // prettier-ignore
    images: [
      123,124,125,126,
      128,84, 20, 21,
      22, 83, 23, 19,
    ],
    captions: {
      "19": "Arco della Pace",
      "20": "Castello Sforzesco",
      "21": "Bosco Verticale",
      "22": "Torre UniCredit",
      "23": "Duomo di Milano",
      "83": "Famedio",
      "84": "Galleria Vittorio Emanuele II",
      "123": "Arco della Pace",
      "124": "Castello Sforzesco",
      "125": "Piazza Gae Aulenti",
      "126": "Galleria Vittorio Emanuele II",
      "128": "Residence Cenisio",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 45.490457, lng: 9.172709, cap: "Residence Cenisio", typ:'n', imgs:[128] },
        { lat: 45.487205, lng: 9.204779, cap: "Milano", typ: "l", imgs: [] },
        { lat: 45.475753, lng: 9.172398, cap: "Arco della Pace", imgs:[19,123] },
        { lat: 45.464206, lng: 9.191864, cap: "Duomo", imgs:[23,84,126] },
        { lat: 45.483580, lng: 9.189388, cap: "Piazza Gae Aulenti", imgs:[22,21,125] },
        { lat: 45.470514, lng: 9.179332, cap: "Castello Sforzesco", imgs:[20,124] },
        { lat: 45.485685, lng: 9.179104, cap: "Famedio", imgs:[83] },
        { lat: 45.452454, lng: 9.176919, cap: "Navigli", imgs: [] },
      ],
      zoom: 12,
    },
    food: {
      name: "Pizza al Trancio",
      img: 127,
      styles: { left: "-4rem", bottom: "8rem", rotate: "-7deg" },
    },
  },

  //05 0509
  {
    hid: 1,
    date: "05 wrz. 2022",
    name: "Cannes",
    sleep: {
      name: "Résidence Villa Francia",
      styles: { left: "unset", right: 0 },
    },
    //prettier-ignore
    images: [
      132, 130, 133,
      129, 131, 24,
      25,
    ],
    captions: {
      "24": "Menton",
      "25": "Résidence Villa Francia",
      "129": "Milano Central",
      "130": "Milan ➤ Cannes",
      "131": "Milan ➤ Cannes",
      "132": "Résidence Villa Francia",
      "133": "Résidence Villa Francia",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.548851, lng: 6.986575, cap: "Cannes La Bocca", typ: "l", imgs: [25,132,133] },
        { lat: 43.792477, lng: 7.609777, cap: "Ventimiglia", typ: "l", imgs: [24,130,131] },
        { lat: 45.487205, lng: 9.204779, cap: "Milano", typ: "l", imgs: [129] },
       
      ],
      zoom: 6,
    },
    svg: {
      item: <France />,
      styles: { rotate: "-7deg" },
    },
  },

  //06 0609
  {
    hid: 1,
    date: "06 wrz. 2022",
    name: "Cannes",
    //prettier-ignore
    images: [
      136,140,138,139,135,
      28, 85, 86, 87, 134,
      26, 29, 137,27,30,
    ],
    captions: {
      "26": "Plage Du Midi",
      "27": "Résidence Villa Francia",
      "28": "Résidence Villa Francia",
      "29": "Palace of Festivals and Congresses of Cannes",
      "30": "La Croisette",
      "85": "Résidence Villa Francia",
      "86": "Plage Du Midi",
      "87": "Plage Du Midi",
      "134": "Résidence Villa Francia",
      "135": "Résidence Villa Francia",
      "136": "Le Suquet",
      "137": "Le Suquet",
      "138": "Casino Barriere Le Croisette",
      "139": "La Croisette",
      "140": "Plage de la Roseraie",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.552725, lng: 6.990855, cap: "Villa Francia", typ:"n", imgs:[28,85,27,135,134] },
        { lat: 43.548204, lng: 6.985127, cap: "Midi", imgs:[86,87,26] },
        { lat: 43.546144, lng: 7.032580, cap: "Roseraie", imgs:[30,140] },
        { lat: 43.550766, lng: 7.018282, cap: "La Croisette", imgs:[29,138,139] },
        { lat: 43.551102, lng: 7.010418, cap: "Le Suquet", imgs:[136,137] },
      ],
      zoom: 13,
    },
  },

  //07 0709
  {
    hid: 1,
    date: "07 wrz. 2022",
    name: "Cannes",
    transit: {
      from: "Cannes",
      to: "Lloret de Mar",
      type: "train",
    },
    //prettier-ignore
    images: [
      141,144,31,143,
      145, 142, 88, 33,
      32
    ],
    captions: {
      "31": "Plage Du Midi",
      "32": "Cannes",
      "33": "Croix des Gardes",
      "88": "Résidence Villa Francia",
      "141": "Résidence Villa Francia",
      "142": "Cannes la Bocca",
      "143": "MSC Meraviglia",
      "144": "Cannes",
      "145": "Le Suquet",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 43.552725, lng: 6.990855, cap: "Villa Francia", typ:"n", imgs:[88,141] },
        { lat: 43.549204, lng: 6.991127, cap: "Midi", imgs:[31,143] },
        { lat: 43.558180, lng: 7.000890, cap: "Croix des Gardes", imgs:[32,33,144] },
        { lat: 43.551102, lng: 7.010418, cap: "Le Suquet", imgs:[145] },
        { lat: 43.548967, lng: 6.986542, cap: "Cannes La Bocca", typ:"l", imgs:[142] },
      ],
      zoom: 13,
    },
  },

  //08 0809
  {
    hid: 1,
    date: "08 wrz. 2022",
    name: "Lloret de Mar",
    sleep: {
      name: "Apartaments Blau",
      styles: { left: "unset", right: 0 },
    },
    //prettier-ignore
    images: [
      90,150,148,149,
      35, 89, 146,34,
    ],
    captions: {
      "34": "Lloret de Mar",
      "35": "Platja Sa Caravera",
      "89": "Portbou",
      "90": "Cannes",
      "146": "Cannes",
      "148": "Cannes ➤ Lloret de Mar",
      "149": "Portbou",
      "150": "Lloret de Mar",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 41.701043, lng: 2.842350, cap: "Lloret", typ: "l", imgs: [34,35] },
        { lat: 41.979311, lng: 2.816998, cap: "Girona", typ: "l", imgs: [] },
        { lat: 42.424699, lng: 3.157963, cap: "Portbou", typ: "l", imgs: [89,149] },
        { lat: 43.548851, lng: 6.986575, cap: "Cannes La Bocca", typ: "l", imgs: [90,146] },
        { lat: 43.303366, lng: 5.381476, cap: "Marseille St-Charles", typ: "l", imgs: [148] },
        { lat: 43.604981, lng: 3.880730, cap: "Montpellier Saint-Roch", typ: "l", imgs: [] },
      ],
      zoom: 6,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 41.701043, lng: 2.842350, cap: "Lloret", typ: "l", imgs: [34,150] },
        { lat: 41.698669, lng: 2.844155, cap: "Apartaments Blau", typ: "n", imgs: [] },
        { lat: 41.696074, lng: 2.845183, cap: "Platja Sa Caravera", imgs: [35] },
      ],
      zoom: 13,
    },
    svg: {
      item: <Spain />,
      styles: { rotate: "-7deg" },
    },
  },

  //09 0909
  {
    hid: 1,
    date: "09 wrz. 2022",
    name: "Lloret de Mar",
    //prettier-ignore
    images: [
      151,153,152,
      91, 36, 38,
      37,
    ],
    captions: {
      "36": "Platja de Lloret de Mar",
      "37": "Dona Marinera",
      "38": "Apartaments Blau",
      "91": "Klub Disco Tropics",
      "151": "Platja de Lloret de Mar",
      "152": "Dona Marinera",
      "153": "Dona Marinera",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 41.698669, lng: 2.844155, cap: "Apartaments Blau", typ: "n", imgs: [38] },
        { lat: 41.699158, lng: 2.850656, cap: "Platja de Lloret de Mar", imgs: [36,151] },
        { lat: 41.695291, lng: 2.844845, cap: "Dona Marinera", imgs: [37,152,153] },
        { lat: 41.700097, lng: 2.842749, cap: "Disco Tropics", imgs: [91] },
      ],
      zoom: 14,
    },
    svg: {
      item: <Catania />,
      styles: { rotate: "7deg", left: "unset", right: "-1rem" },
    },
  },

  //10 1009
  {
    hid: 1,
    date: "10 wrz. 2022",
    name: "Lloret de Mar",
    images: [154, 155, 39, 40],
    captions: {
      "39": "Platja de Lloret de Mar",
      "40": "Lloret de Mar",
      "154": "Apartaments Blau",
      "155": "Platja Sa Caravera",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 41.698669, lng: 2.844155, cap: "Apartaments Blau", typ: "n", imgs: [154,40] },
        { lat: 41.699158, lng: 2.850656, cap: "Platja de Lloret de Mar", imgs: [39] },
        { lat: 41.696074, lng: 2.845183, cap: "Platja Sa Caravera", imgs: [155] },
      ],
      zoom: 14,
    },
  },

  //11 1109
  {
    hid: 1,
    date: "11 wrz. 2022",
    name: "Lloret de Mar",
    transit: {
      from: "Lloret de Mar",
      to: "Barcelona",
      type: "bus",
    },
    //prettier-ignore
    images: [
      156,159,158,157,46,
      43, 47, 163,41, 161,
      45, 162,42, 44, 160,
    ],
    captions: {
      "41": "Platja de Lloret de Mar",
      "42": "Platja de Lloret de Mar",
      "43": "Castell de Lloret",
      "44": "Castell de Lloret",
      "45": "Camí de Ronda",
      "46": "Camí de Ronda",
      "47": "Camí de Ronda",
      "156": "Lloret Bus Station",
      "157": "Platja de Lloret de Mar",
      "158": "Platja de Lloret de Mar",
      "159": "Platja de Lloret de Mar",
      "160": "Camí de Ronda",
      "161": "Camí de Ronda",
      "162": "Dona Marinera",
      "163": "Apartaments Blau",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 41.698669, lng: 2.844155, cap: "Apartaments Blau", typ: "n", imgs: [163] },
        { lat: 41.699158, lng: 2.850656, cap: "Platja de Lloret", imgs: [42,41,157,158,159] },
        { lat: 41.699142, lng: 2.859981, cap: "Camí de Ronda", imgs: [43,44,45,46,47,160,161,] },
        { lat: 41.695291, lng: 2.844845, cap: "Dona Marinera", imgs: [162] },
      ],
      zoom: 14,
    },
  },

  //12 1209
  {
    date: "12 wrz. 2022",
    name: "Barcelona",
    transit: {
      from: "Lloret de Mar",
      to: "Paryż",
      type: "train",
    },
    //prettier-ignore
    images: [
      168,165,166,170,164,
      169,51, 53, 50, 167,
      48,52, 54, 49, 55,
    ],
    captions: {
      "48": "Sagrada Família",
      "49": "Parc del Guinardó",
      "50": "Mirador del Nen de la Rutlla",
      "51": "Parc Güell",
      "52": "Mirador del Nen de la Rutlla",
      "53": "Camp Nou",
      "54": "Torres Venecianes",
      "55": "Les Quatre Columnes",
      "164": "Mirador del Nen de la Rutlla",
      "165": "Mirador del Nen de la Rutlla",
      "166": "Camp Nou",
      "167": "Palau Nacional de Montjuïc",
      "168": "Arenas de Barcelona",
      "169": "La Rambla",
      "170": "Arc de Triomf",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 41.394676, lng: 2.182720, cap: "Barcelona", typ: "l", imgs: [] },
        { lat: 41.403948, lng: 2.173903, cap: "Sagrada Família", imgs: [48] },
        { lat: 41.420104, lng: 2.166840, cap: "Parc del Guinardó", imgs: [50,52,49,165,164] },
        { lat: 41.414511, lng: 2.152684, cap: "Parc Güell", imgs: [51] },
        { lat: 41.380928, lng: 2.122766, cap: "Camp Nou", imgs: [53] },
        { lat: 41.385585, lng: 2.169860, cap: "La Rambla", imgs: [169, 170] },
        { lat: 41.375059, lng: 2.149224, cap: "Plaça d'Espanya i Montjuïc", imgs: [168,54,55,167] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 41.701043, lng: 2.842350, cap: "Lloret", typ: "l", imgs: [] },
        { lat: 41.979311, lng: 2.816998, cap: "Girona", typ: "l", imgs: [] },
        { lat: 41.394676, lng: 2.182720, cap: "Barcelona", typ: "l", imgs: [168,165,166,170,164,169,51,53,50,167,48,52,54,49,55,] },
      ],
      zoom: 7,
    },
  },

  //13 1309
  {
    date: "13 wrz. 2022",
    name: "Paryż",
    sleep: { name: "International Youth Hostel" },
    //prettier-ignore
    images: [
      56, 92,
      93, 57,
    ],
    captions: {
      "56": "Clignancourt",
      "57": "Tour Eiffel",
      "92": "Paris",
      "93": "International Youth Hostel",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 48.851204, lng: 2.378623, cap: "International Youth Hostel", typ:"n", imgs:[93] },
        { lat: 48.844226, lng: 2.374485, cap: "Gare de Lyon", typ:"l", imgs:[] },
        { lat: 48.858448, lng: 2.294503, cap: "Tour Eiffel", imgs:[57] },
        { lat: 48.886180, lng: 2.343095, cap: "Clignancourt", imgs:[56] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 41.701043, lng: 2.842350, cap: "Lloret", typ: "l", imgs: [] },
        { lat: 41.979311, lng: 2.816998, cap: "Girona", typ: "l", imgs: [] },
        { lat: 48.844226, lng: 2.374485, cap: "Gare de Lyon", typ:"l", imgs:[] },
      ],
      zoom: 5,
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
    //prettier-ignore
    position: {
      points: [
        { lat: 48.858448, lng: 2.294503, cap: "Tour Eiffel", imgs:[63,62,61] },
        { lat: 48.853039, lng: 2.349891, cap: "Notre-Dame", imgs:[64] },
        { lat: 48.860651, lng: 2.337621, cap: "Louvre", imgs:[58,60,59] },
        { lat: 48.876949, lng: 2.359101, cap: "Gare de l'Est", typ:'l', imgs:[] },
      ],
      zoom: 13,
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
    sleep: {
      name: "BNB Berlin",
      styles: { left: "unset", right: 0 },
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
    //prettier-ignore
    position: {
      points: [
        { lat: 52.525045, lng: 13.369381, cap: "Berlin Hbf", typ:'l', imgs:[65,66] },
        { lat: 52.512350, lng: 13.383535, cap: "BNB Berlin", typ:'n', imgs:[] },
        { lat: 52.518757, lng: 13.376198, cap: "Reichstag", imgs:[71] },
        { lat: 52.512762, lng: 13.392587, cap: "Deutscher Dom", imgs:[68,72] },
        { lat: 52.520848, lng: 13.409355, cap: "Berliner Fernsehturm", imgs:[67] },
        { lat: 52.516425, lng: 13.378832, cap: "Brandenburger Tor", imgs:[69,70] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 52.525045, lng: 13.369381, cap: "Berlin Hbf", typ:'l', imgs:[65,65,67,68,69,70,71,72] },
        { lat: 49.478871, lng: 8.471853, cap: "Mannheim Hbf", typ:'l', imgs:[] },
        { lat: 48.876949, lng: 2.359101, cap: "Gare de l'Est", typ:'l', imgs:[] },
      ],
      zoom: 5,
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
      "73": "Staroměstské Náměstí",
      "74": "Pražský Hrad",
      "78": "Letenské Sady",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 50.091138, lng: 14.401649, cap: "Pražský Hrad", imgs:[76,77,75,74] },
        { lat: 50.096026, lng: 14.415290, cap: "Letenské Sady", imgs:[78] },
        { lat: 50.087610, lng: 14.421166, cap: "Staroměstské Náměstí", imgs:[73] },
        { lat: 50.083477, lng: 14.434086, cap: "Praha HN", typ:'l', imgs:[] },
      ],
      zoom: 12,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 52.525045, lng: 13.369381, cap: "Berlin HB", typ:'l', imgs:[] },
        { lat: 50.083477, lng: 14.434086, cap: "Praha HN", typ:'l', imgs:[76,77,75,73,74,78] },
      ],
      zoom: 5,
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
    // prettier-ignore
    position: {
      points: [
        { lat: 50.083477, lng: 14.434086, cap: "Praha HN", typ:'l', imgs:[79,80] },
        { lat: 50.259712, lng: 19.017540, cap: "Katowice", typ: "l", imgs: [] },
      ],
      zoom: 6,
    },
    svg: {
      item: <Poland />,
      styles: { rotate: "-7deg", left: "unset", right: 0 },
    },
  },
];
