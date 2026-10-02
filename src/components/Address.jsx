import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Address = () => {
  const { shippingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
    city: "",
  });

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { fullName, address, city, state, country, pincode, phoneNumber } =
    formData;
  const submithandler = async (e) => {
    e.preventDefault();
    // alert("your form has been submited")
    // await register (name, email, password)
    // console.log(formData);
    const result = await shippingAddress(
      fullName,
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
    );

    if (result.success) {
      // setReload(!reload)
      navigate("/cheakout");
    }
    // console.log(formData)
    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phoneNumber: "",
      city: "",
    });
  };
  return (
    <>
      <div
        className="container my-5 p-3"
        style={{ border: "2px solid yellow", borderRadius: "10px" }}
      >
        <h1 className="text-center">Shipping Address</h1>
        <form onSubmit={submithandler} className="my-3">
          <div className="row">
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name{" "}
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Country{" "}
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                State
              </label>
              <input
                name="state"
                value={formData.state}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                City
              </label>
              <input
                name="city"
                value={formData.city}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Pincode
              </label>
              <input
                name="pincode"
                value={formData.pincode}
                onChange={onChangerHandler}
                type="number"
                className="form-control bg-dark text-light"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Address/Nearby
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={onChangerHandler}
                type="text"
                className="form-control bg-dark text-light"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="d-grid">
            <button className="btn btn-warning col-6 mx-auto my-3">
              Cheakout
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;


