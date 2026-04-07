import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductList;
