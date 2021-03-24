import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = props => {
    const [ employee, setEmployee ] = useState({})

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
        <AuthContext.Provider value={{
            employee,
            getEmployee
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}