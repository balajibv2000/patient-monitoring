import PatientList from './PatientListSW'
import ReactLoading from 'react-loading';

function SpecialWard({data}) {

   return (

        <div class="row ">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Special Ward Patients</h4>
                    <p class="card-description"> List of all Special Ward Patients</p>
                    {
                        (data.length > 1) ? (
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
                        ) :
                        (
                            <div className='d-flex justify-content-center'>
                                <ReactLoading type={'bars'} color={'#A5C9CA'} height={'10%'} width={'10%'} />
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialWard
