import React from "react";
import { Link } from "react-router-dom";
import { BookModel } from "../../models/BookModel";

type Props = {
  book: BookModel;
};

const BooksDetailCard = ({ book }: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            {book.author.name + " " + book.author.surname}
          </h5>
          <h6 className="card-text text-body-secondary">
            {"published by " +
              book.publisher.publisher +
              ", " +
              book.numberOfEditions +
              "th edition"}
          </h6>
          <h6 className="card-text text-body-secondary">
            {book.category.category}
          </h6>
          <h6 className="card-text text-body-secondary">
            {book.language.language}
          </h6>
          <h6 className="card-text text-body-secondary">
            {book.numberOfPages} pages
          </h6>
          <br></br>
          <p className="card-text">{book.summary}</p>
          <h4>{book.unitPrice} tl</h4>

          <Link to="#" className="btn btn-success">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailCard;
