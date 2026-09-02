import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapPlace = {
  name: string;
  position: LatLngExpression;
};

type MapProps = {
  center: LatLngExpression;
  zoom: number;
  places: MapPlace[];
};

function Map({ center, zoom, places }: MapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className="world-map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        subdomains={["a", "b", "c", "d"]}
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {places.map((place) => (
        <Marker key={place.name} position={place.position}>
          <Popup>
            <strong>{place.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
