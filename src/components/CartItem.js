import React from "react";


export default function CartItem(props) {
  const { name, price, image } = props.data;

  return (
    <div>
      <img className="small" src={image} alt={name} />
      <p>
        <b>{name}</b>
      </p>
      <p> price = {price}</p>
    </div>
  );
}
