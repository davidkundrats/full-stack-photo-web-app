import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data";

function App() {
  const { products } = data;

  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products}></Main>
        <Cart></Cart>
      </div>
      <div><Main products={products}></Main></div>
    </div>
  );
}

export default App;
