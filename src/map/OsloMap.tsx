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
  {
    name: "Holmenkollbakken",
    image: "/trips/norway-oslo/thumbnail/011.jpg",
    position: {
      lat: 59.9633,
      lng: 10.6678,
    },
  },
  {
    name: "Hovedøya",
    image: "/trips/norway-oslo/thumbnail/004.jpg",
    position: {
      lat: 59.8948,
      lng: 10.7337,
    },
  },
  {
    name: "Oslo Opera House",
    image: "/trips/norway-oslo/thumbnail/010.jpg",
    position: {
      lat: 59.9075,
      lng: 10.7531,
    },
  },
  {
    name: "The Royal Palace",
    image: "/trips/norway-oslo/thumbnail/020.jpg",
    position: {
      lat: 59.9169,
      lng: 10.7276,
    },
  },
  {
    name: "Vigeland Park",
    image: "/trips/norway-oslo/thumbnail/007.jpg",
    position: {
      lat: 59.927,
      lng: 10.7005,
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
