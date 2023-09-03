/* // jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
Header.test.js:
jsx
Copy code
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders logo and alert', () => {
  const { getByRole, getByText } = render(<Header />);
  const logo = getByRole('img');
  const alert = getByText(/Todo List App/i);
  
  expect(logo).toBeInTheDocument();
  expect(alert).toBeInTheDocument();
});
AddTodoForm.test.js:
jsx
Copy code
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodoForm from './AddTodoForm';

test('calls handleAdd when clicking "Add Item" button', () => {
  const handleAddMock = jest.fn();
  const { getByText } = render(<AddTodoForm handleAdd={handleAddMock} />);
  const addButton = getByText(/Add Item/i);
  
  fireEvent.click(addButton);
  expect(handleAddMock).toHaveBeenCalled();
});
TodoItemsTable.test.js:
jsx
Copy code
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItemsTable from './TodoItemsTable';

test('displays correct number of items', () => {
  const items = [
    { id: 1, description: 'Item 1' },
    { id: 2, description: 'Item 2' },
  ];
  const { getByText } = render(<TodoItemsTable items={items} />);
  
  expect(getByText(/Showing 2 Item/i)).toBeInTheDocument();
  expect(getByText(/Item 1/i)).toBeInTheDocument();
  expect(getByText(/Item 2/i)).toBeInTheDocument();
});

test('calls handleMarkAsComplete when clicking "Mark as completed" button', () => {
  const handleMarkAsCompleteMock = jest.fn();
  const items = [{ id: 1, description: 'Item 1' }];
  const { getByText } = render(
    <TodoItemsTable items={items} handleMarkAsComplete={handleMarkAsCompleteMock} />
  );
  const markButton = getByText(/Mark as completed/i);
  
  fireEvent.click(markButton);
  expect(handleMarkAsCompleteMock).toHaveBeenCalledWith(items[0]);
}); */