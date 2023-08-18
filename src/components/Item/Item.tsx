import React from 'react'
import { ItemType } from '../../types/data.type'

interface PropsType {
  item: {
    [key in keyof ItemType]: ItemType[key]
  }
  toggleCheckbox: (id: number) => void
  handleDeleteItem: (id: number) => void
}

export default function Item(props: PropsType) {
  const { item, toggleCheckbox, handleDeleteItem } = props
  return (
    <li>
      <input type='checkbox' checked={item.packed} onChange={() => toggleCheckbox(item.id)} />
      <span style={{ textDecoration: `${item.packed ? 'line-through' : 'none'}` }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  )
}
