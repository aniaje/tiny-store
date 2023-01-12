import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IProduct } from "./types";
import { Product } from "./components/Product";
import { PurchaseDisplay } from "./components/PurchaseDisplay";

const initialProducts: IProduct[] = [
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

  const handlePurchase = (product: IProduct) => {
    setProductBought(product);
    setIsProductBought(true);
  };

  return (
    <>
      <h1 className="Tiny-store">Tiny Store</h1>
      {isProductBought ? (
        <PurchaseDisplay productPurchased={productBought} />
      ) : (
        <div className={"App-container"}>
          {products.map((product) => {
            return <Product product={product} onBuy={handlePurchase} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
