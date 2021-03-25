import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import './Benefits.scss'

export const Benefits = props => {
    const { employee, getEmployee } = useContext(AuthContext)

    useEffect(() => {
        getEmployee()
    }, [])

    return (
        <div className="benefitsContainer">
            <h2 className="benefitsHeader text-center">Benefits</h2>
            <div className="card mt-5 benefitsCard">
                <div className="card-body">
                    <p className="healhIns"><b>Health Insurance:</b> {employee.benefits_id.health_ins}</p>
                    <p className="dentalIns"><b>Dental Insurance:</b> {employee.benefits_id.dental_ins}</p>
                    <p className="lifeIns"><b>Life Insurance:</b> {employee.benefits_id.life_ins}</p>
                    <p className="vacDays"><b>Vacation Days:</b> {employee.benefits_id.vacation_days}</p>
                    <p className="sickDays"><b>Sick Days:</b> {employee.benefits_id.sick_days}</p>
                </div>
            </div>
        </div>
    )

}