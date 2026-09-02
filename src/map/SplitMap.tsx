import Map, { type MapPlace } from "./Map";

const SPLIT_PLACES: MapPlace[] = [
  {
    name: "Split",
    position: {
      lat: 43.5081,
      lng: 16.4402,
    },
  },
  {
    name: "Trogir",
    position: {
      lat: 43.5164,
      lng: 16.2518,
    },
  },
  {
    name: "Kaštel Lukšić",
    position: {
      lat: 43.5506,
      lng: 16.3677,
    },
  },
  {
    name: "Drvenik Veliki",
    position: {
      lat: 43.4474,
      lng: 16.1495,
    },
  },
  {
    name: "Drvenik Mali",
    position: {
      lat: 43.4528,
      lng: 16.1147,
    },
  },
];

const SPLIT_CENTER = {
  lat: 43.51,
  lng: 16.35,
};

function SplitMap() {
  return <Map center={SPLIT_CENTER} zoom={11} places={SPLIT_PLACES} />;
}

export default SplitMap;
