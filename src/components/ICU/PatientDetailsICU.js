import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { fetchEventSource } from "@microsoft/fetch-event-source";
import DetailsHeader from '../DetailsHeader';
import LineChart from '../Charts/LineChart';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';


const {REACT_APP_PROXY_SERVER_IP} = process.env

function PatientDetailsICU( ) {

    const { id } = useParams()

    const [ currentData , setCurrentData] = useState({pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 })

    const [oxygen , setOxygen] = useState([90 , 87 , 92 , 92 , 97 ])
    const [temperature , setTemperature] = useState([32 , 34 , 35 , 40 , 34 ])
    const [pulseRate , setPulseRate] = useState([ 62 , 25 , 70 , 71 , 68])
    const [bloodPressure , setBloodPressure] = useState([129 , 130 , 131 , 131, 132 ])
    const [label , setLabel] = useState([4 , 3 , 2 , 1 , 0])


    // useEffect(() => {
    //   const fetchData = async () => {
    //     await fetchEventSource(`http://${REACT_APP_PROXY_SERVER_IP}:5000/critical/${id}`, {
    //       method: "POST",
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
    //         let label = []
    //         let oxy = []
    //         let temp = []
    //         let pulse = []
    //         let bp = []
    //         var res = JSON.parse(event.data)
    //         console.log(res)
    //         let count = res.length - 1;
    //         for(const obj of res){
    //             oxy.push(obj.oxy)
    //             temp.push(obj.temp)
    //             pulse.push(obj.pulse)
    //             bp.push(obj.bp)
    //             label.push(count)
    //             count--
    //         }
    //         setOxygen(oxy)
    //         setTemperature(temp)
    //         setPulseRate(pulse)
    //         setBloodPressure(bp)
    //         setLabel(label)
    //         const curdata = res[res.length -1]
    //         setCurrentData(curdata)
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
      <div>
        <div class="main-panel" style={{padding: 10}}>
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title"> ICU Patient ID : {id} </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to='/icu'>Back</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Patient Details</li>
                </ol>
              </nav>
            </div>
            <DetailsHeader data={currentData} />
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <LineChart data={oxygen} label={label} title="Oxygen Levels" color='rgba(75,192,192,1)'/>
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <BarChart data={temperature} label={label} title="Temperature" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <AreaChart data={pulseRate} label={label} title="Pulse Rate" />
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <LineChart data={bloodPressure} label={label} title="Blood Pressure" color='#FF1E1E'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PatientDetailsICU