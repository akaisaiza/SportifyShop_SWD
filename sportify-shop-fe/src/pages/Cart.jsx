import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import productData from "../assets/fake-data/products";
import { Link ,useNavigate } from "react-router-dom";
import Helmet from "./../components/Helmet";
import Button from "./../components/Button";
import CartItem from "../components/CartItem";
import numberWithCommas from "./../utils/numberWithCommas";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useAuth } from "../redux/AuthContext";
const Cart = () => {
  const navigate = useNavigate(); // useNavigate hook for redirection
  const { currentUser } = useAuth(); // Assuming useAuth provides the current user object
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("1"); // Default is "On delivery"
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePaymentSuccess = (details, data) => {
    alert("Payment Successful!");
    console.log(details, data);
    setOrderSuccess(true);
    setShowPaymentModal(false);
  };
  useEffect(() => {
    if (!currentUser) {
      navigate('/login'); 
    }
  }, [currentUser, navigate]);
  const renderPayPalButtons = () => {
    return (
      <PayPalScriptProvider options={{ "AY3c8KVgmmGEVnNijynYLlyqY5HPgtCcpMz5UnFyS1UMsicz9IxR3o7-fkbygUFwTVp_RIfHhzGRi-68": "ENqGvuKXmTj8Y9ncXxImaWJ2Z3YYmiVS15ByQMNMIcAShAPi54ZubUF0NomlkQ-ZuDIiLQftBa96Whc0" }}>
        <PayPalButtons 
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalPrice.toString(), // Ensure this is a string
                },
              }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handlePaymentSuccess(details, data);
            });
          }}
        />
      </PayPalScriptProvider>
    );
  };
  const handlePlaceOrder = () => {
    if (paymentMethod === "1") {
      alert("Đặt hàng thành công! Chúng tôi sẽ sớm liên hệ với bạn.");
      setOrderSuccess(true);
    } else if (paymentMethod === "2") {
      setShowPaymentModal(true);
    } else {
      alert("Vui lòng chọn phương thức thanh toán");
    }
  };

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>${numberWithCommas(totalPrice)}</span>
            </div>
          </div>

          <div className="cart__info__btn">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
            >
              <option value="1">Khi nhận hàng</option>
              <option value="2">Thẻ ngân hàng</option>
              <option value="3">Paypal</option>
            </select>
            <Button size="block" onClick={handlePlaceOrder}>
              Đặt hàng
            </Button>
            <Link to="/nike_webshop/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>

        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
      {orderSuccess && (
        <div className="order-success-message">
          Đặt hàng thành công! Chúng tôi sẽ sớm liên hệ với bạn.
        </div>
      )}
       {showPaymentModal && renderPayPalButtons()}
      <Modal isOpen={showPaymentModal} toggle={() => setShowPaymentModal(false)}>
        <ModalHeader>Payment Method</ModalHeader>
        <ModalBody>
          <div className="container mt-5 mb-5 text-center">
            <div className="row g-3">
              <div className="">
                <span>Payment Method</span>
                <div className="card">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header p-0">
                        <h2 className="mb-0">
                          <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="d-flex align-items-center justify-content-between">
                              <span>Credit card</span>
                              <div className="icons">
                                <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Credit Card Icon" />
                                <img src="https://i.imgur.com/W1vtnOV.png" width="30" alt="Credit Card Icon" />
                                <img src="https://i.imgur.com/35tC99g.png" width="30" alt="Credit Card Icon" />
                                <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="Credit Card Icon" />
                              </div>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body payment-card-body">
                          <span className="font-weight-normal card-text">Card Number</span>
                          <div className="input">
                            <i className="fa fa-credit-card"></i>
                            <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                          </div>
                          <div className="row mt-3 mb-3">
                            <div className="col-md-6">
                              <span className="font-weight-normal card-text">Expiry Date</span>
                              <div className="input">
                                <i className="fa fa-calendar"></i>
                                <input type="text" className="form-control" placeholder="MM/YY" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <span className="font-weight-normal card-text">CVC/CVV</span>
                              <div className="input">
                                <i className="fa fa-lock"></i>
                                <input type="text" className="form-control" placeholder="000" />
                              </div>
                            </div>
                          </div>
                          <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePlaceOrder}>
            Đặt hàng
          </Button>
          <Button color="secondary" onClick={() => setShowPaymentModal(false)}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </Helmet>

  );
};

export default Cart;
