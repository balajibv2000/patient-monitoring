import ThermometerSVG from 'react-thermometer-component'

export default function Thermometer({data}){
    return(
        <ThermometerSVG
            theme="dark"
            value={data}
            max="100"
            format="°C"
            size="normal"
            height="200"
        />
    )
}