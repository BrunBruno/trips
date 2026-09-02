import {
  APIProvider,
  Map as GoogleMap,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import { useState } from "react";

export type MapPlace = {
  name: string;
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
  places: MapPlace[];
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Map({ center, zoom, places }: MapProps) {
  const [selectedPlace, setSelectedPlace] =
    useState<MapPlace | null>(null);

  return (
    <APIProvider apiKey={API_KEY}>
      <GoogleMap
        defaultCenter={center}
        defaultZoom={zoom}
        gestureHandling="greedy"
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
            <strong>{selectedPlace.name}</strong>
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}

export default Map;