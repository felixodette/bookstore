import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="bookContainer">
    <div className="bookInfo">
      <p className="bookCategory">Category</p>
      <h3 className="bookTitle">{title}</h3>
      <h4 className="bookAuthor">{author}</h4>
      <div className="bookButtons">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="bookProgress">
      <div className="progressText">
        <p>70%</p>
        <p>Completed</p>
      </div>
    </div>
    <div className="bookUpdate">
      <p>Current Chapter</p>
      <p>Chapter 17</p>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
