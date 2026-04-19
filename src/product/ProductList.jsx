import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.info("CALL USE EFFECT with []");
  }, []);

  useEffect(() => {
    console.info("call use effect");
    if (load) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }

    return () => {
      console.info("Product list component unmounted");
    };
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Process</button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductList;
