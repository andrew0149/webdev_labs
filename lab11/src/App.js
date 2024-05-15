import pepperoni from "./images/pepperoni.jpg";
import PizzaCard from "./components/PizzaCard"

function App() {
  return (
    <PizzaCard title="Пепперони" subtitle="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" price="550" image={pepperoni} />
  );
}

export default App;
