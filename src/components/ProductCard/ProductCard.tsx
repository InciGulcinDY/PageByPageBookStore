import { Link } from "react-router-dom";
import "./style.css";
import { BookModel } from "../../models/BookModel";

type Props = {
  product: BookModel;
};

const ProductCard = (product: Props) => {
  return (
    <div className="Product-Card ">
      <div className="card">
        <img
          src={product.product.imagePath}
          className="card-img-top mt-1 mx-auto"
          alt="product image"
          style={{ width: 150, height: 220 }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.product.title}</h5>
          <p className="card-text">
            {product.product.author.name} {product.product.author.surname} &{" "}
            {product.product.publisher.publisher}
          </p>
          <p className="card-text">{product.product.category.category}</p>
          <h4 className="card-title">{product.product.unitPrice} tl</h4>
          <div className="d-flex">
            <Link
              to={"/product/" + product.product.id}
              className="btn btn-primary me-2"
            >
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
