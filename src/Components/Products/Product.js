import React from "react";
import "./Product.css";

function Product({ heading, price, bg }) {
  return (
    <div className="product-thumb">
      <div className="overlay">
        <h2>{heading}</h2>
        <aside>
          <p>{price}</p>
          <a>
            <button className="btn btn-light product-btn">more details</button>
          </a>
        </aside>
      </div>
      <div className="product-bg" style={{ backgroundImage: `url(${bg})`, backgroundColor: bg ? "" : "black"}} />
    </div>
  );
}

export default Product;
