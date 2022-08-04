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
<<<<<<< HEAD
  return (
    <div className="App">
      <div class="background-image">
      
      <BrowserRouter>
    
        <Navbar />
=======

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
      <Navbar/>
>>>>>>> 420857dfb588ad9048585a5d7972e05615c02674
        <Routes>
          
          <Route path="/periodic" element={<PeriodicPatients />} />
          <Route path="/mid-critical" element={<MidcriticalPatients />} />
          <Route path="/icu" element={<ICU data={criticalData}/>} />
          <Route path='/icu/:id' element={<PatientDetailsICU />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
