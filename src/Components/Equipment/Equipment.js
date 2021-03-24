import React, { useEffect, useContext } from 'react'
import { EquipmentContext } from './EquipmentProvider'

export const Equipment = props => {
    const { equipment, equipments, getEquipment, getSingleEquipment, updateEquipment } = useContext(EquipmentContext)

    useEffect(() => {
        getEquipment()
    }, [])

    // useEffect(() => {
    //     getSingleEquipment(id)
    // }, [])

    return (
        <div className="equipmentContainer">
            {
                equipments.map(equipment => {
                    return <div className="card mt-1 paystubCard">
                        <div className="card-body">
                            <h6 className="card-title game">Equipment Type: {equipment.equipment_type}</h6>
                            
                            {
                                equipment.is_available === true
                                ?
                                <div className="buttonContainer"> 
                                    <p className="equipmentAvailable">Currently Available: Yes</p>
                                        <button className="btn btn-warning updateAvailabilty" type="submit" onClick={evt => {
                                            evt.preventDefault()
                                            updateEquipment({
                                                id: equipment.id,
                                                equipment_type: equipment.equipment_type,
                                                is_available: false
                                            })
                                            .then(() => props.history.push("/equipment"))
                                        }}>Update Availabilty</button>
                                    </div>
                                : <div className="buttonContainer"> 
                                <p className="equipmentAvailable">Currently Available: No</p>
                                    <button className="btn btn-warning updateAvailabilty" type="submit" onClick={evt => {
                                        evt.preventDefault()
                                        updateEquipment({
                                            id: equipment.id,
                                            equipment_type: equipment.equipment_type,
                                            is_available: true
                                        })
                                        .then(() => props.history.push("/equipment"))
                                    }}>Update Availabilty</button>
                                </div>
                            }
                            

                        </div>
                    </div>
                })
            }
        </div>
    )
}