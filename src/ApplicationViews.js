import React from 'react'
import { Route } from 'react-router-dom'
import { PayStubProvider } from './Components/PayStub/PayStubProvider'
import { PayStub } from './Components/PayStub/PayStub';
import { EquipmentProvider } from './Components/Equipment/EquipmentProvider'
import { Equipment } from './Components/Equipment/Equipment'
import { NewEquipment } from './Components/Equipment/NewEquipment'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <PayStubProvider>
                <EquipmentProvider>
                    <Route exact path="/paystub" render={ props => <PayStub {...props}/>} />
                    <Route exact path="/equipment" render={ props => <Equipment {...props}/>} />
                    <Route exact path="/newEquipment" render={ props => <NewEquipment {...props}/>} />
                </EquipmentProvider>
            </PayStubProvider>
        </main>
    </>
}