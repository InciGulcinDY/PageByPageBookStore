import React from 'react'
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function MainDashboard() {

  const[cart, setCart] = useState(0);
  

  //Handling addition the new product to the cart
  const handleAddProduct = () =>{
    setCart(cart+1);
  }


  return (
    <div className='mainDashboard'>
    {/* Logo - Starts */} 
      <div className='align-center'>
        <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
      </div>
      {/* Logo - Ends */} 

      {/* Navbar - Starts */} 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* Home Button*/} 
          <a class="navbar-brand ms-5" href="#">
            Home
          </a>

          {/* Menu Buttons */} 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-4" id="navbarSupportedContent">
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
                <a class="nav-link active" aria-current="page" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person mr-5" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/></svg>
                  Sign up
                </a>
              </li>
            </ul>
            
          </div>
        </div>

        {/* Search */} 
        <form class="d-flex col-4">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success container-md col-2 me-2" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            Search
          </button>
        </form>

        {/* Cart */} 
        <button type="button" class="btn btn-success position-relative me-5 container col">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {cart}
            <span class="visually-hidden">Go to Cart</span>
          </span>
        </button>

      </nav>
      {/* Navbar - Ends */} 

    </div>
  )
}
