import { ACTION, ItemContext } from "../context/ItemContext";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import React, { useContext } from "react";
export default function ItemComp({ info }) {
  const { dispatch } = useContext(ItemContext);
  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: ACTION.ADD_ITEM, payload: { id: id } });
  };
  //   console.log(info);
  return (
    <div>
      <div key={info.id}>
        <h1>{info.name}</h1>

        <h2>Price : {info.price}</h2>
        <div>
          <button onClick={() => addToCart(info.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
