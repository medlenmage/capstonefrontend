import React from 'react'
import { Route } from 'react-router-dom'
import { AuthProvider } from './Components/auth/AuthProvider'
import { PayStubProvider } from './Components/PayStub/PayStubProvider'
import { PayStub } from './Components/PayStub/PayStub';
import { EquipmentProvider } from './Components/Equipment/EquipmentProvider'
import { Equipment } from './Components/Equipment/Equipment'
import { NewEquipment } from './Components/Equipment/NewEquipment'
import { Benefits } from './Components/Benefits/Benefits'
import { CompanyContactProvider } from './Components/CompanyContact/CompanyContactProvider'
import { CompanyContact } from './Components/CompanyContact/CompanyContact'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <AuthProvider>
                <PayStubProvider>
                    <EquipmentProvider>
                        <CompanyContactProvider>
                            <Route exact path="/paystub" render={ props => <PayStub {...props}/>} />
                            <Route exact path="/equipment" render={ props => <Equipment {...props}/>} />
                            <Route exact path="/newEquipment" render={ props => <NewEquipment {...props}/>} />
                            <Route exact path="/benefits" render={ props => <Benefits {...props}/>} />
                            <Route exact path="/companycontact" render={ props => <CompanyContact {...props}/>} />
                        </CompanyContactProvider>
                    </EquipmentProvider>
                </PayStubProvider>
            </AuthProvider>
        </main>
    </>
}