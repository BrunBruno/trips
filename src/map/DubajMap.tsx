import Map, { type MapPlace } from "./Map";

const DUBAJ_PLACES: MapPlace[] = [
  {
    name: "Dubaj",
    position: {
      lat: 25.2048,
      lng: 55.2708,
    },
  },
];

const DUBAJ_CENTER = {
  lat: 25.2048,
  lng: 55.2708,
};

function DubajMap(path: string) {
  return (
    <Map path={path} center={DUBAJ_CENTER} zoom={11} places={DUBAJ_PLACES} />
  );
}

export default DubajMap;
