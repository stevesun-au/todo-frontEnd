import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

function TodoListItemsComponents({ items, handleMarkAsComplete, getItems }) {

  return (
    <>
        <h1>
          Showing {items && items.length} Item(s){' '}
          <Button variant="primary" className="pull-right" onClick={() => getItems()} >
            Refresh
          </Button>
        </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleMarkAsComplete(item)}>
                    Mark as completed
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
 </> );
}

export default TodoListItemsComponents;