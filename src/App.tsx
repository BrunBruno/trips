import { useEffect, useState } from "react";
import ImgSvg from "./svg/svg/img";
import World from "./world-images/World";
import TravelOptionsList from "./travel-options/TravelOptionsList";
import MapSvg from "./svg/svg/map";
import TableSvg from "./svg/svg/table";
import MapExplorer from "./global-maps/MapExplorer";

type ViewType = "table" | "images" | "map";

function App() {
  const [view, setView] = useState<ViewType | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setView(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderContent = (opt: ViewType | null) => {
    switch (opt) {
      case "map":
        return <MapExplorer />;
      case "images":
        return <World />;
      case "table":
        return <TravelOptionsList />;
    }

    return (
      <div className="main-options-container">
        <div className="option-card" onClick={() => setView("table")}>
          <div className="card-icon">
            <TableSvg />
          </div>
          <span className="card-title">Tabela</span>
          <span className="card-subtitle">Nowe / Zakończone</span>
        </div>

        <div className="option-card" onClick={() => setView("images")}>
          <div className="card-icon">
            <ImgSvg t={false} />
          </div>
          <span className="card-title">Zdjęcia</span>
          <span className="card-subtitle">Wyjazdy / Lata</span>
        </div>

        <div className="option-card" onClick={() => setView("map")}>
          <div className="card-icon">
            <MapSvg />
          </div>
          <span className="card-title">Mapa</span>
          <span className="card-subtitle">Lotniska</span>
        </div>
      </div>
    );
  };

  return <main className="app-wrapper">{renderContent(view)}</main>;
}

export default App;
