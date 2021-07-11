import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState([]);
  const addNewCard = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div className="App">
      <h1 className="Title">Search a GitHub User</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
}

export default App;
