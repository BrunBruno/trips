import Map, { type MapPlace } from "./Map";

const MADEIRA_PLACES: MapPlace[] = [
  {
    name: "Funchal",
    position: {
      lat: 32.6508,
      lng: -16.908,
    },
  },
  {
    name: "Porto Moniz",
    position: {
      lat: 32.8682,
      lng: -17.1685,
    },
  },
  {
    name: "Ponta do Pargo",
    position: {
      lat: 32.8122,
      lng: -17.2562,
    },
  },
  {
    name: "Calheta",
    position: {
      lat: 32.7239,
      lng: -17.1772,
    },
  },
  {
    name: "Santa Cruz",
    position: {
      lat: 32.6881,
      lng: -16.7931,
    },
  },
  {
    name: "Canico",
    position: {
      lat: 32.6502,
      lng: -16.8378,
    },
  },
];

const MADEIRA_CENTER = {
  lat: 32.7592,
  lng: -17.0221,
};

function MadeiraMap(path: string) {
  return (
    <Map
      path={path}
      center={MADEIRA_CENTER}
      zoom={10}
      places={MADEIRA_PLACES}
    />
  );
}

export default MadeiraMap;
