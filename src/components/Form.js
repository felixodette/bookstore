import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => (
  <div id="formContainer">
    <form onSubmit={addBook}>
      <input type="text" id="title" placeholder="Title" />
      <input type="text" id="author" placeholder="Author" />
      <button type="submit" id="addBook">Add</button>
    </form>
  </div>
);

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
