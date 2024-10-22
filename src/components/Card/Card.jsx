import './Card.css'

// Componente Card recebe as propriedades do componente
export default function Card(props) {
  return (
    <div className="card">
      <img
        // Renderização condicional caso o produto não possuir imagem
        src={props.item.imagem ? props.item.imagem : "https://media.istockphoto.com/id/1041218648/pt/vetorial/fast-parcel-line-icon.jpg?s=1024x1024&w=is&k=20&c=sZuojofq8xYuwPaqvifpk4nGwG9e9XqDWE8yozliefo="}
        alt={props.item.nome}
        width="100%"
      />
      <h4>{props.item.nome}</h4>
      <p className="quantidade">{props.item.quantidade} itens</p>
      <p className="descricao">{props.item.descricao}...</p>
      <p>
        <button>Editar item</button>
      </p>
    </div>
  );
}