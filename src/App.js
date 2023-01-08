
import './App.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Components/productStates';
import productSaga from './Components/productSaga';
import { Auth0Provider } from "@auth0/auth0-react";
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartsHome from './Charts/ChartsHome';
import BarCharts from './Charts/BarCharts';
import PieCharts from './Charts/PieCharts';
import LineCharts from './Charts/LineCharts';
import AreaCharts from './Charts/AreaCharts';
import DoughnutCharts from './Charts/DoughnutCharts';
import SpiderCharts from './Charts/SpiderCharts';


const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: [saga]
});
saga.run(productSaga);

function App() {


  const data = [
    { name: "WhatsApp", value: 5000 },
    { name: "hike", value: 1000 },
    { name: "instagram", value: 4500 },
    { name: "twiter", value: 2500 }
  ]

  return (
    <div>
      <Auth0Provider
        domain="dev-58dbf5kszkvehhv4.us.auth0.com"
        clientId="dtyJrxkKXj6DoP6DEstmcWNcCgiwpR4D"
        redirectUri={window.location.origin}  >
        <BrowserRouter>

          <Provider store={store} >
            <Routes>


              <Route path='/' element={<Login />} />
              <Route path='dashboard' element={<DashBoard />} />

              <Route path='charthome' element={<ChartsHome />} />
              <Route path='barchart' element={<BarCharts data={data} />} />
              <Route path='piechart' element={<PieCharts data={data} />} />
              <Route path='linechart' element={<LineCharts data={data} />} />
              <Route path='areachart' element={<AreaCharts data={data} />} />
              <Route path='doughnutchart' element={<DoughnutCharts data={data} />} />
              <Route path='spiderchart' element={<SpiderCharts data={data} />} />

            </Routes>

          </Provider>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;
