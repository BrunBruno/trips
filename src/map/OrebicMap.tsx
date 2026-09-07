import Map, { type MapPlace } from "./Map";

const OREBIC_PLACES: MapPlace[] = [
  {
    name: "Villa Michele",
    image: "/trips/croatia-orebic/001.jpg",
    position: {
      lat: 42.9754,
      lng: 17.1748,
    },
  },
];

const OREBIC_CENTER = {
  lat: 42.9754,
  lng: 17.1748,
};

function OrebicMap() {
  return (
    <Map
      center={OREBIC_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={OREBIC_PLACES}
    />
  );
}

export default OrebicMap;
