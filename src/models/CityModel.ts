import { CountryModel } from "./CountryModel";

export interface CityModel {
  id: number;
  country: CountryModel;
}
