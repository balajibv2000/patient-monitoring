import React from 'react'
import CircularProgressbar from './Charts/CircularProgressbar'
import GuageMeter from './Charts/GuageMeter'
import Thermometer from './Charts/Thermometer'

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
                    <h3 class="mb-0">{data.temp}&deg;C</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.temp <= 35) ? "text-success" : "text-danger"}`}>{(data.temp <= 35) ? `-${35 - data.temp}` : `+${data.temp - 35}`}&deg;C</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.temp <= 35) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.temp <= 35) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
                <h6 class="text-muted font-weight-normal">Body Temperature</h6>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <Thermometer data={data.temp}/>
            </div>
        </div>
        </div>
        <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-4">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.bp}</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.bp <= 130) ? "text-success" : "text-danger"}`}>{(data.bp <= 130) ? `-${130 - data.bp} mmHg` : `+${data.bp - 130} mmHg`}</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.bp <= 130) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.bp <= 130) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
            <h6 class="text-muted font-weight-normal">Blood Pressure (mmHg)</h6>
            </div>
            <div class="d-flex justify-content-center">
                <GuageMeter data={data.bp} max={200} min={100} step={10}/>
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
                    <h3 class="mb-0">{data.pulse} bps</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.pulse <= 70) ? "text-success" : "text-danger"}`}>{(data.pulse <= 70) ? `-${72 - data.pulse} bps` : `+${data.pulse - 72} bps`}</p>
                </div>
                </div>
                <div class="col-2">
                <div class={`icon ${(data.pulse <= 70) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.pulse <= 70) ? "mdi-arrow-bottom-right" : "mdi-arrow-top-left"} icon-item`}></span>
                </div>
                </div>
            </div>
            <h6 class="text-muted font-weight-normal">Pulse Rate</h6>
            </div>
        </div>
        </div>
        <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <div class="row justify-content-start">
                <div class="col-6">
                <div class="d-flex align-items-center align-self-start">
                    <h3 class="mb-0">{data.oxy}%</h3>
                    <p class={`ms-2 mb-0 font-weight-medium ${(data.oxy >= 92) ? "text-success" : "text-danger"}`}>{(data.oxy >= 92) ? `+${data.oxy - 92}%` : `-${92 - data.oxy}%`}</p>
                </div>
                </div>
                <div class="col-3">
                <div class={`icon ${(data.oxy >= 92 ) ? "icon-box-success" : "icon-box-danger"}`}>
                    <span class={`mdi ${(data.oxy >= 92 ) ? "mdi-arrow-top-right" : "mdi-arrow-bottom-left"} icon-item`}></span>
                </div>
                </div>
            </div>
                <h6 class="text-muted font-weight-normal">Oxygen Level</h6>
            </div>
            <div class="d-flex justify-content-center">
                <CircularProgressbar data={data.oxy}/>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DetailsHeader