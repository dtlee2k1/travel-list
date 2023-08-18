import { useState, useEffect } from 'react'
import { ItemType } from '../../types/data.type'

interface PropTypes {
  handleAddItem: (item: ItemType) => void
}

const initialState = {
  description: '',
  quantity: 1,
  packed: false
}

export default function Form(props: PropTypes) {
  const { handleAddItem } = props

  const [formItem, setFormItem] = useState<Omit<ItemType, 'id'>>(initialState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formItem.description) return

    handleAddItem({ ...formItem, id: Date.now() })
    setFormItem(initialState)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={formItem.quantity}
        onChange={(e) => setFormItem((prev) => ({ ...prev, quantity: Number(e.target.value) }))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={formItem.description}
        onChange={(e) => setFormItem((prev) => ({ ...prev, description: e.target.value }))}
      />
      <button>Add</button>
    </form>
  )
}
