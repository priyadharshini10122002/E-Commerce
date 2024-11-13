import "./Item.css";
import { useContext } from "react";
import { ItemContext, ACTION } from "/src/context/ItemContext";
import { useParams, Link } from "react-router-dom";
const Item = () => {
  const { itemsCatalog, dispatch, state } = useContext(ItemContext);
  const { id } = useParams();
  const data = itemsCatalog.filter((item) => item.id === Number(id));

  const handleClick = (item_id) => {
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

  return (
    <>
      {data.map((item) => (
        <div className="product-info">
          <h1>Product Name : {item.name}</h1>
          <h1>Price : {item.price}</h1>
          <h1>Description: {item.description}</h1>
          <h1>Rating: {item.rating}</h1>
          <div className="buttons">
            <Link to="/">
              <i class="fas fa-arrow-left"></i>
            </Link>

            <button onClick={() => handleClick(item.id)}>
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Item;
