import './Product.css'

export default function Product(props) {
  return (
    <div className="product">
      <img
        src={props.image}
        alt={props.name}
        width="100%"
      />
      <h2>{props.name}</h2>
      <p class="quantity">{props.quantity} itens</p>
      <p>{props.shortDescription}...</p>
      <p>
        <button>Editar item</button>
      </p>
    </div>
  );
}
