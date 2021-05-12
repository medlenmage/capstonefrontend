import React, { useState } from 'react'

export const GroupingContext = React.createContext()

export const GroupingProvider = props => {
    const [ grouping, setGrouping ] = useState([])
    const [ singleGrouping, setSingleGrouping ] = useState([])

    const getGrouping = () => {
        return fetch(`http://localhost:8000/groupings`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setGrouping)
    }

    const createGrouping = (grouping) => {
        return fetch("http://localhost:8000/groupings", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(grouping)
        })
            .then(res => res.json())
            .then(getGrouping)
    }

    const getSingleGrouping = (id) => {
        return fetch(`http://localhost:8000/groupings?instructor=${id}`, {
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
        .then(res => res.json())
        .then(setSingleGrouping)
    }


    

    return (
        <GroupingContext.Provider value={{
            grouping,
            getGrouping,
            createGrouping,
            getSingleGrouping,
            singleGrouping
        }}>
            { props.children }
        </GroupingContext.Provider>
    )
}