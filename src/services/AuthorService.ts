import axios, { AxiosResponse } from "axios";
import { AuthorModel } from "../models/AuthorModel";
import { GetAllAuthorsResponseModel } from "../models/response/GetAllAuthorsResponseModel";

const API_URL="http://localhost:8080/api/authors"; 

class AuthorService {

   getAll() : Promise<AxiosResponse<GetAllAuthorsResponseModel>>{
    return axios.get<GetAllAuthorsResponseModel>(`${API_URL}/`);
   }

   getById(id : number) {
    return axios.get<AuthorModel>(`${API_URL}/${id}`);
   }

}

export default new AuthorService;