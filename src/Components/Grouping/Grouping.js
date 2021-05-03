import React, { useContext, useEffect } from "react"
import { GroupingContext } from "./GroupingProvider.js"
import './Grouping.scss'

export const Grouping = props => {
    const { grouping, getGrouping } = useContext(GroupingContext)

    useEffect(() => {
        getGrouping()
    }, [])


    return (
        <div className="paystubContainer mb-3">
            <h2 className="paystubHeader text-center">Classes</h2>
            <div className="card-columns mt-5">
            {   grouping.map(groupings => {
                    return <div className="card m-auto paystubCard">
                        <div className="card-body">
                            <p className="paidTo"><b>Class:</b> {groupings.id}</p>
                            <p className="payPeriod"><b>Instructor:</b> {groupings.instructor.user.first_name} {groupings.instructor.user.last_name}</p>
                            <p className="deposit-date"><b>Start Date:</b> {groupings.start_date}</p>
                            <p className="salary"><b>End Date:</b> {groupings.end_date}</p>
                        </div>
                    </div>
            }) 
                
            }
            </div>
        </div>
    )
}