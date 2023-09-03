import React from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';

function AddItemComponent({ description, handleDescriptionChange, handleAdd, handleClear, error }) {
  return (
    <Container>
      <h1>Add Item</h1>
      <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col md="6">
            <Form.Control
              type="text"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => handleDescriptionChange(e)}
            />
          </Col>
          {error && <div className="error-message">{error}</div>} 
        </Form.Group>
        <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
          <Stack direction="horizontal" gap={2}>
            <Button data-testid="add-item-button" variant="primary" onClick={() => handleAdd()}>
              Add Item
            </Button>
            <Button variant="secondary" onClick={() => handleClear()}>
              Clear
            </Button>
          </Stack>
        </Form.Group>
    </Container>
  );
}

export default AddItemComponent;