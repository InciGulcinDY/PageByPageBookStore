import React, { useEffect, useState } from "react";
import ProductDetailImage from "../../components/ProductDetailImage/ProductDetailImage";
import BooksDetailCard from "../../components/BooksDetailCard/BooksDetailCard";
import { useNavigate, useParams } from "react-router-dom";
import BookService from "../../services/BookService";
import { BookModel } from "../../models/BookModel";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<BookModel>();
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    if (params.id) {
      BookService.getById(parseInt(params.id))
        .then((response) => {
          console.log("Response data: ", response.data);
          setProduct(response.data);
        })
        .catch((error) => {
          navigate("*");
        });
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-6">
          {product ? (
            <ProductDetailImage book={product} />
          ) : (
            <div className="text-center">
              <p>No product available!</p>
            </div>
          )}
        </div>
        <div className="col-6">
          {product ? (
            <BooksDetailCard book={product} />
          ) : (
            <div className="text-center">
              <p>No product available!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
