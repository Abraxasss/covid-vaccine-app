import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function ChartComponent({displayData}) {

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
            <Bar dataKey='uv' stackId="a" fill="#8884d8" />
            <Bar dataKey='pv' stackId="a" fill="#82ca9d" />
        </BarChart>
    </>
    )
}
