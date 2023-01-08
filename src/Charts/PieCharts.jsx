import React from 'react'
import { Tooltip, PieChart, Pie } from 'recharts';
import { Link } from 'react-router-dom';


const PieCharts = ({ data }) => {
  return (
    <div className='chartdiv'>

      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>Pie Chart</h1>
      <PieChart className='chart' width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>


    </div>
  )
}

export default PieCharts