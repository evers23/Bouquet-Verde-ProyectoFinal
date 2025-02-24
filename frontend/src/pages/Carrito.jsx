import "../assets/styles/Carrito.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import { formatPriceToCLP } from "../hooks/formatPriceToCLP";
import { Link } from "react-router-dom";

function CartItem({
  image_url,
  title,
  quantity,
  price,
  addToCart,
  decreaseQuantity,
}) {
  return (
    <li>
      <img src={image_url} alt={`Imagen de ${title}`} />
      <div>
        <strong>{title}</strong> - <p>{formatPriceToCLP(price)}</p>
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export const Carrito = () => {
  const { cart, clearCart, addToCart, decreaseQuantity, totalPrice } =
    useCart();

  return (
    <div className="cart">
      <div className="cart-content">
        {cart.length === 0 ? (
          <>
           <p className="text-center text-2xl text-slate-700">Tu carrito está vacío! =( </p>
           <p className="text-center text-sm text-sand-500 mt-4">Ingresa a tu cuenta para ver tu carrito y poder comprar</p> 
            <Link to="/products">
              <button className="bg-green-500 text-white px-4 py-2 mt-4">
                Agregar productos a tu carrito
              </button>
            </Link>
          </>
        ) : (
          <ul>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                decreaseQuantity={() => decreaseQuantity(product)}
                {...product}
              />
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <button onClick={clearCart}>
              <MdOutlineRemoveShoppingCart />
            </button>
            <p>Total: {formatPriceToCLP(totalPrice)}</p>
          </>
        )}
      </div>
    </div>
  );
};
