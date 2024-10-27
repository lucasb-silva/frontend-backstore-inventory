import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Api } from "../../api/api"
import { toast } from "react-toastify"
import './Form.css'

function Form() {
  const [imagemUrl, setImagemUrl] = useState('');

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setImagemUrl(e.target.value);
  };

  async function handleSubmit(event) {

    event.preventDefault()

    const produto = {
      nome: event.target.nome.value,
      imagem: event.target.imagem.value || undefined,
      quantidade: event.target.quantidade.value,
      descricao: event.target.descricao.value
    }

    const apiUrl = Api.produto.create()

    const response = await Api.buildApiPostRequest(apiUrl, produto)

    if (response.ok) {
      toast.success('Novo produto criado com sucesso!')
      navigate('/')
    } else {
      const body = await response.json()
      toast.error('Erro ao criar novo produto: ' + body.error)
    }
  }

  return (
    <div>
      <div className="container">
        <h3>Novo item:</h3>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">Nome *:</label><br />
              <input type="text" id="nome" name="nome" placeholder="Insira o nome do produto" />
            </div>

            <div className="imagem-quantidade">
              <div className="tamanho-campo">
                <label htmlFor="imagem">Imagem (URL):</label><br />
                <input type="text" id="imagem" name="imagem" onChange={handleInputChange} placeholder="Insira a URL da imagem" />
              </div>
              <div className="tamanho-campo">
                <label htmlFor="quantidade">Quantidade *:</label><br />
                <input type="number" id="quantidade" name="quantidade" placeholder="Insira a quantidade" />
              </div> 
            </div>

            {/* <div>
              <label htmlFor="quantidade">Quantidade *:</label><br />
              <input type="number" id="quantidade" name="quantidade" placeholder="Insira a quantidade" />
            </div> */}

            <div>
              <label htmlFor="descricao">Descrição *:</label><br />
              <textarea type="text" id="descricao" name="descricao" className="novaDescricao" placeholder="Insira a descrição do produto" />
            </div>

            <div className="botoes">
              <button className="botaoCriar" type="submit">Criar</button>
              <button className="botaoReiniciar" type="reset">Reiniciar</button>
            </div>
          </form>
          <div className="imagem-container">
            {imagemUrl ? (
              <img src={imagemUrl} alt="" className="preVisualizar" />
            ): (
              <p>Pré visualizar imagem</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;
