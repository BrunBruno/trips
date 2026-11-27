import React, { useState } from "react";
import AirportMap from "./maps/AirportMap";
import AccommodationMap from "./maps/AccommodationMap";
import "./map-explorer.css";
import { accommodations, airports } from "./map-data";

interface MapItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  count: number;
  component: React.ComponentType;
}

const MAP_VIEWS: MapItem[] = [
  {
    id: "airports",
    label: "Lotniska",
    description: "Odwiedzone porty lotnicze i przesiadki",
    icon: "✈️",
    count: airports.length,
    component: AirportMap,
  },
  {
    id: "accommodations",
    label: "Noclegi",
    description: "Hotele, apartamenty i bazy wypadowe",
    icon: "🏨",
    count: accommodations.length,
    component: AccommodationMap,
  },
  // Tutaj łatwo dopiszesz kolejne mapy, np.:
  // {
  //   id: "attractions",
  //   label: "Atrakcje",
  //   description: "Punkty widokowe i zabytki",
  //   icon: "📍",
  //   component: AttractionsMap,
  // },
];

export default function MapExplorer() {
  const [activeMapId, setActiveMapId] = useState<string>(MAP_VIEWS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const activeMap =
    MAP_VIEWS.find((item) => item.id === activeMapId) ?? MAP_VIEWS[0];
  const ActiveMapComponent = activeMap.component;

  return (
    <div className="map-explorer">
      {/* PŁYWAJĄCY PANEL BOCZNY PO LEWEJ (STYL GOOGLE MAPS) */}
      <aside
        className={`map-explorer-sidebar ${
          isSidebarOpen ? "" : "map-explorer-sidebar--collapsed"
        }`}
        aria-label="Wybór warstwy mapy"
      >
        <div className="map-explorer-header">
          <div>
            <h2 className="map-explorer-title">Eksplorator map</h2>
            <p className="map-explorer-subtitle">Wybierz kategorię punktów</p>
          </div>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="map-explorer-collapse-btn"
            title="Zwiń panel"
          >
            ✕
          </button>
        </div>

        <nav className="map-explorer-nav">
          {MAP_VIEWS.map((mapItem) => {
            const isActive = mapItem.id === activeMap.id;
            return (
              <button
                key={mapItem.id}
                type="button"
                onClick={() => setActiveMapId(mapItem.id)}
                className={`map-explorer-option ${
                  isActive ? "map-explorer-option--active" : ""
                }`}
              >
                <span className="map-explorer-option-icon">{mapItem.icon}</span>
                <span className="map-explorer-option-text">
                  <span className="map-explorer-option-label">
                    {mapItem.label}
                    {` (${mapItem.count})`}
                  </span>
                  <span className="map-explorer-option-desc">
                    {mapItem.description}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* PRZYCISK OTWARCIA PANELU PO ZWINIĘCIU */}
      {!isSidebarOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="map-explorer-expand-btn"
          title="Rozwiń listę map"
        >
          <span>☰</span>
          <span>
            {activeMap.icon} {activeMap.label}
          </span>
        </button>
      )}

      {/* KONTENER MAPY NA CAŁY EKRAN */}
      <main className="map-explorer-canvas">
        <ActiveMapComponent />
      </main>
    </div>
  );
}
