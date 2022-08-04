import './App.css';
import { useState , useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeriodicPatients from './components/PeriodicPatients';
import MidcriticalPatients from './components/MidcriticalPatients';
import ICU from './components/ICU/ICU';
import PatientDetailsICU from './components/ICU/PatientDetailsICU';
import Navbar from './components/Navbar'

function App() {

  const [criticalData , setCriticalData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])

  const getCriticalData = async () => {
      try{
          var res = await axios.get("http://192.168.0.111:5000/critical")

          res.data.sort(( a , b) => {
              if ( a.pid < b.pid) return -1;
              if ( a.pid > b.pid) return 1;
              return 0;
          })
          setCriticalData(res.data)
      }catch(err) {
          console.error(err.message)
      }
  }

  useEffect (() => {
      getCriticalData()
      const criticalInterval = setInterval(() => {
        getCriticalData()
      } , 15000)
      return () => clearInterval(criticalInterval)
  } , [])

  return (
    <div className='App'>
      <BrowserRouter>
      <div class="container-scroller">
        <Navbar/>
        <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card corona-gradient-card">
               
                </div>
              </div>
            </div>
            <Routes>
              <Route path="/periodic" element={<PeriodicPatients />} />
              <Route path="/mid-critical" element={<MidcriticalPatients />} />
              <Route path="/icu" element={<ICU data={criticalData}/>} />
              <Route path='/icu/:id' element={<PatientDetailsICU />} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
