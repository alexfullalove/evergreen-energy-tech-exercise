export interface Costs {
  label: string;
  cost: number;
}

export interface HeatPumps {
  label: string;
  outputCapacity: number;
  costs: Costs[];
}
