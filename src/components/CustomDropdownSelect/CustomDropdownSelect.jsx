import React, { useState, useEffect, useRef } from "react"
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
        onNewItemNameChange,
    }) => {
    const [items, setItems] = useState(initialItems)
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const inputRef = useRef(null)

    useEffect(() => {
        setItems(initialItems)
    }, [initialItems])

    const onNameChange = (event) => {
        setName(event.target.value)
        onNewItemNameChange(event)
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
                {addItemText && onNewItemNameChange && (
                    <>
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
                        </>
                    )}
                </div>
            )}
            
            options={items.map((item) => ({
                label: item.name,
                value: item.id,
            }))}
            onChange={(value) => {
                onSelectItem(value);
            }}
        />
    )
}

export default CustomDropdownSelect
