import { Link } from "react-router-dom";
import "./style.css";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="Product-Card">
      <div className="card">
        <img
          src="/assets/sixteen-miles-out-ScvYtpYzgFI-unsplash.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Book/Magazine Title</h5>
          <p className="card-text">Author & Publisher</p>
          <p className="card-text">Language</p>
          <h4 className="card-title">100 tl</h4>
          <div className="d-flex">
            <Link to="/product" className="btn btn-primary me-2">
              See More
            </Link>
            <Link to="#" className="btn btn-success">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
