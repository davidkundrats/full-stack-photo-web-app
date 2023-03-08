import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import CartItem from "../components/CartItem";
import allProducts from "../data/fulldata";

export default function Cart() {
  const { cartItems } = useContext(ShopContext)
  return (
    <aside className="block col-1">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div>
        {allProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </aside>
  );
}
