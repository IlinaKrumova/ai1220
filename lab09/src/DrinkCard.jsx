// Exercise 2: one drink on the menu. Everything it shows comes from its props.
export default function DrinkCard({ name, price }) {
  return (
    <section className="drink">
      <h2>{name}</h2>
      <p>AED {price}</p>
    </section>
  );
}
