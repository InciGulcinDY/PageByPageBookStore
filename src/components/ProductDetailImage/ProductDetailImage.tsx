import React from "react";
import { Carousel } from "react-bootstrap";
import { BookModel } from "../../models/BookModel";

type Props = {
  book: BookModel;
};

const ProductDetailImage = ({ book }: Props) => {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={book.imagePath}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/product1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/product2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetailImage;
