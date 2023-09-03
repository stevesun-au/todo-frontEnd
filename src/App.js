import './App.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Header from './components/AppHeader';
import AddTodoForm from './components/AddItemComponent';
import Footer from './components/Footer';
 import TodoListItemsComponents from './components/TodoListItemsComponents'
 import axios from 'axios';



const App = () => {
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage]= useState('');
  
    useEffect(() => {
    },); 
  
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    };
  


    const handleAdd = async () => {
        try {
          setErrorMessage('');
          const newTodo = { description, completed: false };
          const response = await axios.post('https://localhost:5001/api/todoitems', newTodo);
          setItems([...items, response.data]);
          setDescription('');
        } catch (error) {
          setErrorMessage(error.response.data);
        }
      };
  
    const handleClear = () => {
      setDescription('');
    };
  
    const handleMarkAsComplete = async (item) => {
      try {
        // Mark todo item as completed using axios or any other method
         item.isCompleted = true;
        const response = await axios.put('https://localhost:5001/api/todoitems/'+item.id, item);
        let afterMakr = items.filter((x)=>{return x.id!==item.id });
        setItems(afterMakr);
      } catch (error) {
        setErrorMessage(error);

      }
    };

  const getItems =  async() => {
        try {
            if(items.length!==0){
            const response = await axios.get('https://localhost:5001/api/todoitems/');
            setItems(response.data);}
        } catch (error) {
          setErrorMessage(error);
        }
      }

  return (
    <div className="App">
      <Container>
        <Header />
        <Row>
          <Col>
            <AddTodoForm
              description={description}
              handleDescriptionChange={handleDescriptionChange}
              handleAdd={handleAdd}
              handleClear={handleClear}
              error = {errorMessage}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TodoListItemsComponents
              items={items}
              handleMarkAsComplete={handleMarkAsComplete}
              getItems={ getItems}
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;