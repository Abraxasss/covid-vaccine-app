import React from 'react'
import VaccineDataProvider from "./VaccineDataContext.js"

export default function Providers({children}) {
    return (
        <>
            <VaccineDataProvider>
                {children}
            </VaccineDataProvider>
        </>
    )
}
