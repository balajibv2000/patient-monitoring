import LabList from './LabList'
import ReactLoading from 'react-loading';

function Lab({data}) {

   return (

        <div class="row ">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Labs</h4>
                    <p class="card-description"> List of all Labs</p>
                    {
                        (data.length > 1) ? (
                            <div class="table-responsive">
                                <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Temperature</th>
                                    <th>Humidity</th>
                                    <th>UV Radiation</th>
                                    <th>Atomspheric Pressure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((lab) => <LabList data={lab} />)}
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

export default Lab
