import Map, { type MapPlace } from "./Map";

const LLORET_DE_MAR_PLACES: MapPlace[] = [
  {
    name: "Apartaments Blau",
    image: "/trips/spain-lloret-de-mar/001.jpg",
    position: {
      lat: 41.6985,
      lng: 2.8442,
    },
  },
];

const LLORET_DE_MAR_CENTER = {
  lat: 41.6985,
  lng: 2.8442,
};

function LloretDeMarMap(path: string) {
  return (
    <Map
      path={path}
      center={LLORET_DE_MAR_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={LLORET_DE_MAR_PLACES}
    />
  );
}

export default LloretDeMarMap;
