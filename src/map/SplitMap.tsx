import Map, { type MapPlace } from "./Map";

const SPLIT_PLACES: MapPlace[] = [
  {
    name: "Split",
    images: [18, 22, 23, 24],
    position: {
      lat: 43.5081,
      lng: 16.4402,
    },
  },
  {
    name: "Trogir",
    images: [6, 7, 8, 9, 16, 17],
    position: {
      lat: 43.5164,
      lng: 16.2518,
    },
  },
  {
    name: "Kaštel Lukšić",
    images: [1, 2, 3, 4, 5, 17, 21],
    position: {
      lat: 43.5506,
      lng: 16.3677,
    },
  },
  {
    name: "Drvenik Veliki i Drvenik Mali",
    images: [10, 11, 12, 13, 14, 15],
    position: {
      lat: 43.4528,
      lng: 16.1147,
    },
  },
  {
    name: "Memorijalni Park",
    images: [19, 20],
    position: {
      lat: 43.58139,
      lng: 16.32554,
    },
  },
];

const SPLIT_CENTER = {
  lat: 43.6,
  lng: 16.35,
};

function SplitMap() {
  return (
    <Map
      center={SPLIT_CENTER}
      zoom={11}
      places={SPLIT_PLACES}
      path={"/trips/croatia-split/"}
    />
  );
}

export default SplitMap;
