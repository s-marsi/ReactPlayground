import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./css/Layouts.css";

export default function Layouts() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-50">
        <div className="container-fluid ms-3">
          <Link className="navbar-brand" to="/">
            REACT-APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="shop">
                  Shop
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info rounded" to="create">
                  New Product
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid bg-black text-center"
        style={{ height: "150px", borderRadius: "7px", padding: "40px" }}
      >
        <h1 className="text-light">REACT TEST</h1>
        <p className="text-light">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <Outlet/>
      <div className="w-100 card bg-dark text-light mt-5" style={{ "position" : "relative", "bottom" : "0"}}>
        <h1 className="text-center p-5">FOOTER</h1>
      </div>
    </>
  );
}
