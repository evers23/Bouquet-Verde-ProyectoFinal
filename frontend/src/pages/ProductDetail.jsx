import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import { formatPriceToCLP } from "../hooks/formatPriceToCLP";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/ui";

export const ProductDetail = () => {
  const { id } = useParams(); 
  const { loadProduct } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, removeFromCart, cart } = useCart();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await loadProduct(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, loadProduct]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div className="product-detail">
      <img src={product.image_url} alt={`Imagen de ${product.title}`} className="w-50 h-50 object-cover" />
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-2xl font-bold">{formatPriceToCLP(product.price)}</p>

      <div className="my-2 flex justify-end gap-x-2">
        <Button
          className="bg-slate-500 mx-auto"
          onClick={() =>
            cart.some((item) => item.id === product.id)
              ? removeFromCart(product)
              : addToCart(product)
          }
        >
          <MdAddShoppingCart />{" "}
          {cart.some((item) => item.id === product.id)
            ? "Quitar del Carrito"
            : "Agregar al Carrito"}
        </Button>
      </div>
    </div>
  );
};
