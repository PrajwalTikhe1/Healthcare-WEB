import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "@material-ui/core/Link";

function Product({ title, image, id, price, rating }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    toast("Added item to basket!");
  };

  return (
    <div className="product">
      <div className="product__bestseller">BESTSELLER</div>
      <img src={image} alt="Img" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <strong>₹</strong>
          <t> </t>
          <strong>{price}</strong>
        </div>

        <div className="product__rating">
          <p> {rating} ★ </p>
        </div>
      </div>

      <button onClick={addToBasket} > Add to Basket</button>
    </div>
  );
}

export default Product;
