import React from 'react';

const Form = () => {
  return (
    <form className="Search">
      <input type="text" placeholder="GitHub username" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
