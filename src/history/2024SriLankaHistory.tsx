import SriLanka from "../svg/flags/slk";
import UnitedArabEmirates from "../svg/flags/uae";
import type { MyHistory } from "../types";

export const SRI_LANKA_HISTORY: MyHistory[] = [
  //01 2209
  {
    date: "22 wrz. 2024",
    name: "Dubai",
    transit: {
      from: "Dubai",
      to: "Colombo",
      type: "plane",
    },
    images: [1, 2, 3],
    captions: {
      "3": "[DXB] Dubai International Airport",
    },
    position: {
      points: [{ lat: 25.2532, lng: 55.3657, cap: "DXB", typ: "l", imgs: [] }],
      zoom: 10,
    },
    svg: {
      item: <UnitedArabEmirates />,
      styles: { rotate: "7deg" },
    },
  },

  //02 2309
  {
    date: "23 wrz. 2024",
    name: "Colombo & Dambulla",
    transit: {
      from: "Dambulla",
      to: "Kandy",
      type: "bus",
    },
    sleep: { name: "Thilina Homestay" },
    //prettier-ignore
    images: [
      5, 4,
      8, 7,
      6,
    ],
    captions: {
      "4": "[CMB] Colombo Bandaranaike International Airport",
      "6": "Złota Świątynia Dambulla",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.180399, lng: 79.884249, cap: "CMB", typ: "l", imgs:[] },
        { lat: 7.985997, lng: 80.772929, cap: "Thilina Homestay", typ:'n', imgs:[] },
      ],
      zoom: 9,
    },
    svg: {
      item: <SriLanka />,
      styles: { rotate: "-7deg" },
    },
  },

  //03 2409
  {
    date: "24 wrz. 2024",
    name: "Dambulla & Kandy",
    transit: {
      from: "Kandy",
      to: "Ella",
      type: "train",
    },
    sleep: { name: "OneView Chalet" },
    //prettier-ignore
    images: [
      9, 10, 11, 12,
      15, 14, 13, 16,
    ],
    captions: {
      "11": "Pidurangala Rock",
      "13": " Sri Dalada Maligawa",
      "14": "Diyathilaka Mandapaya",
      "16": "OneView Chalet",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.95716, lng: 80.760171, cap: "Sigirija", imgs:[] },
        { lat: 7.28418, lng: 80.634797, cap: "OneView Chalet", typ: 'n', imgs:[] },
      ],
      zoom: 9,
    },
  },

  //04 2509
  {
    date: "25 wrz. 2024",
    name: "Kandy & Ella",
    sleep: { name: "On Rock Home by Nature Green" },
    // prettier-ignore
    images: [
      20, 21, 18,
      17, 19, 22,
      23,
    ],
    captions: {
      "17": "OneView Chalet",
      "19": "Dworzec w Kandy",
      "22": "Pola Herbaciane",
      "23": "Trasa Pociągowa Kandy-Ella",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 7.28418, lng: 80.634797, cap: "OneView Chalet", typ: 'n', imgs:[] },
        { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: 'n', imgs:[] },
      ],
      zoom: 9,
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
      "30": "Wodospad Kuda Ravana",
      "32": "Ravana Pool Club",
      "33": "Little Adam's Peak",
      "34": "Centrum Ella",
    },
    // prettier-ignore
    position: {
      points: [       
        { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: 'n', imgs:[] },
      ],
      zoom: 10,
    },
  },

  //06 2709
  {
    date: "27 wrz. 2024",
    name: "Ella & Udawalawe",
    sleep: { name: "Nice View Safari" },
    transit: {
      from: "Udawalawe",
      to: "Tangalle",
      type: "tuktuk",
    },
    //prettier-ignore
    images: [
      36, 35,
      39, 38,
      37,
    ],
    captions: {
      "35": "On Rock Home",
    },
    //prettier-ignore
    position: {
      points: [
        { lat: 6.410096, lng: 80.794699, cap: "Nice View Safari", typ: 'n', imgs:[] },
        { lat: 6.864301, lng: 81.051951, cap: "On Rock Home", typ: 'n', imgs:[] },
      ],
      zoom: 10,
    },
  },

  //07 2809
  {
    date: "28 wrz. 2024",
    name: "Udawalawe & Tangalle",
    sleep: { name: "Rocky Point Beach" },
    // prettier-ignore
    images: [
      40, 41, 47, 43,
      44, 45, 42, 46,
      48, 51, 50, 49,
      52, 53, 54,
    ],
    captions: {
      "48": "Udawalawe National Park Safari",
      "52": "Tangalle Navy Monument",
      "53": "Centrum Tangalle",
      "54": "Rocky Point Beach",
    },

    //prettier-ignore
    position: {
      points: [
        { lat: 6.007784, lng: 80.780056, cap: "Rocky Point Beach", typ: 'n', imgs:[] },
        { lat: 6.410096, lng: 80.794699, cap: "Nice View Safari", typ: 'n', imgs:[] },
      ],
      zoom: 10,
    },
  },

  //08 2909
  {
    date: "29 wrz. 2024",
    name: "Tangalle",
    // prettier-ignore
    images: [
      55, 61, 56,
      60, 58, 57,
      59,
    ],
    captions: {
      "59": "Tangalle",
    },
    position: {
      points: [{ lat: 6.024, lng: 80.794, cap: "Tangalle" }],
      zoom: 10,
    },
  },

  //09 3009
  {
    date: "30 wrz. 2024",
    name: "Mirissa",
    // prettier-ignore
    images: [
      63, 62,
      64, 66,
      65,
    ],
    captions: {
      "65": "Coconut Tree Hill",
    },
    position: {
      points: [{ lat: 5.9483, lng: 80.4716, cap: "Mirissa" }],
      zoom: 10,
    },
  },

  //10 0110
  {
    date: "01 paź. 2024",
    name: "Tangalle Unawatuna",
    // prettier-ignore
    images: [
      68, 67,
      69, 70,
      72, 71, 73
    ],
    captions: {
      "73": "Fantasea Villa",
    },
    position: {
      points: [{ lat: 6.0094, lng: 80.2494, cap: "Unawatuna" }],
      zoom: 10,
    },
  },

  //11 0210
  {
    date: "02 paź. 2024",
    name: "Unawatuna",
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
    position: {
      points: [{ lat: 6.0094, lng: 80.2494, cap: "Unawatuna" }],
      zoom: 10,
    },
  },

  //12 0310
  {
    date: "03 paź. 2024",
    name: "Unawatuna Colombo",
    // prettier-ignore
    images: [
      88, 86, 87,
      84, 85, 83,
      89, 99, 91, 98,
      97, 94, 95, 90,
      96, 92, 93,
    ],
    captions: {
      "90": "Dworzec w Kolombo",
      "92": "Stary Budynek Parlamentu",
      "93": "Galle Face Green",
      "94": "City of Dreams",
      "95": "Sri Sivasubramaniya Swamy Temple",
      "96": "Colombo Lotus Tower",
      "97": "Jezioro Beira",
    },
    position: {
      points: [
        { lat: 6.9271, lng: 79.8612, cap: "Colombo" },
        { lat: 6.9271, lng: 79.8612, cap: "Colombo" },
      ],
      zoom: 10,
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
    images: [100, 102, 101, 103, 105, 106],
    captions: {
      "101": "Pettah",
      "103": "Galle Face Green",
      "106": "Dubai International Airport",
    },
    position: {
      points: [
        { lat: 7.1808, lng: 79.8841, cap: "CMB", typ: "l" },
        { lat: 7.1808, lng: 79.8841, cap: "DXB", typ: "l" },
      ],
      zoom: 10,
    },
    svg: {
      item: <UnitedArabEmirates />,
      styles: { rotate: "-7deg", left: "unset", right: "-1rem" },
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
      113, 108, 116, 117,
      111, 112, 107, 114,
      118, 109, 110, 115,
    ],
    captions: {
      "107": "Premier Inn Dubai",
      "109": "Al Garhoud Metro Station",
      "110": "Museum of the Future",
      "111": "The Dubai Mall",
      "112": "Dubai Aquarium",
      "114": "Burj Khalifa",
      "115": "Dubai Fountain",
      "118": "Dubai Frame",
    },
    position: {
      points: [{ lat: 25.2532, lng: 55.3657, cap: "Dubaj" }],
      zoom: 10,
    },
  },
];
