import React from 'react'
import {Navbar as BootstrapNavBar, Container, Nav} from "react-bootstrap"
import {NavLink} from 'react-router-dom'

function Navbar(){
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Prueba con Menú</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default Navbar