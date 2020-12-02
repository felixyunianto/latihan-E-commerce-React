/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Container, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert'
import "./style.css";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      qty: 0,
      showModal: false,
      product_id: null,
      product_name : '',
      product_price : '',
      product_qty : '',
      product_desc: '',
    };
    this.handleBag = this.handleBag.bind(this);
    this.handleShow = this.handleShow.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = (id) => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8005/products/${id}`)
        window.location = "/"
      } 
    });
  }

  handleShow = (id) => {
    this.setState(() => {
      return {
        showModal: true,
      }
    })

    axios.get(`http://localhost:8005/products/${id}`)
    .then((res) => {
      this.setState(() => {
        return {
          product_id : res.data.data.id,
          product_name : res.data.data.product_name,
          product_price : res.data.data.product_price,
          product_qty : res.data.data.product_qty,
          product_desc : res.data.data.product_desc,
        }
      })
      // console.log(res.data);
    })
  }

  handleEnd = () => {
    this.setState(() => {
      return {
        showModal: false
      }
    })
    
  }

  handleBag = () => {
    localStorage.setItem("photo", this.props.photo);
    localStorage.setItem("name", this.props.name);
    localStorage.setItem("price", this.props.price);
    localStorage.setItem("id", this.props.product)
  };

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit(){
    const url = `http://localhost:8005/products/${this.state.product_id}`
    axios.put(url, {
      product_name: this.state.product_name,
      product_price: this.state.product_price,
      product_qty: this.state.product_qty,
      product_desc: this.state.product_desc,
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  render() {
    const {
      product,
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
            <div className="d-flex">
              <Button onClick={() => {this.handleShow(product)}} >
                <FontAwesomeIcon className="bintang" icon={faStar} />
              </Button>
              <Button onClick={() => {this.handleDelete(product)}} >
                <FontAwesomeIcon className="bintang" icon={faMinus} />
              </Button>
              <h3>{name}</h3>
            </div>
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
        <Modal show={this.state.showModal} onHide={this.handleEnd}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="form-edit">
              <Form.Group controlId="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="hidden" placeholder="Enter Product Name" value={product} onChange={e => this.handleChange(e)} name="product_id"/>
                <Form.Control type="text" placeholder="Enter Product Name" value={this.state.product_name} onChange={e => this.handleChange(e)} name="product_name"/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" value={this.state.product_price} onChange={e => this.handleChange(e)} name="product_price"/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" value={this.state.product_qty} onChange={e => this.handleChange(e)} name="product_qty"/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" value={this.state.product_desc} onChange={e => this.handleChange(e)} name="product_desc"/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleEnd}>
              Close
              </Button>
              <Link to="/"onClick={this.handleSubmit} variant="primary">Save Changes</Link>
          </Modal.Footer>
        </Modal>
      </Container>

    );
  }
}
