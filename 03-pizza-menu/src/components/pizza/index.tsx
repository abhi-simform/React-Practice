interface IPizza {
  ingredients: string;
  name: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

export default function Pizza(props: IPizza) {
  const { ingredients, name, photoName, price, soldOut } = props;
  // if (soldOut) {
  //   return null;
  // }
  return (
    <li className={soldOut ? 'pizza sold-out' : 'pizza'}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}
