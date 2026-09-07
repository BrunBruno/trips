import Map, { type MapPlace } from "./Map";

const GOLDEN_SANDS_19_PLACES: MapPlace[] = [
  {
    name: "Hotel Zdravets",
    image: "/trips/bulgaria-golden-sands-2019/001.jpg",
    position: {
      lat: 43.2865,
      lng: 28.0417,
    },
  },
];

const GOLDEN_SANDS_19_CENTER = {
  lat: 43.2865,
  lng: 28.0417,
};

function GoldenSands19Map() {
  return (
    <Map
      center={GOLDEN_SANDS_19_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={GOLDEN_SANDS_19_PLACES}
    />
  );
}

export default GoldenSands19Map;
