import React, { useContext } from "react";
import {ShopContext} from '../context/shop-context'; 

export default function Product(props) {
  const {addToCart } = useContext(ShopContext); 
  const { product } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>
        <button onClick={ () => addToCart(product.id) }> Add to cart </button>
      </div>
    </div>
  );
}
