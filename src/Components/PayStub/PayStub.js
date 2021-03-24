  import React, { useContext, useEffect } from "react"
import { PayStubContext } from "./PayStubProvider.js"
import { AuthContext } from '../auth/AuthProvider'
import './PayStub.css'

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
        <div className="paystubContainer">
            {   payStub.map(paystubs => {
                    return <div className="card mt-1 paystubCard">
                        <div className="card-body">
                            <h6 className="card-title game">Pay To: {paystubs.employee_id.user.first_name} {paystubs.employee_id.user.last_name}</h6>
                            <p className="game">Pay Period: {paystubs.pay_period}</p>
                            <p className="deposit-date">Deposit Date: {paystubs.deposit_date}</p>
                            <p className="salary">Amount: {paystubs.salary}</p>
                            <p className="account-name">Account: {paystubs.deposit_account.account_name}</p>
                        </div>
                    </div>
            }) 
                
            }
        </div>

        // <article className="paystubs">
        //     {
        //         payStub.map(paystubs => {
        //             return <section key={`paystub--${paystubs.id}`} className="paystub">
        //                 <div className="game__title">Paid to: {paystubs.employee_id.user.first_name} {paystubs.employee_id.user.last_name}</div>
        //                 <div className="game__players">Pay Period: {paystubs.pay_period}</div>
        //                 <div className="game__skillLevel">Deposit Date: {paystubs.deposit_date}</div>
        //                 <div className="game__edit">Account: {paystubs.deposit_account.account_name}</div>
        //             </section>
        //         })
        //     }
        // </article>
    )
}