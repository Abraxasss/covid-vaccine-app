import React, { createContext, useState, useEffect } from 'react'

export const VaccineDataContext = createContext()

export default function VaccineDataProvider({children}) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json')
            .then(response => response.json())
            .then(vac => setData(vac.data))
            .then(setLoading(false))
    }, [])

    return (
        <VaccineDataContext.Provider value={{data, loading}}>
            {children}
        </VaccineDataContext.Provider>
    )
}
