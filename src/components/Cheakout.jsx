import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import TableProduct from "./TableProduct";
const Cheakout = () => {
  const { cart, userAddress } = useContext(AppContext);
  // console.log("user address ", userAddress);
  return (
    <>
      <div className="container  my-3">
        <h1 className="text-center">Order Summary</h1>

        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                Product Detail
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="bg-dark text-light">
                <TableProduct cart={cart} />
              </th>

              <td className="bg-dark text-light">
                <ul>
                  <li>Name:{userAddress?.fullName}</li>
                  <li>Phone:{userAddress?.phoneNumber}</li>
                  <li>Country:{userAddress?.country}</li>
                  <li>State:{userAddress?.state}</li>
                  <li>Pincode:{userAddress?.pincode}</li>
                  <li>NearBy:{userAddress?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container text-center my-5">
        <button className="btn btn-secondary btn-lg">Procced To Pay</button>
      </div>
    </>
  );
};

export default Cheakout;
