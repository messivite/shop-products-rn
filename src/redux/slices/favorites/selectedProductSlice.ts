import { useAppSelector } from '@Hooks';
import { IProductWithId } from '@Models/ProductModel';
import { RootState } from '@Store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: {} as IProductWithId,
};

export const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<IProductWithId>) =>
      void (state.selectedProduct = action.payload),
  },
});

export const { setSelectedProduct } = selectedProductSlice.actions;
export const selectSelectedProduct = (state: RootState) =>
  state.selectedProduct;



export default selectedProductSlice.reducer;
