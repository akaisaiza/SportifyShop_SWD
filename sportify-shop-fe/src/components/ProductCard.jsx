import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { set } from "./../redux/product-modal/productModalSlice";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/nike_webshop/catalog/${props.productID}`}>
        <div className="product-card__image">
          <img src={props.urlImg} alt={props.productName} />
        </div>
        <h3 className="product-card__name">{props.productName}</h3>
        <div className="product-card__price">
          ${numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del>${numberWithCommas(500)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-card"
          animate={true}
          onClick={() => dispatch(set(props.productID))}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  price: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productID: PropTypes.number.isRequired,
};

export default ProductCard;
