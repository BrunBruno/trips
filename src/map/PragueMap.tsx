import Map, { type MapPlace } from "./Map";

const PRAGUE_PLACES: MapPlace[] = [
  {
    name: "Zamek na Hradczanach",
    image: "/trips/czech-republic-prague/001.jpg",
    position: {
      lat: 50.08975,
      lng: 14.39896,
    },
  },
];

const PRAGUE_CENTER = {
  lat: 50.08975,
  lng: 14.39896,
};

function PragueMap() {
  return (
    <Map
      center={PRAGUE_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={PRAGUE_PLACES}
    />
  );
}

export default PragueMap;
