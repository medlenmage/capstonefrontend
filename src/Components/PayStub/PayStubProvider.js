import React, { useState } from 'react'

export const PayStubContext = React.createContext()

export const PayStubProvider = props => {
    const [ payStub, setPaystub ] = useState([])

    const getPaystub = (id) => {
        return fetch(`http://localhost:8000/paystubs?employee_id=${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setPaystub)
    }

    const createPaystub = (paystub) => {
        return fetch("http://localhost:8000/paystubs", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paystub)
        })
            .then(res => res.json())
            .then(getPaystub)
    }

    

    return (
        <PayStubContext.Provider value={{
            payStub,
            getPaystub,
            createPaystub,
        }}>
            { props.children }
        </PayStubContext.Provider>
    )
}