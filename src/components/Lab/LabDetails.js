import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
import LabDetailsHeader from './LabDetailsHeader'
import LineChart from '../Charts/LineChart';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';

const {REACT_APP_PROXY_SERVER_IP} = process.env

function LabDetails( ) {

    const { id } = useParams()

    const [ currentData , setCurrentData] = useState({lid: 1 , temp: 90 , humidity: 34 , uv: 60 , pressure: 130 })

    const [humidity , setHumiditiy] = useState([90 , 87 , 92 , 92 , 97 ])
    const [temperature , setTemperature] = useState([32 , 34 , 35 , 40 , 34 ])
    const [uvR , setUvR] = useState([ 62 , 25 , 70 , 71 , 68])
    const [pressure , setPressure] = useState([129 , 130 , 131 , 131, 132 ])
    const [label , setLabel] = useState([4 , 3 , 2 , 1 , 0])

    const Chart = async () => {
        let label = []
        let hum = []
        let temp = []
        let uvr = []
        let p = []

        try{
            var res = await axios.get(`http://${REACT_APP_PROXY_SERVER_IP}:5000/periodic/${id}`)
            console.log(res.data)
            let count = res.data.length - 1;
            for(const obj of res.data){
                hum.push(obj.humidity)
                temp.push(obj.temp)
                uvr.push(obj.uv)
                p.push(obj.pressure)
                label.push(count)
                count--
            }
            setHumiditiy(hum)
            setTemperature(temp)
            setUvR(uvr)
            setPressure(p)
            setLabel(label)
            const curdata = res.data[res.data.length -1]
            setCurrentData(curdata)

        }catch(err) {
            console.error(err.message)
        }
    }

    //console.log(lineChartData)

    useEffect (() => {
        Chart()
        const periodicInterval = setInterval(() => {
          Chart()
        } , 200000)
        return () => clearInterval(periodicInterval)
    } , [ ])

    return (
      <div>
        <div class="main-panel" style={{padding: 10}}>
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title"> Lab ID : {id} </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to='/icu'>Back</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Lab Details</li>
                </ol>
              </nav>
            </div>
            <LabDetailsHeader data={currentData} />
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <LineChart data={humidity} label={label} title="Humidity" color='rgba(75,192,192,1)'/>
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <BarChart data={temperature} label={label} title="Temperature" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin stretch-card">
                <AreaChart data={uvR} label={label} title="UV Radiation" />
              </div>
              <div class="col-lg-6 grid-margin stretch-card">
                <LineChart data={pressure} label={label} title="Atomspheric Pressure" color='#FF1E1E'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LabDetails