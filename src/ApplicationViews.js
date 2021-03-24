import React from 'react'
import { Route } from 'react-router-dom'
import { AuthProvider } from './Components/auth/AuthProvider'
import { PayStubProvider } from './Components/PayStub/PayStubProvider'
import { PayStub } from './Components/PayStub/PayStub';
import { EquipmentProvider } from './Components/Equipment/EquipmentProvider'
import { Equipment } from './Components/Equipment/Equipment'
import { NewEquipment } from './Components/Equipment/NewEquipment'
import { Benefits } from './Components/Benefits/Benefits'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <AuthProvider>
                <PayStubProvider>
                    <EquipmentProvider>
                        <Route exact path="/paystub" render={ props => <PayStub {...props}/>} />
                        <Route exact path="/equipment" render={ props => <Equipment {...props}/>} />
                        <Route exact path="/newEquipment" render={ props => <NewEquipment {...props}/>} />
                        <Route exact path="/benefits" render={ props => <Benefits {...props}/>} />
                    </EquipmentProvider>
                </PayStubProvider>
            </AuthProvider>
        </main>
    </>
}