import Home from "./pages/Home";

import Cart from "./components/Cart";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/cart":
      component = <Cart />;
      break;
  }
  return (
    <>
      <ShopContextProvider>{component}</ShopContextProvider>
    </>
  );
}

export default App;
