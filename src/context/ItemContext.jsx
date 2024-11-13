import React, { useState, useReducer, useContext } from "react";
const itemsCatalog = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop with 16GB RAM and 512GB SSD.",
    rating: 4.7,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description:
      "Latest model smartphone with a stunning display and powerful processor.",
    rating: 4.5,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description:
      "Noise-canceling headphones with long battery life and premium sound quality.",
    rating: 4.3,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 4,
    name: "Keyboard",
    price: 100,
    description: "Mechanical keyboard with customizable RGB backlighting.",
    rating: 4.6,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 250,
    description: "Feature-packed smartwatch with health tracking and GPS.",
    rating: 4.2,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 6,
    name: "Tablet",
    price: 600,
    description:
      "Lightweight tablet with high-resolution display and long battery life.",
    rating: 4.4,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 50,
    description:
      "Ergonomic gaming mouse with high precision and customizable buttons.",
    rating: 4.8,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 150,
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    rating: 4.5,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 9,
    name: "External Hard Drive",
    price: 100,
    description: "1TB external hard drive with USB 3.0 for fast data transfer.",
    rating: 4.6,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 10,
    name: "Wireless Charger",
    price: 30,
    description: "Fast wireless charger compatible with most smartphones.",
    rating: 4.3,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 11,
    name: "Bluetooth Headset",
    price: 80,
    description:
      "Wireless Bluetooth headset with noise reduction and long battery life.",
    rating: 4.5,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 12,
    name: "Smart TV",
    price: 1500,
    description: "Ultra HD Smart TV with voice control and streaming apps.",
    rating: 4.8,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 13,
    name: "Digital Camera",
    price: 700,
    description: "DSLR camera with high-resolution image and video capture.",
    rating: 4.6,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 14,
    name: "Laptop Sleeve",
    price: 40,
    description: "Protective sleeve for laptops up to 15 inches.",
    rating: 4.4,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 15,
    name: "Smart Light Bulb",
    price: 40,
    description: "Wi-Fi enabled smart light bulb with adjustable brightness.",
    rating: 4.2,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 16,
    name: "Robot Vacuum",
    price: 250,
    description: "Smart robot vacuum with automated cleaning and mapping.",
    rating: 4.7,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 17,
    name: "4K Webcam",
    price: 120,
    description:
      "High-definition 4K webcam with auto-focus and noise cancellation.",
    rating: 4.5,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 18,
    name: "Game Console",
    price: 350,
    description: "Next-gen gaming console with 4K support and exclusive games.",
    rating: 4.9,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 19,
    name: "E-Reader",
    price: 130,
    description:
      "Portable e-reader with glare-free screen and adjustable lighting.",
    rating: 4.6,
    quantity: 1,
    iswishlisted: false,
  },
  {
    id: 20,
    name: "Smart Thermostat",
    price: 150,
    description:
      "Smart thermostat with Wi-Fi control and energy-saving features.",
    rating: 4.4,
    quantity: 1,
    iswishlisted: false,
  },
];

export const ACTION = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  INCREASE_QUANTITY: "increase-quantitiy",
  DECREASE_QUANTITY: "decrease-quantitiy",
  TOGGLE_WISHLIST: "toogle-wishlist",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD_ITEM:
      // console.log("In Add Item");
      const cart_data = cartItem(action.type, action.payload.id, state.cart);
      console.log(cart_data);
      console.log(state.cart);
      console.log({ ...state, cart: [...state.cart, ...cart_data] });
      return { ...state, cart: [...state.cart, ...cart_data] };

    case ACTION.REMOVE_ITEM:
      // console.log("Inside Remove Item");
      const removed_data = cartItem(action.type, action.payload.id, state.cart);
      console.log(removed_data);
      return { ...state, cart: [...removed_data] };

    case ACTION.INCREASE_QUANTITY:
      // console.log("Inside Increase Quantity");
      updated_cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, cart: [...updated_cart] };

    case ACTION.DECREASE_QUANTITY:
      // console.log("Inside Decrease Quantity");
      updated_cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { ...state, cart: [...updated_cart] };

    case ACTION.TOGGLE_WISHLIST:
      const is_exist = state.wishlist.filter(
        (item) => item === action.payload.id
      );

      if (is_exist.length > 0) {
        final_data = state.wishlist.filter((item) => !is_exist.includes(item));
        return { ...state, wishlist: [...final_data] };
      } else {
        const itemdata = itemsCatalog.filter(
          (item) => item.id === action.payload.id
        );

        return { ...state, wishlist: [...state.wishlist, itemdata[0].id] };
      }

    // const modified = data.map((item) => item.id);

    // console.log({ ...state, wishlist: [state.wishlist, ...data] });

    // wishlistdata = itemsCatalog.map((item) => {
    //   if (item.id === action.payload.id) {
    //     return {
    //       ...item,
    //       iswishlisted: !item.iswishlisted,
    //     };
    //   }
    // });
    // console.log(wishlistdata);
    // return { ...state, wishlist: [...wishlistdata] };

    default:
      return state.cart;
  }
}

function cartItem(type, id, cart) {
  if (type == ACTION.ADD_ITEM) {
    return itemsCatalog.filter((item) => {
      return item.id === id;
    });
  } else {
    return cart.filter((item) => {
      return item.id !== id;
    });
  }
}

export const ItemContext = React.createContext({
  itemsCatalog: itemsCatalog,
  cart: [],
  wishlist: [],
  dispatch: () => {},
});

const initialState = {
  cart: [],
  wishlist: [],
};

export const ItemContextProvider = (probs) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  return (
    <ItemContext.Provider
      value={{
        state,
        dispatch,
        itemsCatalog,
      }}
    >
      {probs.children}
    </ItemContext.Provider>
  );
};
