import Map, { type MapPlace } from "./Map";

const BALI_PLACES: MapPlace[] = [
  { name: "Ubud", position: { lat: -8.5069, lng: 115.2625 } },
  { name: "Denpasar", position: { lat: -8.6705, lng: 115.2126 } },
  { name: "Kuta", position: { lat: -8.7189, lng: 115.1686 } },
  { name: "Nusa Penida", position: { lat: -8.7278, lng: 115.5444 } },
  { name: "Gili Air", position: { lat: -8.3581, lng: 116.0821 } },
];

const BALI_CENTER = { lat: -8.55, lng: 115.25 };

function BaliMap() {
  return <Map center={BALI_CENTER} zoom={9} places={BALI_PLACES} />;
}

export default BaliMap;
