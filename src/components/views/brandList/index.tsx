//import liraries
import { IProduct, ProductModel } from '@Models/ProductModel';
import React, { FC, memo, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

import { moderateScale } from '@Core/helpers/styleHelpers';
import ButtonFilter from '@Components/ui/buttonFilter';

interface IBrandListProps extends ViewProps {
  products: IProduct[];
  selectedBrand: string | null;
  selectedCategory: string | null;
  brandPress: (item: any) => void;
}
const BrandList: FC<IBrandListProps> = ({
  products,
  selectedBrand,
  selectedCategory,
  brandPress,
  ...props
}) => {
  const productBrands = useMemo(() => {
    if (!products || !selectedCategory) {
      return [];
    }

    const uniqueBrands = Array.from(
      new Set(
        products
          .filter(product => product.category === selectedCategory)
          .map(product => product.brand),
      ),
    );

    return uniqueBrands;
  }, [products, selectedCategory]);
  return (
    productBrands &&
    productBrands.length > 0 && (
      <>
        <View {...props}>
          <FlatList
            horizontal
            data={productBrands}
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={true}
            maxToRenderPerBatch={3}
            contentContainerStyle={styles.categoryList}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.categoryItemContainer,
                  {
                    marginLeft: index === 0 ? moderateScale(20) : 0,
                    marginRight:
                      index === products.length - 1 ? moderateScale(20) : 0,
                  },
                ]}>
                <ButtonFilter
                  filterItem={item}
                  title=""
                  selectedItem={selectedBrand}
                  onPress={() => brandPress(item)}
                />
              </View>
            )}
          />
        </View>
      </>
    )
  );
};

export default memo(BrandList);
