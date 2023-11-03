import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItemSlice";
import { useNavigate, useParams } from "react-router-dom"; // Import hooks

import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

const ProductView = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { productID } = useParams(); 

  let { product } = props;
  const [previewImg, setPreviewImg] = useState('');
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.urlImg);
    setQuantity(1);
  }, [product]);

  const addToCart = () => {
      dispatch(
        addItem({
          productID: product.productID,
          quantity,
          price: product.price,
        })
      );
      alert("success");
  };

  const goToCart = () => {
      dispatch(
        addItem({
          productID: product.productID,
          quantity,
          price: product.price,
        })
      );
      navigate("/nike_webshop/cart"); // Use navigate to go to the cart route
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.urlImg)}
          >
            <img src={product.urlImg} alt="image01" />
          </div>
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="previewImg" />
        </div>

        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Product Details</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Less" : "More"}
            </Button>
          </div>
        </div>
      </div>

      <div className="product__info">
        <h1 className="product__info__title">{product.productName}</h1>

        <div className="product__info__item">
          <span className="product__info__item__price">
            ${numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Quantity</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>

        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Add to Bag</Button>
          <Button onClick={() => goToCart()}>Buy Now</Button>
        </div>
      </div>

      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Product Details</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Less" : "More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
