import './Card.css'
import semImagem from './../../assets/noImageReturn.svg'
import { IoCreateOutline } from "react-icons/io5";

// Componente Card recebe as propriedades do componente
export default function Card(props) {
  return (
    <div className="card">
      <img
        // Renderização condicional caso o produto não possua imagem
        src={props.item.imagem ? props.item.imagem : semImagem}
        alt={props.item.nome}
        width="100%"
      />
      <h4>{props.item.nome}</h4>
      <p className="quantidade">{props.item.quantidade} itens</p>
      <p className="descricao">{props.item.descricao}...</p>
      <button><IoCreateOutline /> Editar</button>
    </div>
  );
}