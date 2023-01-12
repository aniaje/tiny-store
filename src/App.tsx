import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Product {
  name: string;
  image: string;
  price: number;
}

const initialProducts: Product[] = [
  { name: "Ottie", image: "./images/book1.jpg", price: 30 },
  {
    name: "Harry",
    image: "./images/book2.jpg",
    price: 40,
  },
  {
    name: "Love",
    image: "./images/book3.jpg",
    price: 50,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [isProductBought, setIsProductBought] = useState(false);
  const [productBought, setProductBought] = useState({
    name: "",
    image: "",
    price: 0,
  });

  return (
    <>
      <h1>Tiny Store</h1>

      <div className={"App-container"}>
        {products.map((product) => {
          return (
            <div className={"App-item"}>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={"Price-item"}>price ${product.price}</div>
              <div className={"Product-name-container"}>
                <h3> {product.name}</h3>
                <button className={"App-button"}>buy</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
