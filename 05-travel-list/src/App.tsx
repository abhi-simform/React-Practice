import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed?: boolean;
}

export default function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handleAddItems(item: ItemType) {
    const result: ItemType[] = [...items, item];
    setItems(result);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePacked(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onChangePacked={handlePacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
