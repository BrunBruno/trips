import Map, { type MapPlace } from "./Map";

const MILAN_PLACES: MapPlace[] = [
  {
    name: "Lake Como",
    image: "/trips/italy-milan/001.jpg",
    position: {
      lat: 46.0079,
      lng: 9.2608,
    },
  },
  {
    name: "Hotel Residence Cenisio",
    image: "/trips/italy-milan/002.jpg",
    position: {
      lat: 45.49028,
      lng: 9.1717,
    },
  },
];

const MILAN_CENTER = {
  lat: 45.749,
  lng: 9.216,
};

function MilanMap(path: string) {
  return (
    <Map
      path={path}
      center={MILAN_CENTER}
      zoom={9}
      zoomPortrait={8}
      places={MILAN_PLACES}
    />
  );
}

export default MilanMap;
