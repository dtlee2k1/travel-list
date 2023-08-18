import React, { useEffect, useState } from 'react'
import Item from '../Item'
import { ItemType } from '../../types/data.type'

interface PropsType {
  itemList: ItemType[]
  handleToggleItem: (id: number) => void
  handleDeleteItem: (id: number) => void
  handleClearList: () => void
}

export default function PackageList(props: PropsType) {
  const { itemList, handleToggleItem, handleDeleteItem, handleClearList } = props

  const [sortBy, setSortBy] = useState<string>('input')
  const [sortedList, setSortedList] = useState<ItemType[]>(itemList)

  useEffect(() => {
    // Define a memoized sorting function
    const handleSortList = (list: ItemType[]) => {
      switch (sortBy) {
        case 'input':
          return list
        case 'description':
          return list.slice().sort((a, b) => a.description.localeCompare(b.description))
        case 'packed':
          return list.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
        default:
          return list
      }
    }
    // Sort the list and update the sortedList state
    setSortedList(handleSortList(itemList))
  }, [itemList, sortBy])

  return (
    <div className='list'>
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleCheckbox={handleToggleItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  )
}
