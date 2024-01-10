interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed?: boolean;
}

interface ItemProps extends ItemType {
  onDeleteItem: (id: number) => void;
  onChangePacked: (id: number) => void;
}

export default function Item(props: ItemProps) {
  const { description, id, packed, quantity, onDeleteItem, onChangePacked } =
    props;
  return (
    <li key={id}>
      <input
        type="checkbox"
        defaultChecked={packed}
        onChange={() => onChangePacked(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
