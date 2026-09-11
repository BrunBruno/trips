import Map, { type MapPlace } from "./Map";

const MARSA_ALAM_PLACES: MapPlace[] = [
  {
    name: "Marsa Alam",
    image: "/trips/egypt-marsa-alam/003.jpg",
    position: {
      lat: 25.0719,
      lng: 34.8931,
    },
  },
  {
    name: "Luxor",
    image: "/trips/egypt-marsa-alam/008.jpg",
    position: {
      lat: 25.6872,
      lng: 32.6396,
    },
  },
  {
    name: "Świątynia Hatszepsut",
    image: "/trips/egypt-marsa-alam/014.jpg",
    position: {
      lat: 25.7382,
      lng: 32.6064,
    },
  },
  {
    name: "Dolina Królów",
    image: "/trips/egypt-marsa-alam/015.jpg",
    position: {
      lat: 25.7402,
      lng: 32.6014,
    },
  },
  {
    name: "Świątynia Luksorska",
    image: "/trips/egypt-marsa-alam/010.jpg",
    position: {
      lat: 25.6995,
      lng: 32.6396,
    },
  },
  {
    name: "Dream Lagoon",
    image: "/trips/egypt-marsa-alam/002.jpg",
    position: {
      lat: 24.9736,
      lng: 34.9417,
    },
  },
];

const MARSA_ALAM_CENTER = {
  lat: 25.3795,
  lng: 33.7663,
};

function MarsaAlamMap(path: string) {
  return (
    <Map
      path={path}
      center={MARSA_ALAM_CENTER}
      zoom={8}
      places={MARSA_ALAM_PLACES}
    />
  );
}

export default MarsaAlamMap;
