import type { Transit } from "../../types";
import BusSvg from "./bus";
import CarSvg from "./car";
import FerrySvg from "./ferry";
import PlaneSvg from "./plane";
import TaxiSvg from "./taxi";
import TrainSvg from "./train";
import TukTukSvg from "./tuktuk";

type Props = {
  t: Transit | undefined;
};

export default function GetSvg({ t }: Props) {
  switch (t) {
    case "bus":
      return <BusSvg />;
    case "car":
      return <CarSvg />;
    case "ferry":
      return <FerrySvg />;
    case "plane":
      return <PlaneSvg />;
    case "taxi":
      return <TaxiSvg />;
    case "train":
      return <TrainSvg />;
    case "tuktuk":
      return <TukTukSvg />;
  }

  return <></>;
}
