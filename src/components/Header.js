import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="row block center">
      <div>
        <a href="/">
          <h1>bsp.photo</h1>
        </a>
      </div>
      <div>
        <a href="/cart">Checkout </a>
      </div>
    </header>
  );
}
