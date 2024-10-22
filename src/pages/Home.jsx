import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Api } from '../api/api'
import Card from '../components/Card/Card'

export default function Home() {
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
    </>
  )
}