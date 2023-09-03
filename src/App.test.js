import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import AddItemComponent from './components/AddItemComponent'
import TodoListItemsComponents from './components/TodoListItemsComponents'
import  '@testing-library/jest-dom/extend-expect'; 

test('renders the footer text', () => {
  render(<Footer
     />)
  const footerElement = screen.getByText(/clearpoint.digital/i)
  expect(footerElement).toBeInTheDocument()
})



test('renders logo and alert', () => {
  const { getByRole, getByText } = render(<AppHeader />);
  const logo = getByRole('img');
  const alert = getByText(/Todo List App/i);
  
  expect(logo).toBeInTheDocument();
  expect(alert).toBeInTheDocument();
});


test('calls handleAdd when clicking "Add Item" button', async () => {
  const handleAddMock = jest.fn();
  const { getByTestId  } = await waitFor(() => render(<AddItemComponent handleAdd={handleAddMock} />));
  const addButton = getByTestId('add-item-button');
  
  fireEvent.click(addButton);
  expect(handleAddMock).toHaveBeenCalled();
});



test('displays correct number of items', () => {
  const items = [
    { id: 1, description: 'Item 1' },
    { id: 2, description: 'Item 2' },
    { id: 3, description: 'Item 3' },
  ];
  const { getByText } = render(<TodoListItemsComponents items={items} />);
  
  expect(getByText(/Showing 3 Item/i)).toBeInTheDocument();webkitURL
  expect(getByText(/Item 1/i)).toBeInTheDocument();
  expect(getByText(/Item 2/i)).toBeInTheDocument();
  expect(getByText(/Item 3/i)).toBeInTheDocument();
});


test('calls handleMarkAsComplete when clicking "Mark as completed" button', () => {
  const handleMarkAsCompleteMock = jest.fn();
  const items = [{ id: 1, description: 'Item 1' }];
  const { getByText } = render(
    <TodoListItemsComponents items={items} handleMarkAsComplete={handleMarkAsCompleteMock} />
  );
  const markButton = getByText(/Mark as completed/i);
  
  fireEvent.click(markButton);
  expect(handleMarkAsCompleteMock).toHaveBeenCalledWith(items[0]);
}); 