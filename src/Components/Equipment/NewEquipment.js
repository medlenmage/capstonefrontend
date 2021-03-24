import React , { useState, useEffect, useContext } from 'react'
import { EquipmentContext } from './EquipmentProvider'

export const NewEquipment = props => {
    const { createEquipment } = useContext(EquipmentContext)
    const [ equipmentType, setEquipmentType ] = useState('')
    const [ isAvailable, setIsAvailable ] = useState(true)

    const handleTypeChange = (e) => {
        e.preventDefault()
        setEquipmentType(e.target.value)
    }

    const handleAvailableChange = (e) => {
        e.preventDefault()
        // setIsAvailable(e.target.value)
        if (e.target.value === "true") {
            setIsAvailable(true)
        } else {
            setIsAvailable(false)
        }
    }

    return (
        <div className="text-center">
            <h3 className="formHeader">New Equipment</h3>
            <form className="col-6 offset-3">
                <div className="form-group">
                    <label htmlFor="equipmentType">Equipment Type</label>
                    <input
                    type="text"
                    className="form-control"
                    id="equipmentType"
                    name="equipment_type"
                    defaultValue={equipmentType}
                    placeholder="Equipment type here"
                    onChange={handleTypeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="is_available">Current Available</label>
                    <select
                    className="form-control"
                    id="is_available"
                    name="is_available"
                    onChange={handleAvailableChange}
                    >
                        <option value={true}>Available</option>
                        <option value={false}>Unavailable</option>
                    </select>
                </div>
                <button className="btn button btn-primary" type="submit" onClick={
                    evt => {
                        evt.preventDefault()
                        createEquipment({
                            equipment_type: equipmentType,
                            is_available: isAvailable
                        })
                        .then(() => props.history.push("/equipment"))
                    }
                }>Submit</button>
            </form>
        </div>
    )
}