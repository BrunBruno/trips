import Map, { type MapPlace } from "./Map";

const SICILY_PLACES: MapPlace[] = [
  {
    name: "Catania",
    position: {
      lat: 37.5079,
      lng: 15.083,
    },
  },
  {
    name: "Taormina",
    position: {
      lat: 37.8516,
      lng: 15.2864,
    },
  },
];

const SICILY_CENTER = {
  lat: 37.6798,
  lng: 15.1847,
};

function SicilyMap(path: string) {
  return (
    <Map path={path} center={SICILY_CENTER} zoom={10} places={SICILY_PLACES} />
  );
}

export default SicilyMap;
