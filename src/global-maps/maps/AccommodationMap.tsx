import HistoryMap from "../../history/map/HistoryMap";
import { accommodations } from "../map-data";

export default function AccommodationMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HistoryMap
        gestureHandling={true}
        //prettier-ignore
        position={{
          points: accommodations,
          zoom: 3,
        }}
      />
    </div>
  );
}
