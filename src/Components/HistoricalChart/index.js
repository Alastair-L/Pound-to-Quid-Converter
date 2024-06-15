import React from 'react';
import {
  LineChart, Line, Tooltip, XAxis, CartesianGrid, YAxis
} from 'recharts';

export const HistoricalChart = () => {
  const data = [1, 2, 3, 4, 5, 8].map((j, i) => (
    {
      name: `day ${i}`,
      pound: 1,
      aud: (Math.random()/2) + (5-i)*0.1
    }));
  console.log(data);
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 5, right: 20, left: 10, bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis domain={[0,2]} />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="pound" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="aud" stroke="#387908" yAxisId={0} />
    </LineChart>
  );
};
