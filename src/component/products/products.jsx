import "./products.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { ItemContext, ACTION } from "/src/context/ItemContext";
export default function Products() {
  const { itemsCatalog, dispatch, state } = useContext(ItemContext);

  const handleClick = (item_id) => {
    console.log(state);
    const is_exist = state.cart.filter((item) => {
      return item.id === item_id;
    });
    console.log(is_exist);
    if (is_exist.length === 0) {
      dispatch({
        type: ACTION.ADD_ITEM,
        payload: { id: item_id },
      });
    } else {
      dispatch({
        type: ACTION.INCREASE_QUANTITY,
        payload: { id: item_id },
      });
    }
  };

  const handleWishlist = (item_id) => {
    dispatch({
      type: ACTION.TOGGLE_WISHLIST,
      payload: { id: item_id },
    });
  };
  return (
    <div className="content">
      {itemsCatalog.map((value) => {
        return (
          <div className="Product-info">
            <h1>{value.name}</h1>
            <span>Rs.{value.price}</span>
            <div className="buttons">
              <NavLink
                key={value.id}
                to={`/item/${value.id}`}
                className={({ isActive }) =>
                  isActive ? "blog-link" : "navlink"
                }
              >
                <i className="fas fa-eye"></i>
              </NavLink>
              <button onClick={() => handleWishlist(value.id)}>
                {state.wishlist.includes(value.id) ? (
                  <i className="fas fa-heart wishlisted"></i> // Filled heart
                ) : (
                  <i className="far fa-heart unwishlisted"></i> // Outlined heart
                )}
              </button>

              <button onClick={() => handleClick(value.id)}>
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
