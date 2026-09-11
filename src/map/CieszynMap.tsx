import Map, { type MapPlace } from "./Map";

const CIESZYN_PLACES: MapPlace[] = [
  {
    name: "Cieszyn",
    position: {
      lat: 49.7494,
      lng: 18.6329,
    },
  },
  {
    name: "Czeski Cieszyn",
    position: {
      lat: 49.7423,
      lng: 18.6186,
    },
  },
];

const CIESZYN_CENTER = {
  lat: 49.746,
  lng: 18.625,
};

function CieszynMap(path: string) {
  return (
    <Map
      path={path}
      center={CIESZYN_CENTER}
      zoom={14}
      places={CIESZYN_PLACES}
    />
  );
}

export default CieszynMap;
