import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export default function CartItem(props) {
  const { id, name, price, image } = props.data;
  const { cartCount } = useContext(ShopContext);
  return (
    <div>
      <img className="small" src={image} alt={name} />
      <p>
        <b>{name}</b>
      </p>
      <p>price = {price}</p>
    </div>
  );
}
