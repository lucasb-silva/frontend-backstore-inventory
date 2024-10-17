import "./App.css";
import Card from "./components/Product/Card";

function App() {
  const product = {
    name: "Mouse Gamer",
    image:
      "https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ=",
    quantity: "12",
    shortDescription: "Mouse Gamer de ultima geração",
  };
  const product1 = {
    name: "Teclado Gamer",
    image:
      "https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ=",
    quantity: "12",
    shortDescription: "Mouse Gamer de ultima geração",
  };
  const product2 = {
    name: "Headphone",
    quantity: "12",
    shortDescription: "Mouse Gamer de ultima geração",
  };

  const inventory = [product, product1, product2];

  return (
    <>
      <div className="inventory">
        {inventory.map(function (product) {
          return (
            <Card
              key={product.name}
              item={product}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
