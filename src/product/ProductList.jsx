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
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();

      setProducts(data);
    }

    if (load) {
      fetchProducts();
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
