import React, { FC, memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '@Hooks';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
  selectFavoriteProductList,
} from '@Redux/slices/favorites/favoriteProductListSlice';
import { selectSelectedProduct } from '@Redux/slices/favorites/selectedProductSlice';
import { moderateScale } from '@Core/helpers/styleHelpers';
import styles from './styles';
import { IAppHeader } from './index.d';
import { Colors } from '@Constants';
import useNavHelper from '@Hooks/navHelper';
import MoreDetail from '../moreDetail';
const AppHeader: FC<IAppHeader> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const selectedProduct = useAppSelector(
    selectSelectedProduct,
  )?.selectedProduct;
  const favoriteProducts = useAppSelector(
    selectFavoriteProductList,
  )?.favoriteProductList;
  const { handleBack } = useNavHelper();
  const isFavoriteProduct = (): Boolean => {
    return favoriteProducts.some(
      favProduct => favProduct.id === selectedProduct.id,
    );
  };

  return (
    <View style={{}}>
      <MoreDetail
        style={styles.container}
        colors={['#F3EEEA', '#EBE3D5', '#F3EEEA']}>
        <Pressable onPress={handleBack}>
          <IoniconsIcon name="chevron-back-outline" size={moderateScale(34)} />
        </Pressable>
        <Text style={styles.headerTitle} allowFontScaling={false}>
          Product Detail
        </Text>
        <Pressable
          onPress={() =>
            isFavoriteProduct()
              ? dispatch(removeFavoriteProduct(selectedProduct))
              : dispatch(addFavoriteProduct(selectedProduct))
          }>
          <IoniconsIcon
            name={isFavoriteProduct() ? 'heart' : 'heart-outline'}
            color={isFavoriteProduct() ? Colors.red : Colors.black}
            size={moderateScale(34)}
          />
        </Pressable>
      </MoreDetail>
    </View>
  );
};

export default memo(AppHeader);
