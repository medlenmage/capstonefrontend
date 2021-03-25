import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CompanyContactContext } from './CompanyContactProvider'
import './CompanyContact.scss'

export const CompanyContact = props => {
    const { companyContacts, getContacts, removeContact } = useContext(CompanyContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div className="contactContainer">
            <h2 className="paystubHeader text-center">Company Contacts</h2>
            <Link className="btn btn-secondary contactButton mt-3" to="/newContact">Add Contact</Link>
            <div className="card-columns mt-5">
            {   companyContacts.map(contact => {
                    return <div className="card mt-1 contactsCard">
                        <div className="card-body">
                            <p className="company"><b>Company:</b> {contact.company_name}</p>
                            <p className="contactName"><b>Contact Name:</b> {contact.contact_name}</p>
                            <p className="contactNum"><b>Contact Phone Number:</b> {contact.contact_phone_number}</p>
                            <p className="contactEmail"><b>Contact Email:</b> {contact.contact_email}</p>
                            <Link className="btn btn-danger" to={`/companycontact/${parseInt(contact.id)}`}>Edit Contact</Link>
                            <button className="btn btn-danger ml-4" onClick={e => {
                                e.preventDefault();
                                removeContact(contact.id)
                            }}>Remove Contact</button>
                        </div>
                    </div>
            }) 
                
            }
            </div>
        </div>
    )
}