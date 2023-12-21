import logo from './logo.png';
import bookFoto from './blogs.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const[book, setBook] = useState('');
  const[books, setBooks] = useState([]);
  
  const[cart, setCart] = useState(0);
  

  //Handling addition the new product to the cart
  const handleAddProduct = () =>{
    setCart(cart+1);
  }




  return (
    <div className="App">
      {/* Logo - Starts */} 
      <div className='align-center'>
        <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
      </div>
      {/* Logo - Ends */} 

      {/* Navbar - Starts */} 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Books</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Magazines</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Authors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sign up</a>
              </li>
            </ul>
            
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">
                Search</button>
            </form>
          </div>
        </div>

        <button type="button" class="btn btn-success position-relative me-5">
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {cart}
            <span class="visually-hidden">Go to Cart</span>
          </span>
        </button>
      </nav>
      {/* Navbar - Ends */} 

      {/* Main - Starts */}
      <main className='container mt-2 mb-5'>

        <div class="row row-cols-1 row-cols-md-3 g-4">

          <div class="col">
            <div class="card">
              <img src= {bookFoto} class="card-img-top mt-2" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">Book Name</h5>
                <p class="card-text">Author Name</p>
                <p class="card-text">Publisher</p>
                <p className='fs-3'>150 tl</p>
                <a href="#" class="btn btn-success"  onClick={handleAddProduct}>Add to Cart</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src= {bookFoto} class="card-img-top mt-2" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">Book Name</h5>
                <p class="card-text">Author Name</p>
                <p class="card-text">Publisher</p>
                <p className='fs-3'>150 tl</p>
                <a href="#" class="btn btn-success"  onClick={handleAddProduct}>Add to Cart</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src= {bookFoto} class="card-img-top mt-2" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">Book Name</h5>
                <p class="card-text">Author Name</p>
                <p class="card-text">Publisher</p>
                <p className='fs-3'>150 tl</p>
                <a href="#" class="btn btn-success"  onClick={handleAddProduct}>Add to Cart</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src= {bookFoto} class="card-img-top mt-2" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">Book Name</h5>
                <p class="card-text">Author Name</p>
                <p class="card-text">Publisher</p>
                <p className='fs-3'>150 tl</p>
                <a href="#" class="btn btn-success"  onClick={handleAddProduct}>Add to Cart</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src= {bookFoto} class="card-img-top mt-2" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">Book Name</h5>
                <p class="card-text">Author Name</p>
                <p class="card-text">Publisher</p>
                <p className='fs-3'>150 tl</p>
                <a href="#" class="btn btn-success"  onClick={handleAddProduct}>Add to Cart</a>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Main - Ends */}  

      {/* Footer - Starts */}
      <footer class="footer text-center mt-5 fixed-bottom bg-light">
        <p>
          Copyright ©
          <script>document.write(new Date().getFullYear())</script>
          InciGulcinDY
        </p>
        <a href="https://github.com/InciGulcinDY" target="_blank"> <i class="fab fa-github"></i></a>
      </footer>
      {/* Footer - Ends */} 

    </div> 
  );
}


/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
export default App;
