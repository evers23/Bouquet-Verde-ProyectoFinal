import { Card, Button } from "../ui";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../../hooks/useCart";
import { formatPriceToCLP } from "../../hooks/formatPriceToCLP"
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {

  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <Card key={product.id} className="px-7 py-4 flex flex-col justify-center items-center">
      <Link to={`/products/${product.id}`} className="no-underline">
        {product.image_url && (
          <img
            src={product.image_url}
            alt={`Imagen de ${product.title}`}
            className="w-full h-48 object-cover"
          />
        )}
        <h1 className="text-2xl font-bold text-center">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-2xl font-bold text-center">{formatPriceToCLP(product.price)}</p>
      </Link>
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
    </Card>
  );
};
