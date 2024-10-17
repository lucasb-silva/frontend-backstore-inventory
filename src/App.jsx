import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Product/Card";

function App() {
  const [inventory, setInventory] = useState([]);

  async function fetchData() {
    const apiUrl = "http://localhost:5000/inventario/";

    const response = await fetch(apiUrl);

    const data = await response.json();

    setInventory(data)
  }
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <>
      <div className="inventory">
        {inventory.map(function (product) {
          return <Card key={product.name} item={product} />;
        })}
      </div>
    </>
  );
}

export default App;
