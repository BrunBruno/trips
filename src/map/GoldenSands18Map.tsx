import Map, { type MapPlace } from "./Map";

const GOLDEN_SANDS_18_PLACES: MapPlace[] = [
  {
    name: "Hotel Riva",
    image: "/trips/bulgaria-golden-sands-2018/001.jpg",
    position: {
      lat: 43.2847,
      lng: 28.0414,
    },
  },
];

const GOLDEN_SANDS_18_CENTER = {
  lat: 43.2847,
  lng: 28.0414,
};

function GoldenSands18Map() {
  return (
    <Map
      center={GOLDEN_SANDS_18_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={GOLDEN_SANDS_18_PLACES}
    />
  );
}

export default GoldenSands18Map;