import {
  BarControllerDatasetOptions,
  Chart,
  ChartDataset
} from "chart.js";
import { Guid } from "guid-typescript";

export interface Quote {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface TQuote {
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}

export interface Price {
  Open: number;
  High: number;
  Low: number;
  Closed: number;
  Volume: number;
  ChangePercent: number;
  Date: Date;
  DateType: number;
  Id: Guid;
  Market: string;
  Symbol: string;
  ItemType: number;
}

// LISTING

export interface IndicatorListing {
  name: string;
  uiid: string;
  legendTemplate: string;
  endpoint: string;
  category: string;
  chartType: string;
  order: number,
  chartConfig: ChartConfig | null;
  parameters: IndicatorParamConfig[];
  results: IndicatorResultConfig[];
}

export interface News {
  Title: string;
  Url: string;
  Author: string;
  Image: string;
  Source: string;
  RelevanceScore: number;
  SentimentScore: number,
  SentimentLabel: string;
  Date: string;
  DateType: number;
  Id: string;
  Market: string,
  Symbol: string,
  ItemType: number
}


export interface Portfolios {
  uer: string;
  symbol: string;
}

export interface IndicatorParamConfig {
  displayName: string;
  paramName: string;
  dataType: string;
  defaultValue: number;
  minimum: number;
  maximum: number;
}

export interface IndicatorResultConfig {
  displayName: string;
  tooltipTemplate: string;
  dataName: string;
  dataType: string;
  lineType: string;
  stack: string,
  lineWidth: number;
  defaultColor: string;
  fill: ChartFill;
  order: number
}

export interface ChartConfig {
  minimumYAxis: number | null;
  maximumYAxis: number | null;
  thresholds: ChartThreshold[];
}

export interface ChartThreshold {
  value: number;
  color: string;
  style: string;
  fill: ChartFill;
}

export interface ChartFill {
  target: string,
  colorAbove: string,
  colorBelow: string
}

// SELECTIONS

export interface IndicatorSelection {
  ucid: string,
  uiid: string,
  label: string,
  chartType: string,
  params: IndicatorParam[],
  results: IndicatorResult[],
  chart?: Chart
}

export interface IndicatorParam {
  paramName: string,
  displayName: string,
  minimum: number,
  maximum: number,
  value?: number
}

export interface IndicatorResult {
  label: string,
  displayName: string,
  dataName: string,
  color: string,
  lineType: string,
  lineWidth: number,
  order: number,
  dataset: ChartDataset
}

// MISSING CHART.JS TYPINGS (OVERRIDES)
// bug: https://github.com/chartjs/chartjs-chart-financial/pull/115
type CandleDatasetOption = BarControllerDatasetOptions & {
  borderColor: {
    up: string,
    down: string,
    unchanged: string
  };
}
