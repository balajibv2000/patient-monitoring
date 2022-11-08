import Bar from 'react-meter-bar';

function MeterBar({data , labels}){
    return(
        <Bar
            labels={labels}
            labelColor="#B9FFF8"
            progress={data}
            barColor="#06FF00"
            seperatorColor="#379237"
        />
    )
}

export default MeterBar
