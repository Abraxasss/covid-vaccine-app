import React, { useEffect, useContext, useState } from 'react'
import { VaccineDataContext } from '../context/VaccineDataContext'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ChartComponent from '../components/ChartComponent'
import TotaleRegioni from '../components/TotaleRegioni'

export default function Home() {

    const { data, loading } = useContext(VaccineDataContext)
    console.log('da Home', data)  

    const [lastData, setLastData ] = useState('')
    

    useEffect(() => {
        if(data.length>0){
            setLastData(data[0].ultimo_aggiornamento)
        }else{
            setLastData('Non Disponibile')
        }
    }, [data])
   

    const displayData = data.map((d) => {
        return (
            { name: d.fascia_anagrafica, uomo: d.sesso_maschile, donna: d.sesso_femminile }
        )
    })

    if (!loading) {

        return (
            <>
                <p>Ultimo Aggiornamento {lastData}</p>
                <ChartComponent displayData={displayData} home={true}/>
               
            </>
        )
    } else {
        return (
            <p>Loading</p>
        )
    }
}
