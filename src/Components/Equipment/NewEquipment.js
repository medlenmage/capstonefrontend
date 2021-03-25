import React , { useState, useEffect, useContext } from 'react'
import { EquipmentContext } from './EquipmentProvider'
import './Equipment.scss'

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
        if (e.target.value === "true") {
            setIsAvailable(true)
        } else {
            setIsAvailable(false)
        }
    }

    return (
        <div className="text-center">
            <h2 className="formHeader mb-4">New Equipment</h2>
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
                <div className="form-group mt-3">
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
                <button className="btn button btn-secondary" type="submit" onClick={
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