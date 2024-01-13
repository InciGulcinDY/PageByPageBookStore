import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
