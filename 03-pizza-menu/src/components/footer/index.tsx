export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  if (!isOpen) {
    return (
      <footer className="footer">
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      </footer>
    );
  }
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're currently open until {closeHour}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
