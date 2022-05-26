import React from "react";

import { useReducer } from "react";

import CartContex from "./cart-context";

const defaulCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
//checking if the item have alredy been added 
    const existedCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedCartItem = state.items[existedCartItemIndex];

    let updateItems;

    if (existedCartItem) {
        // if item existed  
      const updateItem = {
        ...existedCartItem,
        amount: existedCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];

      updateItems[existedCartItemIndex] = updateItem;
    } else {
        //if it's a new item
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existedCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existedCartItem = state.items[existedCartItemIndex];


    const updatedTotalAmount = state.totalAmount - existedCartItem.price;

    let updateItems;
    if (existedCartItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existedCartItem,
        amount: existedCartItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existedCartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaulCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemToCartHandler,
  };
  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};
export default CartProvider;
