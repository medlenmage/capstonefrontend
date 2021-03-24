import { React, useState } from 'react'

export const EquipmentContext = React.createContext()

export const EquipmentProvider = props => {
    const { equipments, setEquipments } = useState([])
    const { equipment, setEquipment } = useState({})

    const getEquipment = () => {
        return fetch("http://localhost:8000/equipment", {
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
        .then(res => res.json())
        .then(setEquipments)
    }

    return (
        <EquipmentContext.Provider value={{
            equipments,
            getEquipment,
        }}>
            {props.children}
        </EquipmentContext.Provider>
    )
}