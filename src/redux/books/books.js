// Actions
const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [
  {
    id: 1,
    title: 'test1',
    author: 'test1',
  },
  {
    id: 2,
    title: 'test2',
    author: 'test2',
  },
], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload))];
    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(bookID) {
  return { type: REMOVE_BOOK, payload: bookID };
}
