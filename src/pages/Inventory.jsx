import React from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";

function Inventario() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="text-center my-3">Control de Inventario 📦</h1>
          </Col>
          <Col xs={12} md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="codigo">Código</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Código del Producto"
                      id="codigo"
                      name="codigo"
                    />
                    <Form.Label htmlFor="nombre">Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del Producto"
                      id="name"
                      name="name"
                    />
                    <Form.Label htmlFor="movimiento">Movimiento</Form.Label>
                    <Form.Control
                      type="text"
                      id="movimiento"
                      name="movimiento"
                    />
                    <Form.Label htmlFor="cantidad">Cantidad</Form.Label>
                    <Form.Control 
                    type="number" 
                    id="cantidad" 
                    name="cantidad" 
                    />
                  </Form.Group>
                  <Button variant="primary" className="mt-3 col-12">
                    Guardar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inventario;
