import React from 'react'
import CircularProgressbar from '../Charts/CircularProgressbar'
import GuageMeter from '../Charts/GuageMeter'
import Thermometer from '../Charts/Thermometer'

function DetailsHeader({ data }) {
  return (
    <div>
    <div class="row">
        <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-6">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.humidity}%</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.humidity <= 63) ? "text-success" : "text-danger"}`}>{(data.oxy <= 63) ? `+${data.humidity - 63}%` : `-${63 - data.humidity}%`}</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.humidity <= 63 ) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.humidity <= 63 ) ? "mdi-arrow-top-right" : "mdi-arrow-bottom-left"} icon-item`}></span>
                </div>
                </div>
            </div>
                <h6 class="text-muted font-weight-normal">Humidity</h6>
            </div>
            <div class="d-flex justify-content-center">
                <CircularProgressbar data={data.humidity}/>
            </div>
            </div>
        </div>
        <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-4">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.pressure}</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.pressure <= 1030) ? "text-success" : "text-danger"}`}>{(data.pressure <= 1030) ? `-${1030 - data.pressure} mmHg` : `+${data.pressure - 1030} mmHg`}</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.pressure <= 1030) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.pressure <= 1030) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
            <h6 class="text-muted font-weight-normal">Pressure (millibars)</h6>
            </div>
            <div class="d-flex justify-content-center">
                <GuageMeter data={data.pressure} max={860} min={680} step={20}/>
            </div>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-4">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.uv} bps</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.uv <= 315) ? "text-success" : "text-danger"}`}>{(data.uv <= 315) ? `-${315 - data.uv} bps` : `+${data.uv - 315} bps`}</p>
                </div>
                </div>
                <div class="col-2">
                <div class={`icon ${(data.uv <= 315) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.uv <= 315) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
            <h6 class="text-muted font-weight-normal">UV Raditation</h6>
            </div>
        </div>
        </div>
        <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-6">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.temp}&deg;C</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.temp <= 20) ? "text-success" : "text-danger"}`}>{(data.temp <= 20) ? `-${20 - data.temp}` : `+${data.temp - 20}`}&deg;C</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.temp <= 20) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.temp <= 20) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
                <h6 class="text-muted font-weight-normal">Temperature</h6>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <Thermometer data={data.temp}/>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DetailsHeader