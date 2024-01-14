import { AuthorModel } from "./AuthorModel";
import { CategoryModel } from "./CategoryModel";
import { LanguageModel } from "./LanguageModel";
import { PublisherModel } from "./PublisherModel";

export interface BookModel {
  id: number;
  title: string;
  imagePath: string;
  unitPrice: number;
  numberOfPages: number;
  numberOfEditions: number;
  category: CategoryModel;
  language: LanguageModel;
  author: AuthorModel;
  publisher: PublisherModel;
}
