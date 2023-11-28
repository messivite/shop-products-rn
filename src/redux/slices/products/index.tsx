import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productReducers } from '@Reducers/products';
import { ProductServices } from '@Services';
import { ProductPayload } from '@Services/products/ProductsPayload';
import initialState from './index.d';
import { useAppSelector } from '@Hooks';
import { RootState } from '@Store';

export const productThunk = createAsyncThunk(
  'product/list',
  async (params: ProductPayload, thunkAPI) => {
    thunkAPI.dispatch(getProductListLoading()); //reset state for dispatch
    try {
      const responseObj = await ProductServices.getProductList({ ...params });
      thunkAPI.dispatch(getProductListSuccess(responseObj));
    } catch (e: any) {
      console.log('error', e);
      thunkAPI.dispatch(getProductListError(e));
    }
  },
);
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: productReducers,
});
export const useProductSelector = () =>
  useAppSelector((state: RootState) => state.products);
export const {
  getProductList,
  getProductListLoading,
  getProductListError,
  getProductListSuccess,
} = productsSlice.actions;
export default productsSlice.reducer;
