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
  images?: number[];
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
  path: string;
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Map({ center, zoom, zoomPortrait, places, route, path }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);

  const [selectedImage, setSelectedImage] = useState(0);

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

  const getImages = (place: MapPlace) => {
    if (place.images && place.images.length > 0) {
      return place.images.map(
        (p) => `${path}${String(p).padStart(3, "0")}.jpg`,
      );
    }

    return [];
  };

  const handleSelectPlace = (place: MapPlace) => {
    setSelectedPlace(place);
    setSelectedImage(0);
  };

  const handleClose = () => {
    setSelectedPlace(null);
    setSelectedImage(0);
  };

  const images = selectedPlace ? getImages(selectedPlace) : [];

  const hasMultipleImages = images.length > 1;

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

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
            onClick={() => handleSelectPlace(place)}
          />
        ))}

        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.position}
            onCloseClick={handleClose}
          >
            <div className="map-info">
              {/* GALERIA */}
              {images.length > 0 && (
                <div className="map-gallery">
                  <img
                    className="map-gallery-main"
                    src={images[selectedImage]}
                    alt={`${selectedPlace.name} ${selectedImage + 1}`}
                  />

                  {hasMultipleImages && (
                    <>
                      <button
                        type="button"
                        className="map-gallery-button map-gallery-prev"
                        onClick={previousImage}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        className="map-gallery-button map-gallery-next"
                        onClick={nextImage}
                        aria-label="Next image"
                      >
                        ›
                      </button>

                      <div className="map-gallery-counter">
                        {selectedImage + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* NAZWA */}
              <div className="map-info-content">
                <strong className="map-info-title">{selectedPlace.name}</strong>

                {/* MINIATURY */}
                {hasMultipleImages && (
                  <div className="map-gallery-thumbnails">
                    {images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        className={`map-gallery-thumbnail ${
                          index === selectedImage ? "active" : ""
                        }`}
                        onClick={() => setSelectedImage(index)}
                        aria-label={`Show image ${index + 1}`}
                      >
                        <img src={image} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}

export default Map;
