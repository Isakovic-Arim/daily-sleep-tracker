import React from 'react';

import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, AreaSeries } from 'react-vis';

export default function Graph({statistics}) {

    const dataArr = statistics.map(statistic => {
        const date = new Date(statistic.date.substring(0, 10));
        return {x: date.getMonth() + '/' + date.getDate(), y: parseFloat(statistic.duration.substring(0, 2))}
    });

    return (
        <div className='-z-10'>
            <XYPlot width={450} height={300} xType='ordinal'>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <AreaSeries
                    className="area-series-example"
                    curve="curveNatural"
                    data={dataArr}
                />
            </XYPlot>
        </div>
    );
}