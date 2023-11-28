import { IProductWithId, IProduct, ProductModel } from '@Models/ProductModel';
export interface ProductCardProps {
  allProducts: IProductWithId[];
  product: IProductWithId;
  itemIndex: number;
  listCount: number;
}
