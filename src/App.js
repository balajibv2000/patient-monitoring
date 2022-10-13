import './App.css';
import { useState , useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ICU from './components/ICU/ICU';
import Lab from './components/Lab/Lab';
import PatientDetailsICU from './components/ICU/PatientDetailsICU';
import Navbar from './components/Navbar'
import SpecialWard from './components/SpecialWard/SpecialWard';

function App() {

  const [criticalData , setCriticalData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])
  const [midCriticalData , setMidCriticalData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])
  const [periodicData , setPeriodicData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])

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

  const getMidCriticalData = async () => {
    try{
        var res = await axios.get("http://192.168.0.111:5000/mid-critical")

        res.data.sort(( a , b) => {
            if ( a.pid < b.pid) return -1;
            if ( a.pid > b.pid) return 1;
            return 0;
        })
        setMidCriticalData(res.data)
    }catch(err) {
        console.error(err.message)
    } 
  }

  const getPeriodiclData = async () => {
    try{
        var res = await axios.get("http://192.168.0.111:5000/periodic")

        res.data.sort(( a , b) => {
            if ( a.pid < b.pid) return -1;
            if ( a.pid > b.pid) return 1;
            return 0;
        })
        setPeriodicData(res.data)
    }catch(err) {
        console.error(err.message)
    } 
  }

  useEffect (() => {
      getCriticalData()
      getMidCriticalData()
      getPeriodiclData()

      const criticalInterval = setInterval(() => {
        getCriticalData()
      } , 15000)

      const midCriticalInterval = setInterval(() => {
        getMidCriticalData()
      } , 30000)

      const periodicInterval = setInterval(() => {
        getPeriodiclData()
      } , 200000)

      return () => {
        clearInterval(criticalInterval)
        clearInterval(midCriticalInterval)
        clearInterval(periodicInterval)
      }

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
              <Route path="/lab" element={<Lab data={periodicData}/>} />
              <Route path="/special-ward" element={<SpecialWard data={midCriticalData}/>} />
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
