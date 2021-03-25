  import React, { useContext, useEffect } from "react"
import { PayStubContext } from "./PayStubProvider.js"
import { AuthContext } from '../auth/AuthProvider'
import './PayStub.scss'

export const PayStub = props => {
    const { getPaystub, payStub } = useContext(PayStubContext)
    const { employee, getEmployee } = useContext(AuthContext)

    useEffect(() => {
        getEmployee()
    }, [])

    useEffect(() => {
        getPaystub(employee.id)
    }, employee.id)

    return (
        <div className="paystubContainer mb-3">
            <h2 className="paystubHeader text-center">Paystubs</h2>
            <div className="card-columns mt-5">
            {   payStub.map(paystubs => {
                    return <div className="card m-auto paystubCard">
                        <div className="card-body">
                            <p className="paidTo"><b>Pay To:</b> {paystubs.employee_id.user.first_name} {paystubs.employee_id.user.last_name}</p>
                            <p className="payPeriod"><b>Pay Period:</b> {paystubs.pay_period}</p>
                            <p className="deposit-date"><b>Deposit Date:</b> {paystubs.deposit_date}</p>
                            <p className="salary"><b>Amount:</b> {paystubs.salary}</p>
                            <p className="account-name"><b>Account:</b> {paystubs.deposit_account.account_name}</p>
                        </div>
                    </div>
            }) 
                
            }
            </div>
        </div>
    )
}