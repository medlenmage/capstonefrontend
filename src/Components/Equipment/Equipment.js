import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { EquipmentContext } from './EquipmentProvider'

export const Equipment = props => {
    const { equipments, getEquipment, updateEquipment, deleteEquipment } = useContext(EquipmentContext)

    useEffect(() => {
        getEquipment()
    }, [])

    return (
        <div className="equipmentContainer">
            <h2 className="paystubHeader text-center">Equipment</h2>
            <Link className="btn btn-secondary contactButton" to="/newEquipment">Add Equipment</Link>
            <div className="card-columns mt-5">
            {
                equipments.map(equipment => {
                    return <div className="card mt-1 paystubCard">
                        <div className="card-body">
                            <p className="equipType"><b>Equipment Type:</b> {equipment.equipment_type}</p>
                            
                            {
                                equipment.is_available === true
                                ?
                                <div className="buttonContainer"> 
                                    <p className="equipmentAvailable"><b>Currently Available:</b> Yes</p>
                                        <button className="btn btn-danger updateAvailabilty" type="submit" onClick={evt => {
                                            evt.preventDefault()
                                            updateEquipment({
                                                id: equipment.id,
                                                equipment_type: equipment.equipment_type,
                                                is_available: false
                                            })
                                            .then(() => props.history.push("/equipment"))
                                        }}>Update Availabilty</button>
                                        <button className="btn btn-danger ml-4" onClick={e => {
                                e.preventDefault();
                                deleteEquipment(equipment.id)
                            }}>Delete Equipment</button>
                                    </div>
                                : <div className="buttonContainer"> 
                                <p className="equipmentAvailable"><b>Currently Available:</b> No</p>
                                    <button className="btn btn-danger updateAvailabilty" type="submit" onClick={evt => {
                                        evt.preventDefault()
                                        updateEquipment({
                                            id: equipment.id,
                                            equipment_type: equipment.equipment_type,
                                            is_available: true
                                        })
                                        .then(() => props.history.push("/equipment"))
                                    }}>Update Availabilty</button>
                                    <button className="btn btn-danger ml-4" onClick={e => {
                                e.preventDefault();
                                deleteEquipment(equipment.id)
                            }}>Delete Equipment</button>
                                </div>
                            }

                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}