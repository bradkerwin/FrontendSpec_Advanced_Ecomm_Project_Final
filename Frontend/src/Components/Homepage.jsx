import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dollarSign from "../images/dollar_sign.jpg";
import electronicsPic from "../images/electronics.jpg";
import onlineShopping from "../images/Online_shopping.jpg";

const HomePage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div>
      <h1 className="text-center">Welcome Back {user.name}!</h1>
      <Container className="py-3 text-center">
        <Row md={4}>
        <h3>Home of the Best Shopping Experience You Will Ever Have!</h3>
        <Col>
            <img src={onlineShopping} alt="Person shopping online"></img>
        </Col>
        </Row>
      </Container>

      <Container className="py-3 text-center">
        <Row md={6}>
        <h3>Check Out Our Fine Selection of Top Quality Products!</h3>
        <Col>
            <img src={electronicsPic} alt="electronics"></img>
        </Col>
        </Row>
      </Container>

      <Container className="py-3 text-center">
        <Row md={6}>
        <h3>Buy the best product and Sell your products right here!</h3>
        <Col>
            <img src={dollarSign} alt="dollar sign"></img>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
