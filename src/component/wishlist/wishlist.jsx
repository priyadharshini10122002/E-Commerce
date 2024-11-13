import "./wishlist.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ItemContext, ACTION } from "/src/context/ItemContext";
export default function WishList() {
  const { itemsCatalog, dispatch, state } = useContext(ItemContext);
  const wishlistedItems = itemsCatalog.filter((item) =>
    state.wishlist.includes(item.id)
  );
  console.log(wishlistedItems);
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
      <Link className="back-link" to="/">
        <i class="fas fa-arrow-left"></i>
      </Link>
      {wishlistedItems.map((item) => (
        <div key={item.id} className="Product-info">
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <div className="buttons">
            <Link to={`/item/${item.id}`}>
              {" "}
              <i className="fas fa-eye"></i>
            </Link>
            <button onClick={() => handleWishlist(item.id)}>
              {state.wishlist.includes(item.id) ? (
                <i className="fas fa-heart wishlisted"></i> // Filled heart
              ) : (
                <i className="far fa-heart unwishlisted"></i> // Outlined heart
              )}
            </button>
            <button onClick={() => handleClick(item.id)}>
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
