import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Product/Card";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [inventory, setInventory] = useState([]);

  async function fetchData() {
    const apiUrl = "http://localhost:5000/inventarioo/";

    const response = await fetch(apiUrl).catch(function (error) {
      console.log('Erro ao carregar endpoint /personagem.', error)
      toast.error('Erro ao carregar inventário.')
    })

    if (response.ok){
      const data = await response.json();

      setInventory(data)
    } else {
      toast.error('Erro ao carregar inventário.')
    }
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
      <ToastContainer />
    </>
  );
}

export default App;
