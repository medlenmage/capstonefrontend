import React, { useState } from 'react'

export const PayStubContext = React.createContext()

export const PayStubProvider = props => {
    const [ payStub, setPaystub ] = useState([])
    const [ employee, setEmployee ] = useState({})

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

    const getEmployee = () => {
        const user_id = localStorage.getItem('user_id')
        return fetch(`http://localhost:8000/employee/${user_id}`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(setEmployee)
    }

    

    return (
        <PayStubContext.Provider value={{
            payStub,
            getPaystub,
            createPaystub,
            getEmployee,
            employee,
        }}>
            { props.children }
        </PayStubContext.Provider>
    )
}