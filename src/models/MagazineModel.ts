import { CategoryModel } from "./CategoryModel";
import { LanguageModel } from "./LanguageModel";
import { PublisherModel } from "./PublisherModel";

export interface MagazineModel {
  id: number;
  title: string;
  imagePath: string;
  unitPrice: number;
  publishedDate: Date;
  category: CategoryModel;
  language: LanguageModel;
  publisher: PublisherModel;
}
