import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { useParams } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";

const ProductDetail = () => {
  const { addToCart } = useContext(AppContext);

  const [product, setProduct, url] = useState();// new State variable
  const { id } = useParams(); //jo value id me hoga useParms le lega.
  console.log(id);
  // const url = "http://localhost:4000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.product);
      setProduct(api.data.product); 
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="left">
          <img
            src={product?.imgSrc}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <div className="right">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <h1>
            {product?.price}
            {" ₹"}
          </h1>
          <h3>{product?.category}</h3>
          <div className="my-5">
            <button className="btn btn-danger mx-3">Buy Now</button>
            <button
              className="btn  btn-warning "
              onClick={() =>
                addToCart(
                  product._id,
                  product.title,
                  product.price,
                  1,
                  product.imgSrc,
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <RelatedProduct category={product?.category} />
    </>
  );
};

export default ProductDetail;
