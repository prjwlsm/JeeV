import React from 'react';
import { XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, BarChart } from 'recharts';
import { Link } from 'react-router-dom';

const BarCharts = ({ data }) => {


  return (
    <div className='chartdiv'>
      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>BarChart</h1>

      <BarChart className='chart'
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </div>
  )
}

export default BarCharts