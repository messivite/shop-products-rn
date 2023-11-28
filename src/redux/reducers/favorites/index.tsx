import { persistReducer } from 'redux-persist';
import favoriteProductListReducer from '@Redux/slices/favorites/favoriteProductListSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistConfig = {
  key: 'favoriteProductList',
  storage: AsyncStorage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  favoriteProductListReducer,
);
