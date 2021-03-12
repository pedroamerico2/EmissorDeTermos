import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Styles/Header.css";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="http://sirtec.com.br/wp-content/themes/sirtec/images/sirtec_logo.png"
            height="50px"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Geradores" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/geratermos">Gera Termos</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/painel">Painel</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">#</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              #
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
