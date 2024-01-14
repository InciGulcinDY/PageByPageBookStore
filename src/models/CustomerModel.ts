import { CityModel } from "./CityModel";

export interface CustomerModel {
  is: number;
  name: string;
  surname: string;
  internationalId: string;
  birthdate: Date;
  address: string;
  email: string;
  phone: string;
  password: string;
  city: CityModel;
}
