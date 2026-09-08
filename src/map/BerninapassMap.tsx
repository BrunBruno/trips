import Map, { type MapPlace } from "./Map";

const BERNINAPASS_PLACES: MapPlace[] = [
  {
    name: "Bernina Express",
    image: "/trips/switzerland-bernina/001.jpg",
    position: {
      lat: 46.40889,
      lng: 10.01972,
    },
  },
];

const BERNINAPASS_CENTER = {
  lat: 46.40889,
  lng: 10.01972,
};

function BerninapassMap() {
  return (
    <Map
      center={BERNINAPASS_CENTER}
      zoom={11}
      zoomPortrait={9}
      places={BERNINAPASS_PLACES}
    />
  );
}

export default BerninapassMap;
