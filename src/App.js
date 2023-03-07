import Header from "./components/Header";
import Top from "./components/Top";
import Cart from "./components/Cart";
import data from "./data";
import data2 from "./data2";
import data3 from "./data3";
import FAQ from "./components/FAQ";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import { ShopContexProvider } from "./context/shop-context";

function App() {
  const { products } = data;
  const { productsMid } = data2; 
  const { productsBot } = data3; 

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <FAQ></FAQ>
        <Cart></Cart>
      </div>
      <ShopContexProvider>
      <div><Top products={products}></Top></div>
      <div><Middle productsMid = {productsMid}></Middle> </div>
      <div><Bottom productsBot = {productsBot}></Bottom></div>
      </ShopContexProvider>
      </div>
    
  );
}

export default App;
