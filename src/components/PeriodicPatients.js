import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function PeriodicPatients() {
    const [data, setData] = useState([{ pid: 1, data: 'Loading ...' }])

    const getData = async () => {
        try {
            const res = await axios.get("http://10.1.10.58:5002/periodic")
            setData(res.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 200000)
        return () => clearInterval(interval)
    }, [])


    return (

        <div>
            <h1>Perioidc Patients</h1>
            {
                
                data.map((patient) => (
                <li>{patient.pid}. {patient.data}</li>
                ))
                   }
            
                    <Link to='/'>Back</Link>
                </div>

    )
}

            export default PeriodicPatients
