import React from "react";
import Navbar from "../components/Navbar";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";

function CreateProduct() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="text-center my-3">Crear Producto 🫙</h1>
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
                    <Form.Label htmlFor="unidad">Unidad de Medida</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Unidad de Medida del Producto"
                      id="unidad"
                      name="unidad"
                    />
                  </Form.Group>
                  <Button variant="primary" className="mt-3 col-12">Guardar</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateProduct;
