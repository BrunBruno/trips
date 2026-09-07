import Map, { type MapPlace } from "./Map";

const ALANYA_PLACES: MapPlace[] = [
  {
    name: "Hotel Mirabell",
    image: "/trips/turkey-alanya/001.jpg",
    position: {
      lat: 36.5875,
      lng: 31.8178,
    },
  },
];

const ALANYA_CENTER = {
  lat: 36.5875,
  lng: 31.8178,
};

function AlanyaMap() {
  return (
    <Map
      center={ALANYA_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={ALANYA_PLACES}
    />
  );
}

export default AlanyaMap;
