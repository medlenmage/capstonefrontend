import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthProvider'

export const Benefits = props => {
    const { employee, getEmployee } = useContext(AuthContext)

    useEffect(() => {
        getEmployee()
    })

    return (
        <div className="benefitsContainer">
            <div className="card mt-1 paystubCard">
                <div className="card-body">
                    <p className="game">Health Insurance: {employee.benefits_id.health_ins}</p>
                    <p className="deposit-date">Dental Insurance: {employee.benefits_id.dental_ins}</p>
                    <p className="salary">Life Insurance: {employee.benefits_id.Life_ins}</p>
                    <p className="account-name">Vacation Days: {employee.benefits_id.vacation_days}</p>
                    <p className="account-name">Sick Days: {employee.benefits_id.sick_days}</p>
                </div>
            </div>
        </div>
    )

}