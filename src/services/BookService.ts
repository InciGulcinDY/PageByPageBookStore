import axios, { AxiosResponse } from "axios";
import { BookModel } from "../models/BookModel";
import axiosInstance from "../utils/interceptors/axiosInterceptors";

class BookService {
  getAll(): Promise<AxiosResponse<BookModel[]>> {
    return axiosInstance.get<BookModel[]>(`/api/books`);
  }

  getById(id: number) {
    return axiosInstance.get<BookModel>(`/api/books/${id}`);
  }
}

export default new BookService();
