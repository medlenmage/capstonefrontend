import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CompanyContactContext } from './CompanyContactProvider'

export const CompanyContact = props => {
    const { companyContacts, getContacts } = useContext(CompanyContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div className="contactContainer">
            <Link className="btn btn-primary" to="/newContact">Add Contact</Link>
            {   companyContacts.map(contact => {
                    return <div className="card mt-1 paystubCard">
                        <div className="card-body">
                            <h6 className="card-title game">Company: {contact.company_name}</h6>
                            <p className="game">Contact Name: {contact.contact_name}</p>
                            <p className="deposit-date">Contact Phone Number: {contact.contact_phone_number}</p>
                            <p className="salary">Contact Email: {contact.contact_email}</p>
                            <Link className="btn btn-primary" to={`/companycontact/${parseInt(contact.id)}`}>Edit Contact</Link>
                        </div>
                    </div>
            }) 
                
            }
        </div>
    )
}