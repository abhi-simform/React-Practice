import { useState } from 'react';
import Item from './Item';

interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed?: boolean;
}

export default function PackingList({
  items,
  onDeleteItem,
  onChangePacked,
  onClearList
}: {
  items: ItemType[];
  onDeleteItem: (id: number) => void;
  onChangePacked: (id: number) => void;
  onClearList: () => void;
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems = items;
  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              {...item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onChangePacked={onChangePacked}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          defaultValue={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
