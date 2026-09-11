import Map, { type MapPlace } from "./Map";

const EUROPEAN_UNION_PLACES: MapPlace[] = [
  {
    name: "Katowice",
    image: "/trips/european-union/001.jpg",
    position: {
      lat: 50.25757,
      lng: 19.01725,
    },
  },
  {
    name: "Wiedeń",
    image: "/trips/european-union/002.jpg",
    position: {
      lat: 48.185,
      lng: 16.3778,
    },
  },
  {
    name: "Zurych",
    image: "/trips/european-union/003.jpg",
    position: {
      lat: 47.37778,
      lng: 8.54028,
    },
  },
  {
    name: "Chur",
    image: "/trips/european-union/004.jpg",
    position: {
      lat: 46.85308,
      lng: 9.52892,
    },
  },
  {
    name: "St. Moritz",
    image: "/trips/european-union/005.jpg",
    position: {
      lat: 46.49797,
      lng: 9.84639,
    },
  },
  {
    name: "Tirano",
    image: "/trips/european-union/006.jpg",
    position: {
      lat: 46.21574,
      lng: 10.16661,
    },
  },
  {
    name: "Colico",
    image: "/trips/european-union/007.jpg",
    position: {
      lat: 46.13799,
      lng: 9.37524,
    },
  },
  {
    name: "Milan",
    image: "/trips/european-union/008.jpg",
    position: {
      lat: 45.48617,
      lng: 9.20456,
    },
  },
  {
    name: "Ventimiglia",
    image: "/trips/european-union/009.jpg",
    position: {
      lat: 43.79269,
      lng: 7.60988,
    },
  },
  {
    name: "Cannes",
    image: "/trips/european-union/010.jpg",
    position: {
      lat: 43.55416,
      lng: 7.01995,
    },
  },
  {
    name: "Marseille Saint-Charles",
    image: "/trips/european-union/011.jpg",
    position: {
      lat: 43.30348,
      lng: 5.37982,
    },
  },
  {
    name: "Montpellier Saint-Roch",
    image: "/trips/european-union/012.jpg",
    position: {
      lat: 43.60464,
      lng: 3.88099,
    },
  },
  {
    name: "Port-Bou",
    image: "/trips/european-union/013.jpg",
    position: {
      lat: 42.4248,
      lng: 3.15801,
    },
  },
  {
    name: "Girona",
    image: "/trips/european-union/014.jpg",
    position: {
      lat: 41.97917,
      lng: 2.81629,
    },
  },
  {
    name: "Lloret de Mar",
    image: "/trips/european-union/015.jpg",
    position: {
      lat: 41.6987,
      lng: 2.8474,
    },
  },
  {
    name: "Paris Gare de Lyon",
    image: "/trips/european-union/016.jpg",
    position: {
      lat: 48.8448,
      lng: 2.3735,
    },
  },
  {
    name: "Mannheim",
    image: "/trips/european-union/017.jpg",
    position: {
      lat: 49.47963,
      lng: 8.46986,
    },
  },
  {
    name: "Berlin",
    image: "/trips/european-union/018.jpg",
    position: {
      lat: 52.525,
      lng: 13.36944,
    },
  },
  {
    name: "Prague",
    image: "/trips/european-union/019.jpg",
    position: {
      lat: 50.08306,
      lng: 14.43583,
    },
  },
  {
    name: "Barcelona",
    image: "/trips/european-union/020.jpg",
    position: {
      lat: 41.3851,
      lng: 2.1734,
    },
  },
];

const EUROPEAN_UNION_CENTER = {
  lat: 47.8,
  lng: 9.0,
};

function EuropeanUnionMap(path: string) {
  return (
    <Map
      path={path}
      center={EUROPEAN_UNION_CENTER}
      zoom={5}
      zoomPortrait={4}
      places={EUROPEAN_UNION_PLACES}
      route={[
        "Katowice",
        "Wiedeń",
        "Zurych",
        "Chur",
        "St. Moritz",
        "Tirano",
        "Colico",
        "Milan",
        "Ventimiglia",
        "Cannes",
        "Marseille Saint-Charles",
        "Montpellier Saint-Roch",
        "Port-Bou",
        "Girona",
        "Lloret de Mar",
        "Girona",
        "Barcelona",
        "Girona",
        "Lloret de Mar",
        "Girona",
        "Paris Gare de Lyon",
        "Mannheim",
        "Berlin",
        "Prague",
        "Katowice",
      ]}
    />
  );
}

export default EuropeanUnionMap;
