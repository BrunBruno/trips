import Map, { type MapPlace } from "./Map";

const KUALA_LUMPUR_PLACES: MapPlace[] = [
  {
    name: "Kuala Lumpur",
    image: "/trips/malaysia-kuala-lumpur/001.jpg",
    position: {
      lat: 3.139,
      lng: 101.6869,
    },
  },
  {
    name: "Petronas Towers",
    image: "/trips/malaysia-kuala-lumpur/002.jpg",
    position: {
      lat: 3.1579,
      lng: 101.7116,
    },
  },
  {
    name: "KLCC Park",
    image: "/trips/malaysia-kuala-lumpur/003.jpg",
    position: {
      lat: 3.1556,
      lng: 101.7123,
    },
  },
  {
    name: "Świątynia Thean Hou",
    image: "/trips/malaysia-kuala-lumpur/005.jpg",
    position: {
      lat: 3.1248,
      lng: 101.6869,
    },
  },
  {
    name: "Lord Murugan Statue",
    image: "/trips/malaysia-kuala-lumpur/006.jpg",
    position: {
      lat: 3.2379,
      lng: 101.684,
    },
  },
  {
    name: "Batu Caves",
    image: "/trips/malaysia-kuala-lumpur/007.jpg",
    position: {
      lat: 3.2379,
      lng: 101.6847,
    },
  },
];

const KUALA_LUMPUR_CENTER = {
  lat: 3.139,
  lng: 101.6869,
};

function KualaLumpurMap(path: string) {
  return (
    <Map
      path={path}
      center={KUALA_LUMPUR_CENTER}
      zoom={11}
      places={KUALA_LUMPUR_PLACES}
    />
  );
}

export default KualaLumpurMap;
