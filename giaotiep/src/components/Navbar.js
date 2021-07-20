import React from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

import "./Navbar.css";

function Navbars() {
  let isHomePage = useLocation().pathname === "/";
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky={"top"}>
        <Container>
          <Row>
            <Navbar.Brand href="/">
              <i className="fas fa-graduation-cap"></i>
            </Navbar.Brand>
          </Row>
          <Row>
            {isHomePage ? (
              <div></div>
            ) : (
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            )}
          </Row>
          <Row>
            <Nav className="me-auto">
              <Nav.Link href="/"> Trang chủ</Nav.Link>
              <Nav.Link href="/courses">Khóa Học</Nav.Link>
              <Nav.Link href="/test">Tự luyện</Nav.Link>
              <Nav.Link href="/news">Tin Tức</Nav.Link>
              <Nav.Link href="/record">Thành tựu</Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
