import React from 'react'

function LabList( { data } ) {

  return (
    <tr onClick={event =>  window.location.href=`lab/${data.lid}`}>
      <td>{data.lid}</td>
      <td className={(data.temp >= 20) ? "text-success" : "text-danger" }>{data.temp}&deg;C<i className={(data.temp >= 20) ? "mdi mdi-arrow-up" : "mdi mdi-arrow-down" }></i></td>
      <td className={(data.humidity <= 63) ? "text-success" : "text-danger" }>{data.humidity}%<i className={(data.humidity <= 63) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
      <td className={(data.uv <= 315) ? "text-success" : "text-danger" }>{data.uv} bps<i className={(data.uv <= 315) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
      <td className={(data.pressure <= 1030) ? "text-success" : "text-danger" }>{data.pressure} millibars<i className={(data.pressure <= 1030) ? "mdi mdi-arrow-down" : "mdi mdi-arrow-up" }></i></td>
    </tr>
  )
}

export default LabList