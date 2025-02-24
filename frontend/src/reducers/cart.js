export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  TOTAL_PRICE: "TOTAL_PRICE",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTIONS_TYPES.DECREASE_QUANTITY: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
    
      if (productInCartIndex >= 0) {
        const newState = [...state];
        if (newState[productInCartIndex].quantity > 0) {
          newState[productInCartIndex].quantity -= 1;
        }
        if (newState[productInCartIndex].quantity === 0) {
          newState.splice(productInCartIndex, 1);
        }
        console.log("Updated state after DECREASE_QUANTITY:", newState);
        updateLocalStorage(newState);
        return newState;
      }
      return state;
    }
    
    
    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }

    case CART_ACTIONS_TYPES.TOTAL_PRICE: {
      return state.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
  }
  return state;
};
