import Header from "./components/Header";
import Top from "./components/Top";
import Cart from "./components/Cart";
import dataTop from "./data/dataTop";
import dataMid from "./data/dataMid";
import dataBot from "./data/dataBot";
import FAQ from "./components/FAQ";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  const { productsTop } = dataTop;
  const { productsMid } = dataMid;
  const { productsBot } = dataBot;

  return (
    <div className="App">
      <Header></Header>
      <ShopContextProvider>
        <div className="row">
          <FAQ></FAQ>
          <Cart></Cart>
        </div>
        <div>
          <Top productsTop={productsTop}></Top>
        </div>
        <div>
          <Middle productsMid={productsMid}></Middle>
        </div>
        <div>
          <Bottom productsBot={productsBot}></Bottom>
        </div>
      </ShopContextProvider>
    </div>
  );
}

export default App;
