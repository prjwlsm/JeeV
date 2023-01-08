import React from 'react';
import { PieChart, Pie } from 'recharts';
import { Link } from 'react-router-dom';

const DoughnutCharts = ({ data }) => {
 

  return (

    <div className='chartdiv'>
      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>Doughnut Chart</h1>
      <PieChart className='chart' width={400} height={400}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={90} fill="#82ca9d" label />
      </PieChart>

    </div>
  )
}

export default DoughnutCharts