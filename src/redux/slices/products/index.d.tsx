import { IProductWithId, ProductModel, IProduct } from '@Models/ProductModel';
import { AxiosError } from 'axios';

interface ProductState {
  productLoading: boolean;
  productData: IProduct[];
  hasError: boolean;
  error: AxiosError | null;
}

const initialState: ProductState = {
  productLoading: true,
  productData: [],
  hasError: false,
  error: null,
};
export default initialState;
