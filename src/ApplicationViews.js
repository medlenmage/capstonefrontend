import React from 'react'
import { Route } from 'react-router-dom'
import { PayStubProvider } from './Components/PayStub/PayStubProvider'
import { PayStub } from './Components/PayStub/PayStub';

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <PayStubProvider>
                <Route exact path="/" render={ props => <PayStub {...props}/>} />
            </PayStubProvider>
        </main>
    </>
}