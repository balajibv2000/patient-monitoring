import { useState , useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CriticalPatients() {
    const [data , setData] = useState([{pid: 1 , data:'Loading ...'}])

    const getData = async () => {
        try{
            const res = await axios.get("http://192.168.0.111:5000/critical")
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
            <h1>Critical Patients</h1>
            {
                data.map((patient) => (
                    <li>{patient.pid}. {patient.data}</li>
                ))
            }
            <Link to='/'>Back</Link>
        </div>

    )
}

export default CriticalPatients