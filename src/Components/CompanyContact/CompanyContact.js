import React, { useEffect, useContext } from 'react'
import { CompanyContactContext } from './CompanyContactProvider'

export const CompanyContact = props => {
    const { companyContacts, getContacts } = useContext(CompanyContactContext)

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div><p>hello</p></div>
    )
}