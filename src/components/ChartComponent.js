import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function ChartComponent({displayData, home}) {

    if(home){
        return (
            <>
            <BarChart
                width={800}
                height={500}
                data={displayData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                
                <XAxis dataKey='name'/>
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey='uomo' stackId="a" fill="#8884d8" />
                <Bar dataKey='donna' stackId="a" fill="#82ca9d" />
            </BarChart>
        </>
        )
    }else{
        return (
            <>
            <BarChart
                width={800}
                height={500}
                data={displayData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                
                <XAxis dataKey='name'/>
                <YAxis />
                <Tooltip />
                <Legend />
                {}
                <Bar dataKey='prima' stackId="a" fill="#8884d8" />
                <Bar dataKey='seconda' stackId="a" fill="#82ca9d" />
            </BarChart>
        </>
        )
    }
   
}
