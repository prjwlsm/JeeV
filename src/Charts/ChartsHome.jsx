import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


const ChartsHome = () => {


  return (
    <div className='crthomediv'>
      <Link to='/'> <button style={{ position: "relative", top: "10px", left: "10px", width: "100px", backgroundColor: "brown", color: 'white' }} >Back</button></Link>
      <Link to='/barchart'><button>Bar Chart</button></Link>
      <Link to='/piechart'><button>Pie Chart</button></Link>
      <Link to='/linechart'><button>Line Chart</button></Link>
      <Link to='/areachart'><button>Area Chart</button></Link>
      <Link to='/doughnutchart'><button>Doughnut Chart</button></Link>
      <Link to='/spiderchart'><button>Spider Chart</button></Link>


    </div>
  )
}


export default ChartsHome