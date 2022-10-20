import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
    Text
  } from 'react-speedometer';

export default function GuageMeter({data , max , min , step}){
    return(
        <Speedometer
            value={data}
            min = {min}
            max={max}
            angle={160}
            fontFamily='monospace'
            width={350}
            height={210}
            accentColor='#EA047E'
            >
            <Background angle={180} />
            <Arc />
            <Needle />
            <Progress arcWidth={8}/>
            <Marks step={step}/>
            <Indicator fontSize={24}/>
            </Speedometer>
    )
}