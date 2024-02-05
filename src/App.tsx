import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Book from "./pages/Book/Book";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Magazine from "./pages/Magazine/Magazine";
import Author from "./pages/Author/Author";
import AboutUs from "./pages/AboutUs/AboutUs";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Book />}></Route>
        <Route path="/magazines" element={<Magazine />}></Route>
        <Route path="/authors" element={<Author />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
