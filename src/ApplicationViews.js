import React from 'react'
import { Route } from 'react-router-dom'
import { PayStubProvider } from './Components/PayStub/PayStubProvider'
import { PayStub } from './Components/PayStub/PayStub';
import { NavBar } from './Components/NavBar/NavBar'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <PayStubProvider>
                <Route exact path="/paystub" render={ props => <PayStub {...props}/>} />
            </PayStubProvider>
        </main>
    </>
}