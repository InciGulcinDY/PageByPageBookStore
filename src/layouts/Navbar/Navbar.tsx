import { Link } from "react-router-dom";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
import SignOut from "../../components/SignOut/SignOut";
import SignIn from "../../components/SignIn/SignIn";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="Navbar-Layout">
      {/* Logo */}
      <Link to={"/"}>
        <img className="mx-auto d-block logo" src="/logo.png" />
      </Link>
      {/* Navbar Starts */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Home */}
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navi Options */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Magazines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  About us
                </Link>
              </li>
            </ul>

            {/* Register/Login <SignOut></SignOut>*/}
            <SignIn></SignIn>

            {/* Search */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar Ends */}
    </div>
  );
};

export default Navbar;
