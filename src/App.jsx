import "./App.css";
import Card from "./components/Product/Card";

async function App() {
  
  const inventory = []
  
  async function fetchData() {
    const apiUrl = 'http://localhost:5000/inventario/'

    const response = await fetch(apiUrl)

    const data = await response.json()

    console.log(45, data)
  }

  fetchData()

  return (
    <>
      <div className="inventory">
        {inventory.map(function (product) {
          return (
            <Card
              key={product.name}
              item={product}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
