// Modulos para atualizar lista de itens quando houver alteração na coleção
import { useEffect, useState } from 'react'
// Biblioteca de estilização para mensagens de erro
import { toast } from 'react-toastify'
// Acessa api da aplicação
import { Api } from '../api/api'
// Componente para exibir item na lista
import Card from '../components/Card/Card'

// Página Home
export default function Home() {
  const [inventory, setInventory] = useState([]);

  // Faz a requisição readAll e retorna itens da lista sempre que houver alguma alteração
  async function fetchData() {
    const apiUrl = Api.produto.readAll()

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

  // Retorna lista de itens mapeando em componentes <Card />
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