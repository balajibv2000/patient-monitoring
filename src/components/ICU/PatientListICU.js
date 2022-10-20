import React from 'react'
import { Link } from 'react-router-dom'

function PatientList( { data } ) {

  return (
      <tr onClick={event =>  window.location.href=`icu/${data.pid}`}>
        <td>{data.pid}</td>
        <td className={(data.oxy >= 92) ? "text-success" : "text-danger" }>{data.oxy}%<i className={(data.oxy >= 92) ? "mdi mdi-arrow-up" : "mdi mdi-arrow-down" }></i></td>
        <td className={(data.temp <= 35) ? "text-success" : "text-danger" }>{data.temp} &deg;C<i className={(data.temp <= 35) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
        <td className={(data.pulse <= 70) ? "text-success" : "text-danger" }>{data.pulse} bps<i className={(data.pulse <= 70) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
        <td className={(data.bp <= 130) ? "text-success" : "text-danger" }>{data.bp} mmHg<i className={(data.bp <= 130) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
      </tr>
    
  )
}

export default PatientList