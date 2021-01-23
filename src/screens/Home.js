import React, { useContext } from 'react'
import { VaccineDataContext } from '../context/VaccineDataContext'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ChartComponent from '../components/ChartComponent'

export default function Home() {



    const { data, loading } = useContext(VaccineDataContext)
    console.log('array', data)

    const lastUpdate = !!data ? data[1].ultimo_aggiornamento : 'N.D.'

    const displayData = data.map((d) => {
        return (
            { name: d.fascia_anagrafica, uv: d.sesso_maschile, pv: d.sesso_femminile }
        )
    })

    if (!loading) {

        return (
            <>
                <p>Ultimo Aggiornamento: {lastUpdate}</p>
                <ChartComponent displayData={displayData} />
            </>
        )
    } else {
        return (
            <p>Loading</p>
        )
    }
}
