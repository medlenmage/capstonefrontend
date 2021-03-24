import React, { useState } from 'react'

export const CompanyContactContext = React.createContext()

export const CompanyContactProvider = props => {
    const [ companyContacts, setCompanyContacts ] = useState([])

    const getContacts = () => {
        return fetch("http://localhost:8000/companycontacts", {
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
        .then(res => res.json())
        .then(setCompanyContacts)
    }

    const createContact = contact => {
        return fetch(`http://localhost:8000/companycontacts`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(getContacts)
    }

    const updateContact = contact => {
        return fetch(`http://localhost:8000/equipments/${contact.id}`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(contact)
        })
            .then(getContacts)
    }

    return (
        <CompanyContactContext.Provider value={{
            companyContacts,
            getContacts,
            createContact,
            updateContact
        }}>
            {props.children}
        </CompanyContactContext.Provider>
    )

}