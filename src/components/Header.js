import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="row block center">
      <div>
        <Link to="/">
          <h1>bsp.photo</h1>
        </Link>
      </div>
      <div>
        <Link to="/cart">Checkout </Link>
      </div>
    </header >
  );
}
