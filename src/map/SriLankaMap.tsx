import Map, { type MapPlace } from "./Map";

const SRI_LANKA_PLACES: MapPlace[] = [
  {
    name: "Colombo",
    position: {
      lat: 6.9271,
      lng: 79.8612,
    },
  },
  {
    name: "Dambulla",
    position: {
      lat: 7.8601,
      lng: 80.6517,
    },
  },
  {
    name: "Kandy",
    position: {
      lat: 7.2906,
      lng: 80.6337,
    },
  },
  {
    name: "Ella",
    position: {
      lat: 6.8712,
      lng: 81.045,
    },
  },
  {
    name: "Udawalawa",
    position: {
      lat: 6.4385,
      lng: 80.8524,
    },
  },
  {
    name: "Tangalle",
    position: {
      lat: 6.0243,
      lng: 80.7937,
    },
  },
  {
    name: "Unawatuna",
    position: {
      lat: 6.0084,
      lng: 80.249,
    },
  },
];

const SRI_LANKA_CENTER = {
  lat: 6.9218,
  lng: 80.4851,
};

function SriLankaMap(path: string) {
  return (
    <Map
      path={path}
      center={SRI_LANKA_CENTER}
      zoom={8}
      places={SRI_LANKA_PLACES}
    />
  );
}

export default SriLankaMap;
