import Map, { type MapPlace } from "./Map";

const BALI_PLACES: MapPlace[] = [
  {
    name: "Gili Air",
    image: "/trips/indonesia-bali/009.jpg",
    position: { lat: -8.3581, lng: 116.0821 },
  },
  {
    name: "Teletubbies Hill",
    image: "/trips/indonesia-bali/002.jpg",
    position: { lat: -8.7464, lng: 115.5752 },
  },
  {
    name: "Broken Beach",
    image: "/trips/indonesia-bali/010.jpg",
    position: { lat: -8.7357, lng: 115.4452 },
  },
  {
    name: "Diamond Beach",
    image: "/trips/indonesia-bali/001.jpg",
    position: { lat: -8.7754, lng: 115.6085 },
  },
  {
    name: "Mount Batur",
    image: "/trips/indonesia-bali/007.jpg",
    position: { lat: -8.2422, lng: 115.3756 },
  },
  {
    name: "Ulun Danu Beratan Temple",
    image: "/trips/indonesia-bali/006.jpg",
    position: { lat: -8.275, lng: 115.1669 },
  },
  {
    name: "Tegallalang Rice Terrace",
    image: "/trips/indonesia-bali/004.jpg",
    position: { lat: -8.4312, lng: 115.279 },
  },
  {
    name: "Ubud",
    image: "/trips/indonesia-bali/012.jpg",
    position: { lat: -8.5069, lng: 115.2625 },
  },
  {
    name: "Kanto Lampo Waterfall",
    image: "/trips/indonesia-bali/008.jpg",
    position: { lat: -8.4917, lng: 115.3295 },
  },
  {
    name: "Sekumpul Waterfall",
    image: "/trips/indonesia-bali/005.jpg",
    position: { lat: -8.1684, lng: 115.1822 },
  },
  {
    name: "Kuta",
    image: "/trips/indonesia-bali/003.jpg",
    position: { lat: -8.7189, lng: 115.1686 },
  },
  {
    name: "I Gusti Ngurah Rai Airport",
    image: "/trips/indonesia-bali/011.jpg",
    position: { lat: -8.7467, lng: 115.167 },
  },
];
const BALI_CENTER = { lat: -8.55, lng: 115.25 };

function BaliMap() {
  return <Map center={BALI_CENTER} zoom={9} places={BALI_PLACES} />;
}

export default BaliMap;
