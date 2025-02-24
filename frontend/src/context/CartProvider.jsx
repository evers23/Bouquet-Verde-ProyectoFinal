import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (product) => dispatch({ type: "REMOVE_FROM_CART", payload: product });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const decreaseQuantity = (product) => dispatch({ type: "DECREASE_QUANTITY", payload: product });

  const totalPrice = state.reduce((total, item) => total + item.price * item.quantity, 0);

  return { state, addToCart, removeFromCart, clearCart, decreaseQuantity, totalPrice };
}

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart, decreaseQuantity, totalPrice } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
