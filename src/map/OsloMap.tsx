import Map, { type MapPlace } from "./Map";

const OSLO_PLACES: MapPlace[] = [
  {
    name: "Oslo",
    image: "/trips/norway-oslo/thumbnail/001.jpg",
    position: {
      lat: 59.9139,
      lng: 10.7522,
    },
  },
];

const OSLO_CENTER = {
  lat: 59.9139,
  lng: 10.7522,
};

function OsloMap() {
  return <Map center={OSLO_CENTER} zoom={11} places={OSLO_PLACES} />;
}

export default OsloMap;
