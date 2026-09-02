import Map, { type MapPlace } from "./Map";

const KUALA_LUMPUR_PLACES: MapPlace[] = [
  {
    name: "Kuala Lumpur",
    position: {
      lat: 3.139,
      lng: 101.6869,
    },
  },
];

const KUALA_LUMPUR_CENTER = {
  lat: 3.139,
  lng: 101.6869,
};

function KualaLumpurMap() {
  return (
    <Map center={KUALA_LUMPUR_CENTER} zoom={11} places={KUALA_LUMPUR_PLACES} />
  );
}

export default KualaLumpurMap;
