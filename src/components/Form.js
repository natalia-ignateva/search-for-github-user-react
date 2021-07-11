import React, { useState } from 'react';

const Form = () => {
  const [userName, setUsername] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(userName);
  };
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        value={userName}
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
