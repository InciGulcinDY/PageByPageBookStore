import axios, { AxiosResponse } from "axios";
import { BookModel } from "../models/BookModel";

const API_URL = "http://localhost:8080/api/books";

class BookService {
  getAll(): Promise<AxiosResponse<BookModel[]>> {
    return axios.get<BookModel[]>(`${API_URL}`);
  }

  getById(id: number) {
    return axios.get<BookModel>(`${API_URL}/${id}`);
  }
}

export default new BookService();
