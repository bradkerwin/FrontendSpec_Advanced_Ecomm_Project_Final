import React, { useState } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, removeItem, checkout } from "../redux/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(products)

  const handleAddItem = (id) => {
    dispatch(addItem(id));
    console.log("Product Quantity Increased by 1.");
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    console.log("Product Quantity Decreased by 1.");
  };

  const handleCheckout = (id) => {
    dispatch(checkout());
    alert("Thank you for your business! Have a great day!")
  };

  return (
    <>
      <Container>
        <h2>Your Cart:</h2>
        {products.length === 0 ? (
          <h1>Cart Empty</h1>
        ) : (
        
        <ListGroup>
          {products.map((idx) => (
            <ListGroup.Item key={idx.product_id}>
              <div>
                <h2>{idx.product_name}</h2>
                <h4>Quantity: {idx.quantity}</h4>
                <h4>${idx.price * idx.quantity}</h4>

                <Button
                  className="m-2"
                  variant="success"
                  onClick={() => dispatch(handleAddItem(idx))}
                >
                  Add Quantity
                </Button>
                <Button variant="danger" onClick={() => dispatch(handleRemoveItem(idx))}>
                  Remove Product From Cart
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        )}
        <Button className="m-2" variant="success" onClick={handleCheckout}>
          Checkout
        </Button>

        <Link to={"/products"}>
          <Button className="m-2" variant="primary">
            Back to Product Catalog
          </Button>
        </Link>

        <Link to={"/homepage"}>
          <Button className="m-2" variant="secondary">
            Back to Homepage
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Cart;
