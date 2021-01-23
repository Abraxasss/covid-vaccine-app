import React, { useContext } from 'react'
import ChartComponent from '../components/ChartComponent'
import { VaccineDataContext } from '../context/VaccineDataContext'


export default function DosesScreen() {


    const { data, loading } = useContext(VaccineDataContext)

    const displayData = data.map((d) =>{
            return(
                { name: d.fascia_anagrafica, prima: d.prima_dose, seconda: d.seconda_dose}
            )
        })
    
      
    

    if (!loading) {
        return (
           <ChartComponent displayData={displayData} home={false}/>
        )
    } else {
        return (
            <p>Loading</p>
        )
    }

}
