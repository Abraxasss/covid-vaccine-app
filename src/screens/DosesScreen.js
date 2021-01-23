import React, { useContext } from 'react'
import ChartComponent from '../components/ChartComponent'
import { VaccineDataContext } from '../context/VaccineDataContext'


export default function DosesScreen() {


    const { data, loading } = useContext(VaccineDataContext)

    const displayData = data.map((d) =>{
            return(
                { name: d.fascia_anagrafica, uv: d.prima_dose, pv: d.seconda_dose}
            )
        })
      
    

    if (!loading) {
        return (
           <ChartComponent displayData={displayData}/>
        )
    } else {
        return (
            <p>Loading</p>
        )
    }

}
