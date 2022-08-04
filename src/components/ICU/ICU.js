import PatientList from '../PatientList'

function ICU({data}) {

   return (

        <div>
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">ICU Patients</h4>
                <p class="card-description"> List of all ICU patients</p>
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
                </div>
            </div>
        </div>
    )
}

export default ICU
