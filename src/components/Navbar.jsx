import React from "react";
import { Navbar as BootstrapNavBar, Container, Nav } from "react-bootstrap";
import LogoReact from "../assets/react.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <BootstrapNavBar className="bg-body-tertiary">
      <Container>
        <BootstrapNavBar.Brand href="#home">
          <img
            alt="Logo de la empresa"
            src={LogoReact}
            width="30"
            height="30"
            className="d - inline-blok align-top"
          />
        </BootstrapNavBar.Brand>
        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/crear-producto" className="nav-link">
              Crear producto
            </NavLink>
            <NavLink to="/inventario" className="nav-link">
              Inventario
            </NavLink>
          </Nav>
        </BootstrapNavBar.Collapse>
      </Container>
    </BootstrapNavBar>
  );
}

export default Navbar;
