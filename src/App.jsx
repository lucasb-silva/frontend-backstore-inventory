import "./App.css";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <div className="inventory">
        <Product name="Mouse Gamer" image="https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ=" quantity="10" shortDescription="Mouse Gamer de ultima geração" />
        <Product name="Mouse Gamer" image="https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ=" quantity="10" shortDescription="Mouse Gamer de ultima geração" />
        <Product name="Mouse Gamer" image="https://media.istockphoto.com/id/960058282/pt/foto/gaming-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xMKKwTxf5dkLexkEn2CeiqCfHDYlIyn9uO0aSofgCMQ=" quantity="10" shortDescription="Mouse Gamer de ultima geração" />
      </div>
    </>
  );
}

export default App;
