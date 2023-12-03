import React, { useState } from 'react'

const useEditableState = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = () => setIsEditing(true)
    const handleBlur = () => setIsEditing(false)
    const handleChange = (e) => setValue(e.target.value)
    
    return { value, isEditing, setValue, handleEdit, handleBlur, handleChange }
}

export default useEditableState