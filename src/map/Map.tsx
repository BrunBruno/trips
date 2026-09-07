import {
  APIProvider,
  Map as GoogleMap,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";

export type MapPlace = {
  name: string;
  image?: string;
  position: {
    lat: number;
    lng: number;
  };
};

type MapProps = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  zoomPortrait?: number;
  places: MapPlace[];
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Map({ center, zoom, zoomPortrait, places }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);

  const [isPortrait, setIsPortrait] = useState(
    () => window.matchMedia("(orientation: portrait)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const currentZoom =
    isPortrait && zoomPortrait !== undefined ? zoomPortrait : zoom;

  return (
    <APIProvider apiKey={API_KEY}>
      <GoogleMap
        defaultCenter={center}
        defaultZoom={currentZoom}
        gestureHandling="none"
        disableDefaultUI={false}
        className="world-map"
      >
        {places.map((place) => (
          <Marker
            key={place.name}
            position={place.position}
            title={place.name}
            onClick={() => setSelectedPlace(place)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.position}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div className="map-info">
              <img src={selectedPlace.image} alt={selectedPlace.name} />
              <strong>{selectedPlace.name}</strong>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}

export default Map;
