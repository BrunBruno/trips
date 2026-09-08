import {
  APIProvider,
  Map as GoogleMap,
  Marker,
  InfoWindow,
  Polyline,
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
  route?: string[];
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Map({ center, zoom, zoomPortrait, places, route }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);

  const [isPortrait, setIsPortrait] = useState(
    () => window.matchMedia("(orientation: portrait)").matches,
  );

  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Control" &&
        event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT
      ) {
        setIsCtrlPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (
        event.key === "Control" &&
        event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT
      ) {
        setIsCtrlPressed(false);
      }
    };

    const handleBlur = () => {
      setIsCtrlPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const currentZoom =
    isPortrait && zoomPortrait !== undefined ? zoomPortrait : zoom;

  const routePlaces =
    route
      ?.map((name) => places.find((place) => place.name === name))
      .filter((place): place is MapPlace => place !== undefined) ?? [];

  return (
    <APIProvider apiKey={API_KEY}>
      <GoogleMap
        defaultCenter={center}
        defaultZoom={currentZoom}
        gestureHandling={isCtrlPressed ? "greedy" : "none"}
        disableDefaultUI={false}
        className="world-map"
      >
        {routePlaces.length > 1 && (
          <Polyline
            path={routePlaces.map((place) => place.position)}
            options={{
              strokeColor: "#1976D2",
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}

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
              {selectedPlace.image && (
                <img src={selectedPlace.image} alt={selectedPlace.name} />
              )}
              <strong>{selectedPlace.name}</strong>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}

export default Map;
