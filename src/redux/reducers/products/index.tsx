import { PayloadAction } from '@reduxjs/toolkit';
import { IProductWithId, ProductModel } from '@Models/ProductModel';
import { AxiosError } from 'axios';
import initialState from '@Redux/slices/products/index.d';

export const productReducers = {
  getProductList(state: typeof initialState) {
    state.productLoading = true;
  },
  getProductListLoading(state: typeof initialState) {
    state.productLoading = true;
    state.productData = [];
    state.hasError = false;
    state.error = null;
  },
  getProductListSuccess(
    state: typeof initialState,
    action: PayloadAction<ProductModel>,
  ) {
    const data = action.payload;
    state.productData = data.products;
    state.hasError = false;
    state.productLoading = false;
  },
  getProductListError(
    state: typeof initialState,
    action: PayloadAction<AxiosError>,
  ) {
    (state.hasError = true), (state.error = action.payload);
    state.productLoading = false;
  },
};
