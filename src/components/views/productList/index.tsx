import Card from '@Components/ui/card';
import { Colors, defaultUserConfigs } from '@Constants';
import React, { FC, memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IProductListProps } from './index.d';
import { IProduct, IProductWithId } from '@Models/ProductModel';
import styles from './styles';
import NoDataView from '@Components/views/nodata';

const ProductList: FC<IProductListProps> = ({
  data,
  selectedBrand,
  searchText,
  allProducts,
  selectedCategory,
  ...props
}) => {
  const renderProductCard = (item: IProductWithId, index: number) => (
    <Card
      allProducts={allProducts}
      product={item}
      itemIndex={index}
      listCount={allProducts?.length!}
    />
  );

  const isProductVisible = (item: IProduct) => {
    const includesSearchText =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase());

    return includesSearchText || searchText === '';
  };

  return (
    <FlatList
      data={data}
      style={styles.container}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={() => <NoDataView title="No Data :)" />}
      keyExtractor={item => item.id.toString()}
      getItemLayout={(_, index) => ({
        length: defaultUserConfigs.ITEM_WIDTH,
        offset: defaultUserConfigs.ITEM_WIDTH * index,
        index,
      })}
      renderItem={({ item, index }) => {
        const isCategoryMatched =
          selectedCategory === null || selectedCategory === item.category;

        const isBrandMatched =
          selectedBrand === null || selectedBrand === item.brand;

        const isVisible =
          isCategoryMatched && isBrandMatched && isProductVisible(item);

        return isVisible ? renderProductCard(item, index) : null;
      }}
      {...props}
    />
  );
};

export default memo(ProductList);
