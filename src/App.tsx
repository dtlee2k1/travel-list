import { Fragment, useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackageList from './components/PackingList'
import Stats from './components/Stats'
import { ItemType } from './types/data.type'

function App() {
  const [itemList, setItemList] = useState<ItemType[]>([])

  const handleAddItem = (item: ItemType) => {
    setItemList((prev) => [...prev, item])
  }

  const handleToggleItem = (id: number) => {
    setItemList((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, packed: !item.packed }
        return item
      })
    )
  }

  const handleDeleteItem = (id: number) => {
    setItemList((prev) => prev.filter((item: ItemType) => item.id !== id))
  }

  const handleSort = (value: string) => {}

  const handleClearList = () => {
    setItemList([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackageList
        itemList={itemList}
        handleToggleItem={handleToggleItem}
        handleDeleteItem={handleDeleteItem}
        handleClearList={handleClearList}
      />
      <Stats itemList={itemList} />
    </div>
  )
}

export default App
