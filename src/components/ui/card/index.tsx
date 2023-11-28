import React, { FC, useMemo } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '@Interfaces/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@Hooks';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
  selectFavoriteProductList,
} from '@Redux/slices/favorites/favoriteProductListSlice';
import { setSelectedProduct } from '@Redux/slices/favorites/selectedProductSlice';
import { ProductCardProps } from './index.d';
import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import styles from './styles';
import Animated, {
  SharedTransition,
  withSpring,
} from 'react-native-reanimated';

const Card: FC<ProductCardProps> = ({
  allProducts,
  product,
  itemIndex,
  listCount,
}) => {
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(
    selectFavoriteProductList,
  ).favoriteProductList;
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const isFavorited = favoriteProducts.some(
    favProduct => favProduct.id === product.id,
  );

  const renderImage = (
    <Carousel
      width={moderateScale(160)}
      height={moderateScale(80)}
      data={product.images}
      renderItem={({ index }) => (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.images[index] }}
            style={{ resizeMode: 'contain' }}
            width={moderateScale(140)}
            height={moderateScale(80)}
          />
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.favoriteIconContainer}>
        <TouchableOpacity
          onPress={() => {
            if (isFavorited) {
              dispatch(removeFavoriteProduct(product));
            } else {
              dispatch(addFavoriteProduct(product));
            }
          }}>
          <IoniconsIcon
            size={hp(3)}
            color={isFavorited ? 'red' : Colors.grayText}
            name={isFavorited ? 'heart' : 'heart-outline'}
            style={{ paddingRight: hp(1.2), paddingTop: hp(1.2) }}
          />
        </TouchableOpacity>
      </View>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          dispatch(setSelectedProduct(product));
          navigation.navigate('DetailScreen', {
            productId: product.id,
            products: allProducts,
          });
        }}>
        {renderImage}
        <View style={{ marginVertical: moderateScale(10) }}>
          <View style={{ backgroundColor: Colors.iconPrimary500 }}>
            <Text style={styles.priceText}>{'$' + product.price}</Text>
          </View>
          <Text style={styles.titleText}>{product.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(Card);
