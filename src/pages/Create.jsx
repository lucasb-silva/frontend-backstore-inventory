export default function Create() {
  return (
    <div>
      <h3>Novo produto:</h3>
      <form>
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
          <input type="text" id="descrição" name="descrição" placeholder="Insira a quantidade" />
        </div>

        <div>
          <button type="submit">Criar</button>
          <button type="reset">Reiniciar</button>
        </div>
      </form>
    </div>
  )
}