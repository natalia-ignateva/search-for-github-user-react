import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data);
      console.log(resp.data);
      setUsername('');
    });
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        placeholder="GitHub username"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
