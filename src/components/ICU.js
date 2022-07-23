import { useState , useEffect } from 'react'
import axios from 'axios'
import PatientList from './PatientList'

function ICU() {
    const [data , setData] = useState([{pid: 1 , oxy: 90 , temp: 34 , pulse: 60 , bp: 130 }])

    const getData = async () => {
        try{
            var res = await axios.get("http://192.168.0.111:5000/critical")

            res.data.sort(( a , b) => {
                if ( a.pid < b.pid) return -1;
                if ( a.pid > b.pid) return 1;
                return 0;
            })
            setData(res.data)
        }catch(err) {
            console.error(err.message)
        }
    }

    useEffect (() => {
        getData()
        const interval = setInterval(() => {
            getData()
        } , 15000)
        return () => clearInterval(interval)
    } , [])


   return (

        <div>
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">ICU Patients</h4>
                <p class="card-description"> List of all ICU patients</p>
                <div class="table-responsive">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Oxygen</th>
                        <th>Body Temperature</th>
                        <th>Pulse</th>
                        <th>Blood Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((patient) => <PatientList data={patient} />)}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ICU
