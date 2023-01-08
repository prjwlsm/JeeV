import { Link } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const SpiderCharts = ({ data }) => {
  return (
    <div className='chartdiv'>
      <Link to={'/charthome'}> <button> Charts Home</button></Link>
      <h1>Spider Chart</h1>

      <RadarChart className='chart' height={500} width={500}
        outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="value" stroke="green"
          fill="green" fillOpacity={0.5} />
      </RadarChart>


    </div>
  )
}

export default SpiderCharts