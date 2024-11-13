import { useContext } from "react";
import { ItemContext, ACTION } from "/src/context/ItemContext.jsx";
import { Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const { dispatch, state } = useContext(ItemContext);
  console.log(state.cart);

  const removeItem = (item_id) => {
    const quantity_val = state.cart.find((item) => item.id === item_id);
    if (quantity_val.quantity > 1) {
      dispatch({ type: ACTION.DECREASE_QUANTITY, payload: { id: item_id } });
    } else {
      dispatch({ type: ACTION.REMOVE_ITEM, payload: { id: item_id } });
    }
  };

  const addItem = (item_id) => {
    const is_exist = state.cart.some((item) => item.id === item_id);
    if (!is_exist) {
      dispatch({ type: ACTION.ADD_ITEM, payload: { id: item_id } });
    } else {
      dispatch({ type: ACTION.INCREASE_QUANTITY, payload: { id: item_id } });
    }
  };

  const total_amount = (state_cart) =>
    state_cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart-container">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i>
      </Link>
      {state.cart.length > 0 ? (
        <>
          {state.cart.map((item) => (
            <div key={item.id} className="Product-info">
              <h1>Product Name: {item.name}</h1>
              <h1>Price: {item.price}</h1>
              <div className="buttons">
                <Link to={`/item/${item.id}`}>
                  <i className="fas fa-eye"></i>
                </Link>
                <button onClick={() => removeItem(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => addItem(item.id)}>+</button>
              </div>
            </div>
          ))}
          <div className="cart-info">
            <p>Total Products: {state.cart.length}</p>
            <p>Total Amount: {total_amount(state.cart)}</p>
          </div>
        </>
      ) : (
        <div className="empty-product">
          <h1>Your Cart is Empty</h1>
          <Link to="/">Buy Products</Link>
        </div>
      )}
    </div>
  );
}
