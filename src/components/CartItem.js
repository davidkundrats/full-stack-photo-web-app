import React from "react";
import img1 from "../assets/img1.jpg";

export default function CartItem(props) {
  const { id, name, price, image } = props.data;

  return (
    <div>
      <img className="small" src={image} alt={name} />
      <p>
        <b>{name}</b>
      </p>
      <p> $ {price}</p>
    </div>
  );
}
