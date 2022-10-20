import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Progressbar({data}) {

  return (

    <div style={{ width: 200, height: 200 , margin: 30}}>
      <CircularProgressbar
        value={data}
        text={`${data}%`}
        styles={{
          root: {},
          path: {
            stroke: '#2192FF',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#111111',
            strokeLinecap: 'butt',
            transformOrigin: 'center center',
          },
          text: {
            fill: '#f88',
            fontSize: '12px',
          },
          background: {
            fill: '#3e98c7',
          },
        }}
      />
    </div>
    

  )
  
}