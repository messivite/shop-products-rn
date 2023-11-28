import React, { memo, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { IProduct } from '@Models/ProductModel';
import Header from '@Views/header';
import styles from './styles';
import { productThunk, useProductSelector } from '@Redux/slices/products';
import { useAppDispatch } from '@Hooks';
import ProductList from '@Components/views/productList';
import CategoryList from '@Components/views/categoryList';
import BrandList from '@Components/views/brandList';
import SearchBar from '@Components/ui/searchBar';
import SearchInputView from '@Components/views/searchInputView';
import MoreDetail from '@Components/combine/moreDetail';
import { Colors, pageColors } from '@Constants';
import useGeneralHelper from '@Hooks/generalHelper';
import FilterModal from '@Components/ui/filterModal';
import { sortingOptions } from '@Interfaces/sorting';

const ListScreen = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useAppDispatch();
  const productState = useProductSelector();
  const { sortingProduct } = useGeneralHelper();

  const { productData, productLoading, hasError } = productState;
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortedProducts, setSortedProducts] = useState<IProduct[] | null>();
  const [sortingModalVisible, setSortingModalVisible] =
    useState<boolean>(false);
  const [selectedSortingMethod, setSelectedSortingMethod] = useState<
    string | null
  >(null);

  useEffect(() => {
    dispatch(productThunk({}));
  }, []);

  useEffect(() => {
    if (productData !== undefined && productData !== null) {
      setSortedProducts(productData!);
    }
  }, [productData]);

  useEffect(() => {
    if (sortedProducts === null) {
      setSortedProducts(productData);
    }
  }, [sortedProducts, productData]);

  const categoryFiltering = (item: string): void => {
    if (selectedCategory === item) {
      setSelectedCategory(null);
      setSelectedBrand(null);
    } else {
      setSelectedCategory(item);
    }
  };

  const brandFiltering = (item: string): void => {
    if (selectedBrand === item) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(item);
    }
  };

  const sortingPress = React.useCallback(() => {
    setSortingModalVisible(!sortingModalVisible);
  }, [sortingModalVisible]);
  const handleSortingChange = (selectedItem: any) => {
    const sortingMethod = sortingOptions[selectedItem];
    if (sortingMethod) {
      const [sortBy, sortOrder] = sortingMethod;
      const sorted = sortingProduct(sortBy, sortOrder);
      setSelectedSortingMethod(selectedItem);
      setSortedProducts(sorted !== null ? sorted : null);
      setSortingModalVisible(!sortingModalVisible);
    }
  };

  const renderProductView = useMemo(() => {
    return (
      <View style={styles.productWrapper}>
        <ProductList
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          searchText={searchText}
          data={sortedProducts}
          allProducts={productData}
        />
      </View>
    );
  }, [
    selectedBrand,
    selectedCategory,
    searchText,
    sortedProducts,
    productData,
  ]);

  const renderCategoryView = useMemo(() => {
    return (
      <CategoryList
        products={productData}
        selectedCategory={selectedCategory}
        categoryPress={categoryFiltering}
      />
    );
  }, [selectedCategory, productData]);
  const renderBrandView = useMemo(() => {
    return (
      <BrandList
        products={productData}
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
        brandPress={brandFiltering}
      />
    );
  }, [selectedBrand, selectedCategory, productData]);

  const renderSearchView = useMemo(() => {
    return (
      <SearchInputView>
        <SearchBar
          searchText={searchText}
          onChangeText={(text: string) => setSearchText(text)}
          clearButtonMode="always"
          placeholderTextColor={Colors.grayText}
        />
      </SearchInputView>
    );
  }, [searchText]);
  return (
    <MoreDetail style={styles.container} colors={[...pageColors.ListPage]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header
            onPress={sortingPress}
            subTitle="Mustafa AKSOY"
            title="Welcome"
          />

          {renderSearchView}
          {renderCategoryView}
          {renderBrandView}

          {productLoading ? (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : (
            renderProductView
          )}

          {sortingModalVisible && (
            <FilterModal
              open={sortingModalVisible}
              selected={selectedSortingMethod}
              closePress={() => {
                setSortingModalVisible(false);
              }}
              onPress={handleSortingChange}
            />
          )}
        </View>
      </SafeAreaView>
    </MoreDetail>
  );
};

export default memo(ListScreen);
