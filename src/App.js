import './App.css';
import { useState , useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchEventSource } from "@microsoft/fetch-event-source";
import ICU from './components/ICU/ICU';
import Lab from './components/Lab/Lab';
import PatientDetailsICU from './components/ICU/PatientDetailsICU';
import Navbar from './components/Navbar'
import SpecialWard from './components/SpecialWard/SpecialWard';
import PatientDetailsSW from './components/SpecialWard/PatientDetailsSW';
import LabDetails from './components/Lab/LabDetails';
import Home from './components/Home';
import Documentation from './components/Documentation';

const {REACT_APP_PROXY_SERVER_IP} = process.env

function App() {

  const [criticalData , setCriticalData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])
  const [midCriticalData , setMidCriticalData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])
  const [periodicData , setPeriodicData] = useState([{lid: 1 , temp: 34 , humidity: 50 , uv: 60 , pressure: 780 }])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchEventSource(`http://${REACT_APP_PROXY_SERVER_IP}:5000`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "text/event-stream",
  //       },
  //       onopen(res) {
  //         if (res.ok && res.status === 200) {
  //           console.log("Connection made ", res);
  //         } else if (
  //           res.status >= 400 &&
  //           res.status < 500 &&
  //           res.status !== 429
  //         ) {
  //           console.log("Client side error ", res);
  //         }
  //       },
  //       onmessage(event) {
  //         console.log(event.data);
  //         var res = JSON.parse(event.data)
  //         if(res.route === 'critical') setCriticalData(res.data)
  //         if(res.route === 'mid-critical') setMidCriticalData(res.data)
  //         if(res.route === 'periodic') setPeriodicData(res.data)
  //       },
  //       onclose() {
  //         console.log("Connection closed by the server");
  //       },
  //       onerror(err) {
  //         console.log("There was an error from server", err);
  //       },
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className='App'>
      <BrowserRouter>
      <div class="container-scroller">
        <Navbar/>
        <div class="main-panel" style={{padding: 10}}>
          <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center">
            <h2 style={{fontFamily: 'Karla , sans-serif'}}>R I H M S</h2>
          </div>
        <div class="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab" element={<Lab data={periodicData}/>} />
              <Route path="/special-ward" element={<SpecialWard data={midCriticalData}/>} />
              <Route path="/icu" element={<ICU data={criticalData}/>} />
              <Route path='/icu/:id' element={<PatientDetailsICU />} />
              <Route path='/special-ward/:id' element={<PatientDetailsSW />} />
              <Route path='/lab/:id' element={<LabDetails />} />
              <Route path='/documentation' element={<Documentation/>} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
