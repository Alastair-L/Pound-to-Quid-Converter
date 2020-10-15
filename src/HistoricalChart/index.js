import React from 'react';
import { ChartCanvas, Chart, XAxis, YAxis } from "react-stockcharts";


export const HistoricalChart = () => {
    const height = 400;
    const width = 800;

    var margin = { left: 70, right: 70, top: 20, bottom: 30 };
    var gridHeight = height - margin.top - margin.bottom;
    var gridWidth = width - margin.left - margin.right;

    var showGrid = true;
    var yGrid = showGrid ? {
        innerTickSize: -1 * gridWidth,
        tickStrokeDasharray: 'Solid',
        tickStrokeOpacity: 0.2,
        tickStrokeWidth: 1
    } : {};
    var xGrid = showGrid ? {
        innerTickSize: -1 * gridHeight,
        tickStrokeDasharray: 'Solid',
        tickStrokeOpacity: 0.2,
        tickStrokeWidth: 1
    } : {};

    return <ChartCanvas
        width={width}
        height={height}
        margin={margin}
    >
        <Chart id={1}>
            <XAxis
                axisAt="bottom"
                orient="bottom"
                {...xGrid}
            />
            <YAxis
                axisAt="right"
                orient="right"
                ticks={5}
                {...yGrid}
            />;
        </Chart>
    </ChartCanvas>;
};



