import React, { useState } from 'react'

export const PayStubContext = React.createContext()

export const PayStubProvider = props => {
    const { payStub, setPaystub } = useState([])
    const { users, setUsers } = useState([])

    const getPaystub = (id) => {
        return fetch(`http://localhost:8000/paystub?employee_id=${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setPaystub)
    }

    const createPaystub = (paystub) => {
        return fetch("http://localhost:8000/paystubs", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(paystub)
        })
            .then(res => res.json())
            .then(getPaystub)
    }

    const getUsers = () => {
        return fetch("http://localhost:8000/users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
            .then(setUsers)
    }

    const getUserById = (id) => {
        return fetch(`http://localhost:8000/users/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
    }

    const getEmployee = (uid) => {
        return fetch("http://localhost:8000/paystubs", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
    }

    return (
        <PayStubContext.Provider value={{
            payStub,
            getPaystub,
            createPaystub,
            getUsers,
            getUserById,
            getEmployee,
            users,
        }}>
            { props.children }
        </PayStubContext.Provider>
    )
}