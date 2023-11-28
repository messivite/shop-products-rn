import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@Hooks';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
  selectFavoriteProductList,
} from '@Redux/slices/favorites/favoriteProductListSlice';
import { selectSelectedProduct } from '@Redux/slices/favorites/selectedProductSlice';
import useNavHelper from '@Hooks/navHelper';
import styles from './style';

const ProductHeader = (props: NativeStackHeaderProps) => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(
    selectSelectedProduct,
  )?.selectedProduct;
  const favoriteProducts = useAppSelector(
    selectFavoriteProductList,
  )?.favoriteProductList;

  const { handleBack } = useNavHelper();
  const isFavorited = (): Boolean => {
    return favoriteProducts.some(
      favProduct => favProduct.id === selectedProduct.id,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <IoniconsIcon name="chevron-back-outline" size={hp(3)} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Details</Text>
      <TouchableOpacity
        onPress={() =>
          isFavorited()
            ? dispatch(removeFavoriteProduct(selectedProduct))
            : dispatch(addFavoriteProduct(selectedProduct))
        }>
        <IoniconsIcon
          name={isFavorited() ? 'bookmark' : 'bookmark-outline'}
          size={hp(3)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(ProductHeader);
