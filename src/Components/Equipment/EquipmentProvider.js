import  React, { useState } from 'react'

export const EquipmentContext = React.createContext()

export const EquipmentProvider = props => {
    const [ equipments, setEquipments ] = useState([])
    const [ singleEquipment, setSingleEquipment ] = useState({})

    const getEquipment = () => {
        return fetch("http://localhost:8000/equipments", {
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
        .then(res => res.json())
        .then(setEquipments)
    }

    const getSingleEquipment = (id) => {
        return fetch(`http://localhost:8000/equipments/${id}`, {
            method: "GET",
            headers:{
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
        .then(res => res.json())
        .then(setSingleEquipment)
    }

    const createEquipment = equipment => {
        return fetch(`http://localhost:8000/equipments`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(equipment)
        })
            .then(res => res.json())
            .then(getEquipment)
    }

    const updateEquipment = equipment => {
        return fetch(`http://localhost:8000/equipments/${equipment.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(equipment)
        })
            .then(getEquipment)
    }

    const deleteEquipment = equipmentId => {
        return fetch(`http://localhost:8000/equipments/${equipmentId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("employee_user_id")}`
            },
        })
            .then(getEquipment)
    }

    return (
        <EquipmentContext.Provider value={{
            equipments,
            getEquipment,
            singleEquipment,
            getSingleEquipment,
            createEquipment,
            updateEquipment,
            deleteEquipment
        }}>
            {props.children}
        </EquipmentContext.Provider>
    )
}