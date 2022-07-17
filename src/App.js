import { useState , useEffect } from 'react'
import './App.css';
import axios from 'axios'
function App() {

  const [data , setData] = useState('')
  useEffect (() => {
    setInterval(() => {
      axios.get("http://192.168.0.111:5000/").then(res => {
      const data = res.data
      console.log(data)
      setData(data)
    })
    }, 15000)
  } , [])
  return (
    <div className="App">
      <h1>Data from sensor mote: {data}</h1>
    </div>
  );
}

export default App;
