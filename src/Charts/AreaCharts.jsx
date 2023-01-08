import React from 'react';
import { XAxis, YAxis, Tooltip, CartesianGrid, Area, AreaChart } from 'recharts';
import { Link } from 'react-router-dom';


const AreaCharts = ({ data }) => {
  return (
    <div className='chartdiv'>
      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>Area Chart</h1>
      <AreaChart className='chart'
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>


    </div>
  )
}

export default AreaCharts