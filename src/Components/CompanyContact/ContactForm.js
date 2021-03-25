import React, { useContext, useEffect, useState } from 'react'
import { CompanyContactContext } from './CompanyContactProvider'

export const ContactForm = props => {
    const { createContact, updateContact, getSingleContact, singleContact } = useContext(CompanyContactContext)
    let intialContact = {}
    if ("contactId" in props.match.params) {
        intialContact = singleContact
    }
    const [ currentContact, setCurrentContact ] = useState(intialContact)
    
    useEffect(() => {
        if ("contactId" in props.match.params) {
            getSingleContact(props.match.params.contactId)
            .then(setCurrentContact(singleContact))
        }
    }, [])

    const handleControlledInputChange = (e) => {
        const newContactState = Object.assign({}, currentContact)
        newContactState[e.target.name] = e.target.value
        setCurrentContact(newContactState)
    }

    return (

        <div className="text-center">
          {
            ("contactId" in props.match.params)
            ? <h1>Edit Contact</h1>
            : <h1>New Contact</h1>
          }
          <form className="col-6 offset-3">
              <div className="form-group">
                <label htmlFor ="contactName">Company Name</label>
                <input
                type="text"
                className="form-control"
                id="contactName"
                name="company_name"
                defaultValue={currentContact.company_name}
                placeholder="Enter Company Name"
                onChange={handleControlledInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor ="contactName">Contact Name</label>
                <input
                type="text"
                className="form-control"
                id="contactName"
                name="contact_name"
                defaultValue={currentContact.contact_name}
                placeholder="Enter Contact Name"
                onChange={handleControlledInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor ="contact_phone_number">Contact Phone Number</label>
                <input
                type="text"
                className="form-control"
                id="contactPhoneNumber"
                name="contact_phone_number"
                defaultValue={currentContact.contact_phone_number}
                placeholder="Enter Contact Phone Number"
                onChange={handleControlledInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor ="contact_email">Contact Email</label>
                <input
                type="text"
                className="form-control"
                id="contactEmail"
                name="contact_email"
                defaultValue={currentContact.contact_email}
                placeholder="Enter Contact Email"
                onChange={handleControlledInputChange}
                />
              </div>
              {
                ("contactId" in props.match.params)
                  ? <button
                    onClick={evt => {
                      evt.preventDefault()
                      updateContact ({
                        id: props.match.params.contactId,
                        company_name: currentContact.company_name,
                        contact_name: currentContact.contact_name,
                        contact_phone_number: currentContact.contact_phone_number,
                        contact_email: currentContact.contact_email,
                      })
                        .then(() => props.history.push("/companycontact"))
                    }}
                    className="btn btn-primary">Edit</button>
                  : <button className="btn button btn-primary" type="submit" onClick={
                    evt => {
                      evt.preventDefault()
                      createContact({
                        company_name: currentContact.company_name,
                        contact_name: currentContact.contact_name,
                        contact_phone_number: currentContact.contact_phone_number,
                        contact_email: currentContact.contact_email,
                      })
                      .then(() => props.history.push("/companycontact"))
                    }
                  }
                  >Submit</button>
              }
          </form>
        </div>
      );

}