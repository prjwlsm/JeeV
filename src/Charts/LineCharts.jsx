import React from 'react';
import { Tooltip, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { Link } from 'react-router-dom';

const LineCharts = ({ data }) => {
  return (
    <div className='chartdiv'>
      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>LineChart</h1>
      <LineChart className='chart'
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>

    </div>
  )
}

export default LineCharts