import HomeImg from '../img/home-img.png'
import PESLogo from '../img/pes-university.png'

export default function Home(){
    return(
        <div>
            <div className='row' style={{"marginBottom": "100px", "marginTop": "100px" }}>
                <div className='col-sm'>
                    <h1 class="text-gradient">Real-time <br /> IoT <br />Healthcare Monitoring System</h1>
                </div>
                <div className='col'>
                    <img src={HomeImg} width="650px" style={{"marginLeft": "1px"}}alt="home" />
                </div>
            </div>
            <div className='page-header mt-5'>
                <h1>
                    Tech Used
                </h1>
            </div>
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Operating System</h5>
                            <h2>Contiki-OS</h2>
                            <h6 class="text-muted font-weight-normal">An open-source OS for wireless sensor networks </h6>
                            <div class="text-center">
                                <i class="icon-lg mdi mdi-monitor text-success ms-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Protocols</h5>
                            <h2>RPL & CoAP</h2>
                            <h6 class="text-muted font-weight-normal">Protocols in Transport and Application Layer</h6>
                            <div class="text-center">
                                <i class="icon-lg mdi mdi-access-point-network text-danger ms-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Backend</h5>
                            <h2>NodeJs</h2>
                            <h6 class="text-muted font-weight-normal">An open-source server environment</h6>
                            <div class="text-center">
                                <i class="icon-lg mdi mdi-nodejs text-warning ms-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Frontend</h5>
                            <h2>ReactJs</h2>
                            <h6 class="text-muted font-weight-normal">library for building UI based on components.</h6>
                            <div class="text-center">
                                <i class="icon-lg mdi mdi-codepen text-primary ms-auto"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-header mt-5'>
                <h1>
                    Developed By
                </h1>
            </div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-titel'>Capstone Team 29</h4>
                            <div className='table-reponsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Section</th>
                                            <th>Department</th>
                                            <th>SRN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Durgalakshmi V</td>
                                            <td>B</td>
                                            <td>CSE</td>
                                            <td>PES2UG19CS120</td>
                                        </tr>
                                        <tr>
                                            <td>Bhoomika P Bhavimath</td>
                                            <td>B</td>
                                            <td>CSE</td>
                                            <td>PES2UG19CS091</td>
                                        </tr>
                                        <tr>
                                            <td>Rahul B</td>
                                            <td>E</td>
                                            <td>CSE</td>
                                            <td>PES2UG19CS313</td>
                                        </tr>
                                        <tr>
                                            <td>Balaji B V</td>
                                            <td>B</td>
                                            <td>CSE</td>
                                            <td>PES2UG19CS079</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 className='card-titel mt-4'>Guide</h4>
                            <h6 class="text-muted font-weight-normal">Prof. Animesh Giri</h6>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <img src={PESLogo} width="300px" style={{"marginLeft": "1px"}}alt="pes-logo" />
                </div>
            </div>
            
        </div>
    )
}