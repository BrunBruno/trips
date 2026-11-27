import HistoryMap from "../../history/map/HistoryMap";
import { airports } from "../map-data";

export default function AirportMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HistoryMap
        gestureHandling={true}
        position={{
          points: airports,
          zoom: 3,
        }}
      />
    </div>
  );
}
