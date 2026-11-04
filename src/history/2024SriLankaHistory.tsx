import { SriLanka, UAE } from "../svg";
import type { MyHistory } from "../types";

export const SRI_LANKA_HISTORY: MyHistory[] = [
  //01
  {
    date: "22 wrz. 2024",
    name: "Dubai",
    transit: {
      from: "Dubai",
      to: "Colombo",
    },
    images: [1, 2, 3],
    captions: {
      "3": "Dubai International Airport",
    },
    position: {
      lat: 25.2532,
      lng: 55.3657,
      zoom: 10,
    },
    svg: <UAE />,
    svgStyles: { rotate: "7deg" },
  },
  //02
  {
    date: "23 wrz. 2024",
    name: "Colombo",
    transit: {
      from: "Colombo",
      to: "Dambulla",
    },
    images: [5, 4],
    captions: {
      "4": "Colombo Bandaranaike International Airport",
    },
    position: {
      lat: 7.957,
      lng: 80.7603,
      zoom: 10,
    },
    svg: <SriLanka />,
    svgStyles: { rotate: "-7deg" },
  },
  //03
  {
    date: "23 wrz. 2024",
    name: "Dambulla",
    images: [8, 7, 6],
    captions: {
      "6": "Złota Świątynia Dambulla",
    },
    position: {
      lat: 7.1802,
      lng: 79.8837,
      zoom: 12,
    },
  },
  //04
  {
    date: "24 wrz. 2024",
    name: "Sigirija",
    transit: {
      from: "Dambulla",
      to: "Kandy",
    },
    images: [9, 10, 11],
    captions: {
      "11": "Pidurangala Rock",
    },
    position: {
      lat: 7.957,
      lng: 80.7602,
      zoom: 15,
    },
  },
  //05
  {
    date: "24 wrz. 2024",
    name: "Kandy",
    //prettier-ignore
    images: [
      12, 15,
      14, 13,
      16,
    ],
    captions: {
      "13": " Sri Dalada Maligawa",
      "14": "Diyathilaka Mandapaya",
      "16": "OneView Chalet",
    },
    position: {
      lat: 7.2906,
      lng: 80.6337,
      zoom: 10,
    },
  },
  //06
  {
    date: "25 wrz. 2024",
    name: "Kandy",
    transit: {
      from: "Kandy",
      to: "Ella",
    },
    //prettier-ignore
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
    position: {
      lat: 6.8667,
      lng: 81.0466,
      zoom: 10,
    },
  },
  //07
  {
    date: "26 wrz. 2024",
    name: "Ella",
    //prettier-ignore
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
    position: {
      lat: 6.8667,
      lng: 81.0466,
      zoom: 10,
    },
  },
  //08
  {
    date: "27 wrz. 2024",
    name: "Ella",
    transit: {
      from: "Ella",
      to: "Udawalawe",
    },
    images: [36, 35],
    captions: {
      "35": "On Rock Home",
    },
    position: {
      lat: 6.424,
      lng: 80.888,
      zoom: 10,
    },
  },
  //09
  {
    date: "27 wrz. 2024",
    name: "Udawalawe",
    images: [39, 38, 37],
    position: {
      lat: 6.024,
      lng: 80.794,
      zoom: 10,
    },
  },
  //10
  {
    date: "28 wrz. 2024",
    name: "Udawalawe",
    transit: {
      from: "Udawalawe",
      to: "Tangalle",
    },
    //prettier-ignore
    images: [
      40, 41, 47, 43,
      44, 45, 42, 46,
      48,
    ],
    captions: {
      "48": "Udawalawe National Park Safari",
    },
    position: {
      lat: 6.024,
      lng: 80.794,
      zoom: 10,
    },
  },
  //11
  {
    date: "28 wrz. 2024",
    name: "Tangalle",
    //prettier-ignore
    images: [
      51, 50, 49,
      52, 53, 54,
    ],
    captions: {
      "52": "Tangalle Navy Monument",
      "53": "Centrum Tangalle",
      "54": "Rocky Point Beach",
    },
    position: {
      lat: 6.024,
      lng: 80.794,
      zoom: 10,
    },
  },
  //12
  {
    date: "29 wrz. 2024",
    name: "Tangalle",
    //prettier-ignore
    images: [
      55, 61, 56,
      60, 58, 57, 
      59
    ],
    captions: {
      "59": "Tangalle",
    },
    position: {
      lat: 6.024,
      lng: 80.794,
      zoom: 10,
    },
  },
  //13
  {
    date: "30 wrz. 2024",
    name: "Mirissa",
    //prettier-ignore
    images: [
      63, 62,
      64, 66,
      65,
    ],
    captions: {
      "65": "Coconut Tree Hill",
    },
    position: {
      lat: 5.9483,
      lng: 80.4716,
      zoom: 10,
    },
  },
  //14
  {
    date: "01 paź. 2024",
    name: "Tangalle",
    transit: {
      from: "Tangalle",
      to: "Unawatuna",
    },
    //prettier-ignore
    images: [
      68, 67,
      69, 70,
    ],
    position: {
      lat: 6.0094,
      lng: 80.2494,
      zoom: 10,
    },
  },
  //15
  {
    date: "01 paź. 2024",
    name: "Unawatuna",
    images: [72, 71, 73],
    captions: {
      "73": "Fantasea Villa",
    },
    position: {
      lat: 6.0094,
      lng: 80.2494,
      zoom: 10,
    },
  },
  //16
  {
    date: "02 paź. 2024",
    name: "Unawatuna",
    //prettier-ignore
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
      lat: 6.0094,
      lng: 80.2494,
      zoom: 10,
    },
  },
  //17
  {
    date: "03 paź. 2024",
    name: "Unawatuna",
    transit: {
      from: "Unawatuna",
      to: "Colombo",
    },
    //prettier-ignore
    images: [
      88, 86, 87,
      84, 85, 83,
    ],
    position: {
      lat: 6.9271,
      lng: 79.8612,
      zoom: 10,
    },
  },
  //18
  {
    date: "03 paź. 2024",
    name: "Colombo",
    //prettier-ignore
    images: [
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
      lat: 6.9271,
      lng: 79.8612,
      zoom: 10,
    },
  },
  //19
  {
    date: "04 paź. 2024",
    name: "Colombo",
    transit: {
      from: "Colombo",
      to: "Dubaj",
    },
    images: [100, 102, 101, 103],
    captions: {
      "101": "Pettah",
      "103": "Galle Face Green",
    },
    position: {
      lat: 7.1808,
      lng: 79.8841,
      zoom: 10,
    },
  },
  //20
  {
    date: "04 paź. 2024",
    name: "Dubaj",
    images: [105, 106],
    captions: {
      "106": "Dubai International Airport",
    },
    position: {
      lat: 7.1808,
      lng: 79.8841,
      zoom: 10,
    },
    svg: <UAE />,
    svgStyles: { rotate: "-7deg", left: "unset", right: "-1rem" },
  },
  //21
  {
    date: "05 paź. 2024",
    name: "Dubaj",
    transit: {
      from: "Dubaj",
      to: "Kraków",
    },
    //prettier-ignore
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
      lat: 25.2532,
      lng: 55.3657,
      zoom: 10,
    },
  },
];
