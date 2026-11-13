import SriLanka from "../svg/flags/slk";
import UnitedArabEmirates from "../svg/flags/uae";
import type { MyHistory, Position } from "../types";

export const SRI_LANKA_HISTORY: MyHistory[] = [
  //01 2209
  {
    date: "22 wrz. 2024",
    name: "Dubaj",
    transit: {
      from: "Dubaj",
      to: "Kolombo",
      type: "plane",
    },
    images: [2, 1, 120, 3],
    captions: {
      "3": "[DXB] Dubai International Airport",
      "120": "[KTW] Katowice Wojciech Korfanty International Airport",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l", imgs: [2, 3] },
      ],
      zoom: 11,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[1,120] },
        { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l", imgs: [2, 3] },
        { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l", imgs:[] },
      ],
      zoom: 1,
    },
    svg: {
      item: <UnitedArabEmirates />,
      styles: { rotate: "7deg" },
    },
  },

  //02 2309
  {
    date: "23 wrz. 2024",
    name: "Dambulla",
    transit: {
      from: "Dambulla",
      to: "Kandy",
      type: "bus",
    },
    trip: {
      to: "Dambulla",
      type: "tuktuk",
    },
    sleep: {
      name: "Thilina Homestay",
      styles: { left: "unset", right: "0" },
    },
    //prettier-ignore
    images: [
      5, 7, 121,
      8, 122, 6,
      4,
    ],
    captions: {
      "4": "[CMB] Colombo Bandaranaike International Airport",
      "6": "Dambulla Cave Temple",
      "8": "Słoń Cejloński",
      "122": "Thilina Homestay",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.985997, lng: 80.772929, cap: "Thilina Homestay", typ: 'n', imgs:[122,8] },
        { lat: 7.855159, lng: 80.650570, cap: "Dambulla Temple", imgs:[6,121] },
        { lat: 7.966569, lng: 80.761795, cap: "Pidurangala Rock", imgs:[7] },
      ],
      zoom: 10,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l", imgs:[5,4] },
        { lat: 7.873614, lng: 80.649984, cap: "Dambulla", imgs:[6,121,122,8,7] },
      ],
      zoom: 7,
    },
    svg: {
      item: <SriLanka />,
      styles: { rotate: "-7deg" },
    },
  },

  //03 2409
  {
    date: "24 wrz. 2024",
    name: "Kandy",
    transit: {
      from: "Kandy",
      to: "Ella",
      type: "train",
    },
    sleep: { name: "OneView Chalet" },
    //prettier-ignore
    images: [
      10, 9, 123, 15,
      14, 124, 12, 119,
      13 ,11, 16
    ],
    captions: {
      "12": "Dambulla",
      "13": "Kandy Lake",
      "14": "Diyathilaka Mandapaya",
      "16": "OneView Chalet",
      "11": "Pidurangala Rock",
      "119": "Sigiriya Rock",
      "124": "Centrum Kandy",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.28418, lng: 80.634797, cap: "OneView Chalet", typ: 'n', imgs:[15,16] },
        { lat: 7.290642, lng: 80.642601, cap: "Kandy Lake", imgs:[14,13] },
        { lat: 7.292049, lng: 80.636581, cap: "Centrum Kandy", imgs:[123,124] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 7.957203, lng: 80.760225, cap: "Sigiriya", imgs:[9,10,119,11,12] },
        { lat: 7.290642, lng: 80.642601, cap: "Kandy", imgs:[13,14,15,16,123,124] },
      ],
      zoom: 7,
    },
  },

  //04 2509
  {
    date: "25 wrz. 2024",
    name: "Ella",
    sleep: { name: "On Rock Home by Nature Green" },
    // prettier-ignore
    images: [
      17, 21, 18, 20,
      125, 19, 22, 35,
      23,
    ],
    captions: {
      "19": "Kandy Railway Station ",
      "22": "Pola Herbaciane",
      "23": "Trasa Pociągowa Kandy-Ella",
      "35": "On Rock Home by Nature Green",
      "125": "Ella Railway Station ",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 6.875801, lng: 81.047111, cap: "Ella RS", typ: 'l', imgs:[21,125,22,23] },
        { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: 'n', imgs:[] }
      ],
      zoom: 14,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 7.289581, lng: 80.632353, cap: "Kandy RS", typ: 'l', imgs:[20,18,19,17] },
        { lat: 6.875801, lng: 81.047111, cap: "Ella RS", typ: 'l', imgs:[21,22,23,125] },

      ],
      zoom: 8,
    },
  },

  //05 2609
  {
    date: "26 wrz. 2024",
    name: "Ella",
    transit: {
      from: "Ella",
      to: "Udawalawe",
      type: "taxi",
    },
    // prettier-ignore
    images: [
      31, 28, 29, 27,
      26, 33, 34, 25,
      32, 30, 24,
    ],
    captions: {
      "24": "On Rock Home",
      "25": "The Pekoe Trail",
      "26": "Nine Arch Bridge",
      "30": "Kuda Ravana Ella Waterfall",
      "32": "Ravana Pool Club",
      "33": "Little Adam's Peak",
      "34": "Centrum Ella",
    },
    // prettier-ignore
    position: {
      points: [       
        { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: 'n', imgs:[24] },
        { lat: 6.865212, lng: 81.063076, cap: "Little Adam's Peak", imgs:[33,32] },
        { lat: 6.876848, lng: 81.060734, cap: "Nine Arch Bridge", imgs:[28,27,26,25] },
        { lat: 6.866369, lng: 81.044578, cap: "Kuda Ravana", imgs:[31,29,30] },
        { lat: 6.87307, lng: 81.049139, cap: "Ella", imgs:[34] },
      ],
      zoom: 13,
    },
  },

  //06 2709
  {
    date: "27 wrz. 2024",
    name: "Udawalawe",
    sleep: { name: "Nice View Safari" },
    transit: {
      from: "Udawalawe",
      to: "Tangalle",
      type: "tuktuk",
    },
    //prettier-ignore
    images: [
      126, 39, 37,
      127, 38, 128,
    ],
    captions: {
      "38": "Makak Rozczochrany",
      "127": "Nice View Safari",
      "128": "Udawalawe",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 6.410096, lng: 80.794699, cap: "Nice View Safari", typ: 'n', imgs:[126,39,127] },
        { lat: 6.422820, lng: 80.814358, cap: "Udawalawa Post Office",  imgs:[38] },
        { lat: 6.411099, lng: 80.796799, cap: "Udawalawe Center", imgs:[128,37] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 6.418512, lng: 80.822510, cap: "Udawalawe", imgs:[126,39,37,127,38,128] },
        { lat: 6.873021, lng: 81.048763, cap: "Ella", imgs:[] },
      ],
      zoom: 8,
    },
  },

  //07 2809
  {
    date: "28 wrz. 2024",
    name: "Tangalle",
    sleep: { name: "Rocky Point Beach" },
    // prettier-ignore
    images: [
      49, 51, 46, 45,
      53, 44, 50, 40,
      52, 48, 54,
    ],
    captions: {
      "40": "Uda Walawe Reservoir",
      "44": "Udawalawe National Park Safari",
      "48": "Słoń Lankijski",
      "50": "Rocky Point Beach",
      "52": "Tangalle Navy Monument",
      "53": "Centrum Tangalle",
      "54": "Pearl Beach",
    },
    //prettier-ignore
    position: { 
      points: [
        { lat: 6.007784, lng: 80.780056, cap: "Rocky Point Beach", typ: 'n', imgs:[50,54] },
        { lat: 6.025939, lng: 80.797223, cap: "Tangalla Center", imgs:[51,53] }, 
        { lat: 6.019736, lng: 80.794922, cap: "Tangalle Navy Monument", imgs:[52] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 6.474923, lng: 80.876261, cap: "Udawalawe National Park", imgs:[45,46,44,40,48,49] },
        { lat: 6.025939, lng: 80.797223, cap: "Tangalla", imgs:[51,53,52,50,54] },
      ],
      zoom: 7,
    },
  },

  //08 2909
  {
    date: "29 wrz. 2024",
    name: "Tangalle",
    // prettier-ignore
    images: [
      58, 61, 56,
      60, 55, 57,
      59,
    ],
    captions: {
      "55": "Rocky Point Beach",
      "57": "Pearl Beach",
      "59": "Tangalle",
      "60": "Paw Królewski",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 6.025939, lng: 80.797223, cap: "Tangalla Center", imgs: [61] },
        { lat: 6.007784, lng: 80.780056, cap: "Rocky Point Beach", typ: 'n', imgs:[60,57,58,59,56,55] },
      ],
      zoom: 13,
    },
  },

  //09 3009
  {
    date: "30 wrz. 2024",
    name: "Mirissa",
    transit: {
      from: "Tangalle",
      to: "Unawatuna",
      type: "train",
    },
    trip: {
      to: "Mirissa",
      type: "bus",
      styles: { top: "85%", rotate: "3deg" },
    },
    // prettier-ignore
    images: [
      63, 62,
      64, 66,
      65,
    ],
    captions: {
      "65": "Coconut Tree Hill",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 5.939374, lng: 80.468221, cap: "Coconut Tree Hill", imgs:[63,64,65,66] },
        { lat: 6.007784, lng: 80.780056, cap: "Rocky Point Beach", typ: 'n', imgs:[62] },
      ],
      zoom: 10,
    },
  },

  //10 0110
  {
    date: "01 paź. 2024",
    name: "Unawatuna",
    sleep: { name: "Fantasea Villa" },
    // prettier-ignore
    images: [
      68, 72, 69,
      71, 67, 70,
      73,
    ],
    captions: {
      "67": "Rocky Point Beach",
      "70": "Silent Beach",
      "71": "Mihiripenna Beach",
      "73": "Fantasea Villa",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 5.999651, lng: 80.268055, cap: "Fantasea Villa", typ:'n', imgs:[71, 72, 73] },
      ],
      zoom: 14,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 5.999651, lng: 80.268055, cap: "Unawatuna RS", typ:"l", imgs:[71, 72, 73] },
        { lat: 6.042253, lng: 80.737282, cap: "Beliatta RS", typ:"l", imgs:[] },
        { lat: 6.025939, lng: 80.797223, cap: "Tangalle", imgs:[67,68,69,70] },
      ],
      zoom: 8,
    },
  },

  //11 0210
  {
    date: "02 paź. 2024",
    name: "Unawatuna",
    transit: {
      from: "Unawatuna",
      to: "Colombo",
      type: "train",
    },
    // prettier-ignore
    images: [
      74, 80, 76, 79,
      78, 77, 81, 82,
      75,
    ],
    captions: {
      "75": "Unawatuna Beach",
      "77": "Welle Devalaya",
      "78": "Waran Paskowany",
      "81": "Jungle Beach ",
      "82": "Japanese Peace Pagoda",
    },
    // prettier-ignore
    position: {
      points: [
        { lat: 6.009848, lng: 80.248394, cap: "Unawatuna Beach", imgs:[74,76,75]},
        { lat: 6.018759, lng: 80.239392, cap: "Jungle Beach", imgs:[80,79,81]},
        { lat: 6.006268, lng: 80.243603, cap: "Welle Devalaya", imgs:[77,78] },
        { lat: 6.016152, lng: 80.238135, cap: "Japanese Peace Pagoda", imgs:[82] },
        { lat: 5.999651, lng: 80.268055, cap: "Fantasea Villa", typ:"n", imgs:[] },

      ],
      zoom: 13,
    },
  },

  //12 0310
  {
    date: "03 paź. 2024",
    name: "Colombo",
    sleep: { name: "City Beds Colombo" },
    // prettier-ignore
    images: [
      98, 87, 83, 89,
      88, 97, 94, 95,
      90, 96, 92, 93,
    ],
    captions: {
      "88": "Unawatuna Railway Station",
      "90": "Fort Railway Station",
      "92": "Old Parlament",
      "93": "Galle Face Green",
      "94": "City of Dreams",
      "95": "Sri Sivasubramaniya Swamy Temple",
      "96": "Colombo Lotus Tower",
      "97": "Jezioro Beira",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 6.933701, lng: 79.850031, cap: "Fort Railway Station", typ:"l", imgs: [90,89] },
        { lat: 6.927174, lng: 79.858303, cap: "Colombo Lotus Tower", imgs: [95,96] },
        { lat: 6.924012, lng: 79.845011, cap: "Galle Face Green", imgs: [98,97,94,92,93] },
        { lat: 6.932157, lng: 79.846334, cap: "City Beds Colombo",typ:"n", imgs: [] },
      ],
      zoom: 13,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 6.934041, lng: 79.850066, cap: "Colombo RS", typ:"l", imgs: [98,89,97,94,95,90,96,92,93] },
        { lat: 6.021996, lng: 80.249145, cap: "Unawatuna RS", typ:"l", imgs: [87,83,88] },
      ],
      zoom: 7,
    },
  },

  //13 0410
  {
    date: "04 paź. 2024",
    name: "Colombo",
    transit: {
      from: "Colombo",
      to: "Dubaj",
    },
    trip: {
      to: "CMB",
      type: "tuktuk",
      styles: { top: "70%", rotate: "2deg" },
    },
    //prettier-ignore
    images: [
      100, 102, 105,
      103, 101, 129
    ],
    captions: {
      "101": "Pettah",
      "103": "Galle Face Green",
      "129": "[CMB] Colombo Bandaranaike International Airport",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l", imgs: [105,129] },
        { lat: 6.936906, lng: 79.851831, cap: "Colombo", imgs: [102,101,103,100] },
      ],
      zoom: 9,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l", imgs: [105,129] },
        { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l", imgs: [] },
      ],
      zoom: 2,
    },
  },

  //14 0510
  {
    date: "05 paź. 2024",
    name: "Dubaj",
    transit: {
      from: "Dubaj",
      to: "Kraków",
    },
    // prettier-ignore
    images: [
      113, 106, 118, 130,
      111, 112, 107, 114,
      116, 109, 110, 115,
    ],
    captions: {
      "106": "[DBX] Dubai International Airport",
      "107": "Premier Inn Dubai",
      "109": "Al Garhoud Metro Station",
      "110": "Museum of the Future",
      "111": "The Dubai Mall",
      "112": "Dubai Aquarium",
      "113": "Human Waterfall",
      "114": "Burj Khalifa",
      "115": "Dubai Fountain",
      "116": "Mall of the Emirates",
      "118": "Dubai Frame",
      "130": "Ski Dubai",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l", imgs: [106] },
        { lat: 25.243326, lng: 55.358701, cap: "Premier Inn", typ: "n", imgs: [107,109] },
        { lat: 25.197457, lng: 55.279798, cap: "The Dubai Mall", imgs: [113,111,112,114,115] },
        { lat: 25.118233, lng: 55.200565, cap: "Mall of the Emirates", imgs: [116,130] },
        { lat: 25.235627, lng: 55.300362, cap: "Dubai Frame", imgs: [118] },
        { lat: 25.220152, lng: 55.282102, cap: "Museum of the Future", imgs: [110] },
      ],
      zoom: 10,
    },
    //prettier-ignore
    position2: {
      points: [
        { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l", imgs:[] },
        { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l", imgs: [113,106,116,117,111,112,107,114,118,109,110,115,130] },
      ],
      zoom: 2,
    },
    svg: {
      item: <UnitedArabEmirates />,
      styles: { rotate: "-7deg", left: "unset", right: "-1rem" },
    },
  },
];

export const SRI_LANKA_TRANSPORT: Position = {
  //prettier-ignore
  points: [
    { lat: 50.475412, lng: 19.081145, cap: "KTW", typ: "l" },
    { lat: 25.256664, lng: 55.368307, cap: "DXB", typ: "l" },
    { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l" },
  ],
  zoom: 1,
};

export const SRI_LANKA_SLEEP: Position = {
  //prettier-ignore
  points: [
    { lat: 7.985997, lng: 80.772929, cap: "Thilina Homestay", typ: "n" },
    { lat: 7.284181, lng: 80.634797, cap: "OneView Chalet", typ: "n" },
    { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: "n" },
    { lat: 6.410096, lng: 80.794699, cap: "Nice View Safari", typ: "n" },
    { lat: 6.007784, lng: 80.780056, cap: "Rocky Point Beach", typ: "n" },
    { lat: 5.999651, lng: 80.268055, cap: "Fantasea Villa", typ: "n" },
    { lat: 6.932157, lng: 79.846334, cap: "City Beds Colombo", typ: "n" },
  ],
  zoom: 7,
};
