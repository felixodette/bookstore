import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books.jsx';
import categoriesReducer from './categories/categories.jsx';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer);

export default store;
