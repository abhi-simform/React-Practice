interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed?: boolean;
}

export default function Stats({ items }: { items: ItemType[] }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems * 100) / items.length);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${items.length} items on your list and you already packed ${packedItems} (${percentage}%).`}
      </em>
    </footer>
  );
}
