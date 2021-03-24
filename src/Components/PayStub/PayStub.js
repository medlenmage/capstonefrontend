  import React, { useContext, useEffect } from "react"
import { PayStubContext } from "./PayStubProvider.js"

export const PayStub = props => {
    const { getEmployee, employee } = useContext(PayStubContext)

    useEffect(() => {
        getEmployee()
    }, [])

    // useEffect(() => {
    //     getPaystub(employee.id)
    // }, [])

    return (

        <div><p>hello</p></div>
        // <article className="paystubs">
        //     {
        //         payStub.map(paystubs => {
        //             return <section key={`paystub--${paystubs.id}`} className="paystub">
        //                 <div className="game__title">Paid to: {paystubs.employee.user.first_name} {paystubs.employee.user.last_name}</div>
        //                 <div className="game__players">Pay Period: {paystubs.pay_period}</div>
        //                 <div className="game__skillLevel">Deposit Date: {paystubs.deposit_date}</div>
        //                 <div className="game__edit">Account: {paystubs.deposit_account.account_name}</div>
        //             </section>
        //         })
        //     }
        // </article>
    )
}