

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MainDashboard from './layouts/MainDashboard';
import Footer from './layouts/Footer';
import Products from './layouts/Products';
import Categories from './layouts/Categories';

function App() {
  const[book, setBook] = useState('');
  const[books, setBooks] = useState([]);
  
  return (
    <div className="App">
      <MainDashboard></MainDashboard>
      <div className='mt-2 mb-5'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-2'>
            <Categories></Categories>
          </div>
          <div className='col-8'>
            <Products></Products>
          </div>
          <div className='col'></div>
        </div>
      </div>
      <Footer></Footer>
    </div> 
  );
}

export default App;
