import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const [bookList, setBookList] = useState([
    {
      id: 1,
      title: 'test',
      author: 'test',
    },
    {
      id: 2,
      title: 'test',
      author: 'test',
    },
    {
      id: 3,
      title: 'test',
      author: 'test',
    },
  ]);

  const addBook = (title, author) => {
    const book = {
      id: bookList.length + 1,
      title,
      author,
    };
    setBookList([...bookList, book]);
  };

  return (
    <section id="booksPage">
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form addBook={addBook} />
    </section>
  );
};

export default BookList;
