/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      qty: 0,
    };

    this.handleBag = this.handleBag.bind(this);
  }

  handleBag = () => {
    // console.log(this.props)
    localStorage.setItem("photo", this.props.photo);
    localStorage.setItem("name", this.props.name);
    localStorage.setItem("price", this.props.price);
    localStorage.setItem("id", this.props.product)
  };

  render() {
    const {
      category,
      conditions,
      description,
      name,
      photo,
      price,
      qty,
      size,
      index,
    } = this.props;
    return (
      <Container className="main">
        <p className="font-p-title">
          Home {">"} category {">"} <b>T-Shirt</b>
        </p>
        <div className="row" key={index}>
          <div className="col-sm-4">
            <img src={photo} alt="img" className="rounded img-fluid" />
            <div className="mt-3 more-images">
              <ul className="horizontal-list">
                <li>
                  <a href>
                    <img
                      src={photo}
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src={photo}
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src={photo}
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src={photo}
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src={photo}
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <h3>{name}</h3>
            <p className="font-p-title ml-1">
              <b>{category}</b>
            </p>
            <div className="rating mt-n2 ml-1">
              <FontAwesomeIcon className="bintang" icon={faStar} />
              <FontAwesomeIcon className="bintang" icon={faStar} />
              <FontAwesomeIcon className="bintang" icon={faStar} />
              <FontAwesomeIcon className="bintang" icon={faStar} />
              <FontAwesomeIcon className="bintang" icon={faStar} />
              <span>(5)</span>
            </div>
            <p className="font-p-title ml-1 mt-3">
              <b>Price</b>
            </p>
            <h2 className="mt-n3">
              <b>{price}</b>
            </h2>
            <p className="font-p-title ml-1 mt-3 text-dark">
              <b>Color</b>
            </p>
            <ul className="horizontal-list">
              <li>
                <span className="color-selected rounded-circle border border-danger">
                  <a
                    href
                    className="color-option rounded-circle"
                    style={{ backgroundColor: "black" }}
                  />
                </span>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-danger"></a>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-primary"></a>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-success"></a>
              </li>
            </ul>
            <div className="row justify-content-start">
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Size</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                  <li>
                    <span className="color-selected rounded-circle bg-secondary">
                      <FontAwesomeIcon className="minus" icon={faMinus} />
                    </span>
                  </li>
                  <li style={{ margin: "0.9rem 1rem" }}>
                    <span>{size}</span>
                  </li>
                  <li>
                    <span className="color-selected rounded-circle">
                      <FontAwesomeIcon className="plus" icon={faPlus} />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Jumlah</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                  <li>
                    <span className="color-selected rounded-circle bg-secondary">
                      <FontAwesomeIcon className="minus" icon={faMinus} />
                    </span>
                  </li>
                  <li style={{ margin: "0.9rem 1rem" }}>
                    <span>{qty}</span>
                  </li>
                  <li>
                    <span className="color-selected rounded-circle">
                      <FontAwesomeIcon className="plus" icon={faPlus} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btnGrup d-flex justify-content-between">
              <a href className="btnGrup btn-chart mt-2">
                Chart
              </a>
              <a href className="btnGrup btn-add-bag mt-2">
                Add bag
              </a>
              <Link
                to="/mybag"
                className="btnGrup btn-buy mt-2"
                onClick={this.handleBag}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        <h3 className="mt-3">Informasi Produk</h3>
        <div>
          <p className="mt-3 text-dark">
            <b>Condition</b>
          </p>
          <p className="mt-n3 text-danger">
            <b>{conditions}</b>
          </p>
          <p className="mt-4 text-dark">
            <b>Description</b>
          </p>
          <p>{description}</p>
        </div>
        <h2>Product Review</h2>

        <Container style={{ marginBottom: "70px" }}>
          <div className="row" key={index}>
            <div className="col-md-3 align-item-center justify-content-center">
              <h1 className="display-1 d-inline">
                <b>5.0</b>
              </h1>
              <p className="d-inline-block ml-1 mt-3 text-dark">
                <b>/ 10</b>
              </p>
              <div className="rating mt-n2 ml-1 d-flex">
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="side">
                  <div>
                    {" "}
                    <FontAwesomeIcon className="bintang" icon={faStar} />5
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>4</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />4
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />3
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />2
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />1
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Menu Bottom */}
        <div className="btn d-flex d-lg-none">
          <a href className="btnBtm btn-chart mt-2">
            Chart
          </a>
          <a href className="btnBtm btn-add-bag mt-2">
            Add bag
          </a>
          <Link
            to="/mybag"
            className="btnBtm btn-buy mt-2"
            onClick={this.handleBag}
          >
            {" "}
            Buy Now{" "}
          </Link>
        </div>
      </Container>
    );
  }
}
