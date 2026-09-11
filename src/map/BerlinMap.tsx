import Map, { type MapPlace } from "./Map";

const BERLIN_PLACES: MapPlace[] = [
  {
    name: "BNB Berlin",
    image: "/trips/germany-berlin/001.jpg",
    position: {
      lat: 52.5107,
      lng: 13.3815,
    },
  },
];

const BERLIN_CENTER = {
  lat: 52.5107,
  lng: 13.3815,
};

function BerlinMap(path: string) {
  return (
    <Map
      path={path}
      center={BERLIN_CENTER}
      zoom={13}
      zoomPortrait={11}
      places={BERLIN_PLACES}
    />
  );
}

export default BerlinMap;
