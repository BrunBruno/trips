import Map, { type MapPlace } from "./Map";

const SOUSSE_PLACES: MapPlace[] = [
  {
    name: "Iberostar Waves Ruspina",
    image: "/trips/tunisia-sousse/thumbnail/016.jpg",
    position: {
      lat: 35.7756,
      lng: 10.6897,
    },
  },
  {
    name: "Ribat of Sousse",
    image: "/trips/tunisia-sousse/thumbnail/001.jpg",
    position: {
      lat: 35.8256,
      lng: 10.6361,
    },
  },
  {
    name: "Mausoleum of Habib Bourguiba",
    image: "/trips/tunisia-sousse/thumbnail/002.jpg",
    position: {
      lat: 35.7731,
      lng: 10.8262,
    },
  },
];

const SOUSSE_CENTER = {
  lat: 35.8006,
  lng: 10.6633,
};

function SousseMap() {
  return <Map center={SOUSSE_CENTER} zoom={12} places={SOUSSE_PLACES} />;
}

export default SousseMap;
