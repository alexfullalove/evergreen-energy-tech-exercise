import houses from "./data/houses.json";
import heatPumps from "./data/heat-pumps.json";
import { Houses } from "./models/Houses";
import { HeatPumps } from "./models/HeatPumps";

export const createFormData = (
  houseData: Houses[],
  heatPumpData: HeatPumps[]
): string => {
  return "house";
};

createFormData(houses, heatPumps);
