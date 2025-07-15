export interface SalesRecord {
  DepartmentName: string;
  Date: string;
  NumberOfSales: number;
}

export interface AggregatedSales {
  [department: string]: number;
}

export interface Props {
  metrics: { processingTimeMs: number; departmentCount: number };
  downloadUrl: string;
}

export type Metrics = Props["metrics"];
