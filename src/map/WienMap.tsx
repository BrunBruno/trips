import Map, { type MapPlace } from "./Map";

const WIEN_PLACES: MapPlace[] = [
  {
    name: "Be Free- Hostel",
    image: "/trips/austria-vienna/001.jpg",
    position: {
      lat: 48.19828,
      lng: 16.33271,
    },
  },
];

const WIEN_CENTER = {
  lat: 48.19828,
  lng: 16.33271,
};

function WienMap() {
  return (
    <Map
      center={WIEN_CENTER}
      zoom={13}
      zoomPortrait={11}
      places={WIEN_PLACES}
    />
  );
}

export default WienMap;