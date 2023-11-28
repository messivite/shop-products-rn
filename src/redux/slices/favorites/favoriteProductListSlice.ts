import { IProductWithId,ProductModel } from '@Models/ProductModel';
import { RootState } from '@Store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  favoriteProductList: [] as IProductWithId[],
};

export const favoriteProductListSlice = createSlice({
  name: 'favoriteProductList',
  initialState,
  reducers: {
    addFavoriteProduct: (state, action: PayloadAction<IProductWithId>) =>
      void (state.favoriteProductList = [
        ...state.favoriteProductList,
        action.payload,
      ]),
    removeFavoriteProduct: (state, action: PayloadAction<IProductWithId>) =>
      void (state.favoriteProductList = [
        ...state.favoriteProductList.filter(
          product => product.id !== action.payload.id,
        ),
      ]),
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  favoriteProductListSlice.actions;
export const selectFavoriteProductList = (state: RootState) =>
  state.favoriteProductList;

export default favoriteProductListSlice.reducer;
