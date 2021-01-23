import React,{useEffect, useState} from 'react'

export default function TotaleRegioni() {

    const [recordsRegioni, setRecordsRegioni] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json')
        .then(response => response.json())
        .then(data =>setRecordsRegioni(data.data))
    }, [])

    const sum;
    const totaleRegione = (regione) =>{
        const recordsRegioneSingola = recordsRegioni.filter(regione => regione.area == regione)
         sum = recordsRegioneSingola.reduce((a, {totale}) => a + totale, 0);
         return sum
    } 
  
    console.log('somma', sum)
    return (
        <div>
            {
                totaleRegione('PIE')
            }
        </div>
    )
}
