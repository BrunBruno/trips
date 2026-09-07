import Map, { type MapPlace } from "./Map";

const LEPTOKARIA_PLACES: MapPlace[] = [
  {
    name: "Hotel Afroditi",
    image: "/trips/greece-leptokaria/001.jpg",
    position: {
      lat: 40.0584,
      lng: 22.5657,
    },
  },
];

const LEPTOKARIA_CENTER = {
  lat: 40.0584,
  lng: 22.5657,
};

function LeptokariaMap() {
  return (
    <Map
      center={LEPTOKARIA_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={LEPTOKARIA_PLACES}
    />
  );
}

export default LeptokariaMap;
