export interface ProductModel {
  products: IProductWithId[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductWithId extends IProduct {
  id: number;
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  favorite?: boolean;
  category: string;
  thumbnail: string;
  images: string[];
}