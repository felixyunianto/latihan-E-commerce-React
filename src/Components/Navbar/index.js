import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InputGroup, Navbar, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default class Navbarr extends Component {
  render() {
    return (
      <header className="header">
        <Navbar fixed="top" className="container" bg="white">
          <Link to="/" className="brand">
            <div className="brand d-lg-none">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoKecil_ijoj9p.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </div>
            <div className="brand2">
              <Navbar.Brand>
                <img
                  src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
                  width="30"
                  height="44"
                  className="d-inline-block align-top nav-logo"
                  alt="React Bootstrap logo"
                />
                <Navbar.Text className="textNavbar ">Blanja</Navbar.Text>
              </Navbar.Brand>
            </div>
          </Link>
          <Navbar.Toggle />
          <div className="input-search input-search-field d-flex justify-content-end ml-5">
            <InputGroup className="">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append className="mr-2">
                <FontAwesomeIcon className="icon-search " icon={faSearch} />
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="icon-filter">
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <Link to="/mybag" className="brand">
          <Navbar.Collapse className="justify-content-end">
            <img
              src={
                "https://res.cloudinary.com/devloops7/image/upload/v1606580439/newBlanja/cart_s7fhsn.png"
              }
              style={{ marginRight: "40px", marginLeft: "20px" }}
              alt=""
            />
            <div className="btn-login-nav">Login</div>
            <div className="btn-signup-nav">Signup</div>
          </Navbar.Collapse>
          </Link>
        </Navbar>
      </header>
    );
  }
}
