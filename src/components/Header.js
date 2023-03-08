import React from "react";

export default function Header() {
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>bsp.photo</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Checkout </a>
        <a href="#/about"> About</a>
      </div>
    </header>
  );
}
