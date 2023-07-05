export type PropsType = {
    top_location : {
        country : string,
        count : number,
        percent : number
    }[],
    top_sources : {
        source : string,
        count : number,
        percent : number
    }[]
}

export type DonutType = {
    countries : string[],
    colors : string[],
    percentArr : number[],
}

export type AreaGraphType = {
    views : number[],
    dateTime : string[]
}

export interface ChartConfig {
    height?: number;
    type?: ChartTypes;
    shadow?: {
        enabled?: boolean;
        color?: string;
        top?: number;
        left?: number;
        blur?: number;
        opacity?: number
    };
    toolbar? : {
        show : boolean
    }
    zoom?: {
        enabled?: boolean
    };
  }

export type ChartType = {
    chart?: ChartConfig;
    colors?: string[];
    stroke?: {
        curve?: ChartCurve;
        width? : number;
    };
    series?: ChartSerie[];
    title?: {
        text?: string;
        align?: ChartHorizontalAlign;
    };
    grid?: {
        borderColor?: string;
        row?: ChartRow;
    };
    markers?: {
      size?: number;
      colors?: string[];
      strokeColor?: string;
      strokeWidth?: number;
      strokeOpacity?: number;
      fillOpacity?: number;
      shape?: ChartShape;
      radius?: number;
      offsetX?: number;
      offsetY?: number;
      hover?: {
        size?: number
      }
    };
    dataLabels: {
        enabled: boolean
    };
    xaxis?: {
        type? : string;
        categories?: string[];
        title?: {
            text?: string;
        }
        axisBorder: {
            show: boolean;
        };
        axisTicks: {
            show: boolean;
        };
    };
    yaxis?: {
        title?: {
            text?: string;
        };
        min?: number;
        max?: number;
    };
    legend?: ChartLegend;
    tooltip?: {
        x: {
          format: string
        },
      },
    padding: {
        top: number,
        right: number,
        bottom: number,
        left: number,
    },
}