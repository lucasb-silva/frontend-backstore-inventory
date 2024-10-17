import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Api } from "./api/api";

function App() {
  const [inventory, setInventory] = useState([]);

  async function fetchData() {
    const apiUrl = Api.inventario.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)

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
        {inventory.map(function (produto) {
          return <Card key={produto.nome} item={produto} />;
        })}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
