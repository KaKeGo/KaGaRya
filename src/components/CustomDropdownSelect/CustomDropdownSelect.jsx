import React, { useState, useRef } from "react"
import { PlusOutlined } from '@ant-design/icons'
import { Divider, Input, Select, Space, Button, Alert } from "antd"

import './CustomDropdownSelect.css'

let index = 0


const CustomDropdownSelect = ({ 
        initialItems = [], 
        placeholder = 'custom dropdown render', 
        onAddItem,
        onSelectItem,
        value,
        className,
        addItemText = 'Add item',
    }) => {
    const [items, setItems] = useState(initialItems)
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const inputRef = useRef(null)

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const addItem = (e) => {
        e.preventDefault()
        try {
            const newItem = onAddItem(name)
            setItems([...items, newItem])
            setName('')
            setError(null)
        } catch (err) {
            setError(err.message)
        }
        setTimeout(() => {
            inputRef.current?.focus()
        }, 0)
    }

    return (
        <Select
            className={`${className}`}
            placeholder={placeholder}
            value={value}
            onMouseDown={(e) => e.stopPropagation()}
            dropdownRender={(menu) => (
                <div 
                    className="">
                    {menu}
                    <Divider style={{ margin: '8px 0' }}/>
                    <Space direction="vertical" style={{ padding: '0 8px 4px' }}>
                        <Input 
                            placeholder="Add them..."
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                        />
                        {error && <Alert message={error} type="error" />}
                        <Button 
                            style={{width: '100%'}}
                            type="text" icon={<PlusOutlined />} 
                            onClick={addItem}
                        >
                            {addItemText}
                        </Button>
                    </Space>
                </div>
            )}
            options={items.map((item) => ({
                label: item.name,
                value: item.id,
            }))}
            onChange={onSelectItem}
        />
    )
}

export default CustomDropdownSelect
