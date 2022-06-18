import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Booklist from './components/Booklist';
import Category from './components/Category';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
