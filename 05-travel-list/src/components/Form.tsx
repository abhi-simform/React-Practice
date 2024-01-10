import { FormEvent, useState } from 'react';

interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed?: boolean;
}

export default function Form({
  onAddItems
}: {
  onAddItems: (item: ItemType) => void;
}) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setQuantity(1);
    setDescription('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
