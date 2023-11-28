//import liraries
import React, { FC, memo, useMemo } from 'react';
import { IProduct } from '@Models/ProductModel';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import ButtonFilter from '@Components/ui/buttonFilter';
import { moderateScale } from '@Core/helpers/styleHelpers';
interface ICategoryListProps extends ViewProps {
  products: IProduct[];
  selectedCategory: string | null;
  categoryPress: (item: any) => void;
}
const CategoryList: FC<ICategoryListProps> = ({
  selectedCategory,
  categoryPress,
  products,
  ...props
}) => {
  const generatedCategories = useMemo(() => {
    if (!products) {
      return [];
    }
    const uniqueCategories = Array.from(
      new Set(products.map(product => product.category)),
    );
    return uniqueCategories;
  }, [products]);
  return (
    <View {...props}>
      <FlatList
        horizontal
        data={generatedCategories}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.categoryItemContainer,
              {
                marginLeft: index === 0 ? moderateScale(20) : 0,
                marginRight:
                  index === generatedCategories.length - 1
                    ? moderateScale(20)
                    : 0,
              },
            ]}>
            <ButtonFilter
              filterItem={item}
              title={''}
              selectedItem={selectedCategory}
              onPress={() => categoryPress(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default memo(CategoryList);
