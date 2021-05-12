import React, { useContext, useEffect } from "react"
import { GroupingContext } from "./GroupingProvider.js"
import './Grouping.scss'

export const SingleGrouping = props => {
    const { singleGrouping, getSingleGrouping } = useContext(GroupingContext)

    useEffect(() => {
        getSingleGrouping(props.match.params.instructorId)
    }, props.match.params.instructorId)


    return (
        <div className="paystubContainer mb-3">
            <h2 className="paystubHeader text-center">Class</h2>
            <div className="card-columns mt-5">
                {
                    singleGrouping.map(groupings => {
                        return <div className="card m-auto paystubCard">
                        <div className="card-body">
                            <p className="payPeriod"><b>Instructor:</b> {groupings.instructor.user.first_name} {groupings.instructor.user.last_name}</p>
                        </div>
                    </div>
                    })
                }
            </div>
            <div className="card-columns mt-5">
            {   singleGrouping.map(groupings => {
                    return <div className="card m-auto paystubCard">
                        <div className="card-body">
                            <p className="payPeriod"><b>Student:</b> {groupings.student.user.first_name} {groupings.student.user.last_name}</p>
                        </div>
                    </div>
            }) 
                
            }
            </div>
        </div>
    )
}