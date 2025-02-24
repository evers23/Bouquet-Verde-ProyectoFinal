import { useEffect, useContext, useState } from "react";
import { ProductCard } from "../components/products/ProductCard";

import { ProductContext } from "../context/ProductProvider";

export const ProductsPage = () => {
  const { products, loadProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);
  useEffect(() => {
    setLoading(true);
    loadProducts();
    setLoading(false);
  }, [key]);

  if (products.length === 0 && !loading)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <h1 className="text-3xl font-bold">
          ¡No hay ningún producto disponible por el momento!
        </h1>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {!loading ? products.map((product) => (
        <ProductCard product={product} key={product.id} />
      )): "Cargando"}
    </div>
  );
};
