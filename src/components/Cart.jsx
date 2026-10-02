import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQty, clearCart } =
    useContext(AppContext);

  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0); 
  const navigate = useNavigate();
  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);
 
  return (
    <>
      <div className="my5 text-center">
        <button
          className="btn btn-info mx-3"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Total Qty :- {qty}
        </button>
        <button className="btn btn-warning mx-3" style={{ fontWeight: "bold" }}>
          Total Price :- {price}
        </button>
      </div>
      {cart?.items?.map((product) => (
        <div
          key={product.id}
          className="container bg-dark my-5 p-3 text-center"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <div className="cart_img">
              <img
                src={product.imgSrc}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="cart_des">
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>Qty:-{product.qty}</h3>
          </div>
          <div className="cart_action">
            <button
              className="btn btn-danger mx-3"
              style={{ fontWeight: "bold" }}
              onClick={() => decreaseQty(product.productId, 1)}
            >
              Qty--
            </button>
            <button
              className="btn btn-info mx-3"
              onClick={() =>
                addToCart(
                  product?.productId,
                  product.title,
                  product.price / product.qty,
                  1,
                  product.imgSrc,
                )
              }
            >
              One more Item
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => removeFromCart(product?.productId)}
            >
              Remove{" "}
            </button>
          </div>
        </div>
      ))}
      {/* {cart?.items?.length > 0 && ( */}
        <div className="container text-center p-3">
          <button
            className="btn btn-warning mx-3"
            style={{ fontWeight: "bold" }}
            onClick={() => navigate("/shipping")}
          >
            Add Address
          </button>
          
          <button
            className="btn btn-danger mx-3"
            style={{ fontWeight: "bold" }}
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      {/* )} */}
    </>
  );
};

export default Cart;
