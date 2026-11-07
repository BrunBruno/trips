import { useEffect, useRef } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";

import type { Position } from "../../types";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";

type HistoryMapProps = {
  position: Position;
  hoveredMarker: number | null;
  isFromPhoto?: boolean;
  setHoveredMarker: (markerIndex: number | null) => void;
};

function MapController({
  position,
  hoveredMarker,
  isFromPhoto,
}: {
  position: Position;
  hoveredMarker: number | null;
  isFromPhoto?: boolean;
}) {
  const map = useMap();
  const wasFromPhotoRef = useRef<boolean>(false);


  useEffect(() => {
    if (!map) return;

    if (
      isFromPhoto &&
      hoveredMarker !== null &&
      position.points[hoveredMarker]
    ) {
      const targetPoint = position.points[hoveredMarker];

      map.panTo({ lat: targetPoint.lat, lng: targetPoint.lng });

      if (!wasFromPhotoRef.current) {
        map.setZoom(position.zoom + 1);
      }

      wasFromPhotoRef.current = true;
    } else if (hoveredMarker === null && wasFromPhotoRef.current) {
      const defaultCenter = {
        lat:
          position.points.reduce((sum, point) => sum + point.lat, 0) /
          position.points.length,
        lng:
          position.points.reduce((sum, point) => sum + point.lng, 0) /
          position.points.length,
      };

      map.panTo(defaultCenter);
      map.setZoom(position.zoom);

      wasFromPhotoRef.current = false;
    }
  }, [map, hoveredMarker, isFromPhoto, position]);

  return null;
}

function HistoryMap({
  position,
  hoveredMarker,
  isFromPhoto,
  setHoveredMarker,
}: HistoryMapProps) {
  if (!position.points.length) return null;

  const defaultCenter = {
    lat:
      position.points.reduce((sum, point) => sum + point.lat, 0) /
      position.points.length,
    lng:
      position.points.reduce((sum, point) => sum + point.lng, 0) /
      position.points.length,
  };

  return (
    <APIProvider apiKey={API_KEY}>
      <GoogleMap
        defaultCenter={defaultCenter}
        defaultZoom={position.zoom}
        gestureHandling="none"
        disableDefaultUI={true}
        className="history-map"
        mapId={MAP_ID}
        style={{ width: "100%", height: "100%" }}
      >
        <MapController
          position={position}
          hoveredMarker={hoveredMarker}
          isFromPhoto={isFromPhoto}
        />

        {position.points.map((point, index) => {
          const isCurrentHovered = hoveredMarker === index;

          return (
            <AdvancedMarker
              key={`${point.cap}-${index}`}
              position={{ lat: point.lat, lng: point.lng }}
              zIndex={isCurrentHovered ? 1000 : index}
              onMouseEnter={() => setHoveredMarker(index)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              <div
                className={`map-marker-label${isCurrentHovered ? " active" : ""}`}
                style={point.typ === "x" ? { display: "none" } : {}}
              >
                <svg
                  viewBox="-4 0 36 36"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="none" fill="none">
                    <g
                      id="Vivid-Icons"
                      transform="translate(-125.000000, -643.000000)"
                    >
                      <g
                        id="Icons"
                        transform="translate(37.000000, 169.000000)"
                      >
                        <g
                          id="map-marker"
                          transform="translate(78.000000, 468.000000)"
                        >
                          <g transform="translate(10.000000, 6.000000)">
                            <path
                              d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
                              fill={
                                point.typ === "n"
                                  ? "#ff922b"
                                  : point.typ === "l"
                                    ? "#4c6ef5"
                                    : "#fa5252"
                              }
                            ></path>
                            <circle
                              fill={
                                point.typ === "n"
                                  ? "#e8590c"
                                  : point.typ === "l"
                                    ? "#364fc7"
                                    : "#c92a2a"
                              }
                              fillRule="nonzero"
                              cx="14"
                              cy="14"
                              r="7"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>{point.cap}</span>
              </div>
            </AdvancedMarker>
          );
        })}
      </GoogleMap>
    </APIProvider>
  );
}

export default HistoryMap;
