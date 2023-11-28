import { IProduct } from '@Models/ProductModel';

export interface IProductListProps {
  data: any;
  selectedCategory: any;
  allProducts: IProduct[];
  selectedBrand: any;
  searchText: string;
}
