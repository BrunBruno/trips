import Map, { type MapPlace } from "./Map";

const DOHA_PLACES: MapPlace[] = [
  {
    name: "Doha",
    image: "/trips/qatar-doha/thumbnail/001.jpg",
    position: {
      lat: 25.2854,
      lng: 51.531,
    },
  },
  {
    name: "Katara Towers",
    image: "/trips/qatar-doha/thumbnail/002.jpg",
    position: {
      lat: 25.3833,
      lng: 51.5267,
    },
  },
  {
    name: "Katara Multi-Purpose Hall",
    image: "/trips/qatar-doha/thumbnail/003.jpg",
    position: {
      lat: 25.3617,
      lng: 51.5264,
    },
  },
  {
    name: "Doha International Airport",
    image: "/trips/qatar-doha/thumbnail/004.jpg",
    position: {
      lat: 25.2611,
      lng: 51.5651,
    },
  },
];

const DOHA_CENTER = {
  lat: 25.2854,
  lng: 51.531,
};

function DohaMap() {
  return (
    <Map
      center={DOHA_CENTER}
      zoom={11}
      places={DOHA_PLACES}
    />
  );
}

export default DohaMap;