import React from 'react'
import { ItemType } from '../../types/data.type'

interface propsType {
  itemList: ItemType[]
}

export default function Stats(props: propsType) {
  const { itemList } = props
  const donePacked = itemList.filter((item) => item.packed)

  const totalItems = itemList.length
  const doneItems = donePacked.length
  const donePercent = Math.round((doneItems / totalItems) * 100) | 0

  return (
    <footer className='stats'>
      {totalItems === 0 && (
        <p className='stats'>
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      )}
      {totalItems !== 0 && (
        <em>
          {donePercent === 100
            ? 'You got everything! Ready to go ✈️'
            : `💼 You have ${totalItems} items on your list, and you already packed ${doneItems} (
        ${donePercent}%)`}
        </em>
      )}
    </footer>
  )
}
