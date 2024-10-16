import './Product.css'

export default function Product() {
  return (
    <div className="product">
      <img
        src="https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ="
        alt="Mouse Gamer"
        width="100%"
      />
      <h2>Mouse Gamer</h2>
      <p class="quantity">12 itens</p>
      <p>Mouse Gamer de ultima geração...</p>
      <p>
        <button>Editar item</button>
      </p>
    </div>
  );
}
