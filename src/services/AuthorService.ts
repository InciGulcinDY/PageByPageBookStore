import axios, { AxiosResponse } from "axios";
import { AuthorModel } from "../models/AuthorModel";
import { GetAllAuthorsResponseModel } from "../models/response/GetAllAuthorsResponseModel";
import axiosInstance from "../utils/interceptors/axiosInterceptors";

class AuthorService {
  getAll(): Promise<AxiosResponse<GetAllAuthorsResponseModel>> {
    return axiosInstance.get<GetAllAuthorsResponseModel>(`/api/authors`);
  }

  getById(id: number) {
    return axiosInstance.get<AuthorModel>(`/api/authors/${id}`);
  }
}

export default new AuthorService();
