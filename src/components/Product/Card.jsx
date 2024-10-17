import './Card.css'

// Componente Card recebe as propriedades do componente
export default function Card(props) {
  return (
    <div className="card">
      <img
        // Renderização condicional caso o produto não possuir imagem
        src={props.item.image ? props.item.image : "https://media.istockphoto.com/id/1041218648/pt/vetorial/fast-parcel-line-icon.jpg?s=1024x1024&w=is&k=20&c=sZuojofq8xYuwPaqvifpk4nGwG9e9XqDWE8yozliefo="}
        alt={props.item.name}
        width="100%"
      />
      <h2>{props.item.name}</h2>
      <p class="quantity">{props.item.quantity} itens</p>
      <p>{props.item.shortDescription}...</p>
      <p>
        <button>Editar item</button>
      </p>
    </div>
  );
}
