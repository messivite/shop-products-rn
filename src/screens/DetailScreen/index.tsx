import React, { memo, useMemo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, Text, View } from 'react-native';
import { moderateScale } from '@Core/helpers/styleHelpers';
import FooterProductButtons from '@Components/views/footerProductButtons';
import Carousel from 'react-native-reanimated-carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParams, MainRouteProps } from '@Interfaces/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { pageColors } from '@Constants';
import StarRating from '@Components/ui/starRating';
import MoreDetail from '@Components/combine/moreDetail';

const DetailsScreen = () => {
  const route = useRoute<MainRouteProps<'DetailScreen'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const currentProductIndex = route.params.products.findIndex(
    product => product.id === route.params.productId,
  );

  const selectedProduct = route.params.products[Number(currentProductIndex)];

  const navigateToProductAtIndex = (indexOffset: number) => {
    const totalProducts = route.params.products.length;
    const newIndex =
      (currentProductIndex + indexOffset + totalProducts) % totalProducts;
    const newProductId = route.params.products[newIndex].id;

    navigation.replace('DetailScreen', {
      productId: newProductId,
      products: route.params.products,
    });
  };

  const navigateToNextProduct = () => {
    navigateToProductAtIndex(1);
  };

  const navigateToPrevProduct = () => {
    navigateToProductAtIndex(-1);
  };

  const discountedPrice = useMemo((): string => {
    const discounted =
      selectedProduct.price -
      (selectedProduct.price * selectedProduct.discountPercentage) / 100;
    return discounted.toFixed(2);
  }, [selectedProduct]);
  const renderDiscountPriceView = useMemo(() => {
    return (
      <View style={styles.priceWrapper}>
        <Text style={styles.priceCaption}>PRICE:</Text>
        <Text style={styles.priceText} allowFontScaling={false}>
          {'$' + discountedPrice}
        </Text>
      </View>
    );
  }, [discountedPrice]);

  const renderProductDetailView = useMemo(() => {
    return (
      <View>
        <Text style={styles.titleText}>{selectedProduct.title}</Text>
        <Text style={[styles.description]}>{selectedProduct.description}</Text>
        <View style={styles.mainWrapper}>
          <StarRating rating={selectedProduct?.rating} />
          <Text style={styles.ratingText}>
            Rating: {selectedProduct?.rating}
          </Text>
        </View>
      </View>
    );
  }, [selectedProduct]);

  const renderProductImagesView = useMemo(() => {
    return (
      <Carousel
        width={wp(92)}
        pagingEnabled
        height={moderateScale(300)}
        data={selectedProduct.images}
        renderItem={({ index }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: selectedProduct.images[index] }}
              style={{ resizeMode: 'contain' }}
              width={wp(89)}
              height={moderateScale(250)}
            />
          </View>
        )}
      />
    );
  }, [selectedProduct]);

  const renderProductHeaderView = useMemo(() => {
    return (
      <View style={styles.wrapperContainer}>
        <View style={styles.discountWrapper}>
          <Text style={styles.discountText}>
            %{selectedProduct.discountPercentage} Discount
          </Text>
        </View>
      </View>
    );
  }, [selectedProduct]);
  return (
    <MoreDetail
      style={{
        flex: 1,
      }}
      colors={[...pageColors.DetailPage]}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{}}>
          <View style={styles.cardContainer}>
            {renderProductHeaderView}

            {renderProductImagesView}
            <View style={styles.productDetailWrapper}>
              {renderProductDetailView}
              {renderDiscountPriceView}
            </View>
          </View>
        </ScrollView>
        <FooterProductButtons
          leftButtonTitle="Previous Page"
          rightButtonTitle="Next Page"
          leftPress={navigateToPrevProduct}
          rightPress={navigateToNextProduct}
        />
      </View>
    </MoreDetail>
  );
};

export default memo(DetailsScreen);
