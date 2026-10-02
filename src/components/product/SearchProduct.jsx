import React, { useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { Link, useParams} from "react-router-dom";

const SearchProduct = () => {
  const {term} =useParams()
  const { products, addToCart } = useContext(AppContext);
  const [seachProduct, setSearchProduct] = useState([]);
  const url = "http://localhost:4000/api";

  useEffect(() => {
    setSearchProduct(
      products.filter(                        ////doubt
        (data) => data?.title?.toLowerCase().includes(term.toLowerCase())
      ),
    );
  }, [term, products]);

  return (
    <>
      <div className="container text-center">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row container d-flex justify-content-center align-items-center ">
            {seachProduct?.map((product) => (
              <div
                key={product._id}
                className=" my-3 col-md-4 d-flex justify-content-center align-items-center "
              >
                <div
                  className="card bg-dark text-light text-center"
                  style={{ width: "18rem" }}
                >
                  <Link
                    to={`/product/${product._id}`}
                    className="d-flex justify-content-center align-items-center p-3"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                        border: "2px solid yellow",
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"></p>
                    <div className="my-3">
                      <button href="#" className="btn btn-primary m-2">
                        {product.price}
                        {"₹"}
                      </button>
                      <button
                        href="#"
                        className="btn btn-warning "
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
