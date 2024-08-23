"use client";

import {createContext, useState, useEffect} from "react";
import {ICartContextType, IProduct} from "@/interfaces/Interfaces";
import {fetchProductById} from "@/lib/server/fetchProducts";

const addItem = async (
  cartItems: IProduct[],
  product: number
): Promise<IProduct[]> => {
  const existingProduct = cartItems.find((item) => item.id === product);

  if (existingProduct) {
    return [...cartItems, existingProduct];
  }

  const data = await fetchProductById(product.toString());

  return [...cartItems, data];
};

const removeItem = (cartItems: IProduct[], product: number) => {
  return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  proceedToCheckout: () => {},
});

const checkout = async (cartItems: IProduct[]) => {
  try {
    const products = cartItems.map((item) => item.id); //products: [id's]

    const token = localStorage.getItem("token");
    const response = await fetch("https://pi-ft52.onrender.com/orders", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({products}),
    });

    if (response.ok) {
      console.log("success");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (product: number) => {
    setCartItems(removeItem(cartItems, product));
  };

  const proceedToCheckout = () => {
    checkout(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{cartItems, total, addToCart, removeFromCart, proceedToCheckout}}
    >
      {children}
    </CartContext.Provider>
  );
};
