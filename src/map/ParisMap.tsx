import Map, { type MapPlace } from "./Map";

const PARIS_PLACES: MapPlace[] = [
  {
    name: "International Youth Hostel",
    image: "/trips/france-paris/001.jpg",
    position: {
      lat: 48.85105,
      lng: 2.37878,
    },
  },
];

const PARIS_CENTER = {
  lat: 48.85105,
  lng: 2.37878,
};

function ParisMap(path: string) {
  return (
    <Map
      path={path}
      center={PARIS_CENTER}
      zoom={13}
      zoomPortrait={11}
      places={PARIS_PLACES}
    />
  );
}

export default ParisMap;
