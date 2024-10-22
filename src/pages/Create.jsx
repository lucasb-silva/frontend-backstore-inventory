import { Navigate, useNavigate } from "react-router-dom"
import { Api } from "../api/api"

export default function Create() {
  async function handleSubmit(event){
    const navigate = useNavigate()
    event.preventDefault()

    const produto = {
      nome: event.target.nome.value,
      imagem: event.target.imagem.value,
      quantidade: event.target.quantidade.value,
      descricao: event.target.descricao.value
    }

    const apiUrl = Api.inventario.create()

    const response = await Api.buildApiPostRequest(apiUrl, produto)

    if (response.ok) {
      toast.success('Novo produto criado com sucesso!')
      navigate('/')
    } else {
      const body = await response.json()
      toast.error('Erro ao criar novo produto' + body.error)
    }
  }

  return (
    <div>
      <h3>Novo produto:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome *:</label><br />
          <input type="text" id="nome" name="nome" placeholder="Insira o nome do produto" />
        </div>

        <div>
          <label htmlFor="nome">Imagem (URL):</label><br />
          <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" />
        </div>

        <div>
          <label htmlFor="nome">Quantidade *:</label><br />
          <input type="text" id="quantidade" name="quantidade" placeholder="Insira a quantidade" />
        </div>

        <div>
          <label htmlFor="nome">Descrição *:</label><br />
          <input type="text" id="descricao" name="descricao" placeholder="Insira a quantidade" />
        </div>

        <div>
          <button type="submit">Criar</button>
          <button type="reset">Reiniciar</button>
        </div>
      </form>
    </div>
  )
}