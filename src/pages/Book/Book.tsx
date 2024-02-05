import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { BookModel } from '../../models/BookModel';
import BookService from '../../services/BookService';
import { AxiosResponse } from 'axios';

const Book = () => {
  const [books, setBooks] = useState<BookModel[]>();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    BookService.getAll()
      .then((response: AxiosResponse<BookModel[]>) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  };

  return (
    <div className='container'>
      <div className='row col-12'>
      { books && books.length > 0 ? 
        books.map((book) => (
          <div className='col-2 my-1 mx-5 '>
          <ProductCard key={book.id} product={book} />
          </div>
        )
      ) : (
        <div className='text-center'>
          <p>No product available!</p>
        </div>
      )}
    </div>
  </div>
  );
};

export default Book;
