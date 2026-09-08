import Map, { type MapPlace } from "./Map";

const CANNES_PLACES: MapPlace[] = [
  {
    name: "Pierre et Vacances Cannes Villa Francia",
    image: "/trips/france-cannes/001.jpg",
    position: {
      lat: 43.55327,
      lng: 6.99044,
    },
  },
];

const CANNES_CENTER = {
  lat: 43.55327,
  lng: 6.99044,
};

function CannesMap() {
  return (
    <Map
      center={CANNES_CENTER}
      zoom={13}
      zoomPortrait={11}
      places={CANNES_PLACES}
    />
  );
}

export default CannesMap;
