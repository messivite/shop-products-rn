import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import selectedProductReducer from '@Redux/slices/favorites/selectedProductSlice';
import { persistedReducer } from '@Reducers/favorites';
import productReducers from '@Redux/slices/products';



export const store = configureStore({
  reducer: {
    selectedProduct: selectedProductReducer,
    favoriteProductList: persistedReducer,
    products:productReducers
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
