import React, { useMemo } from 'react';
import { Text, SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import { useAppSelector } from '@Redux/hooks';
import { selectFavoriteProductList } from '@Redux/slices/favorites/favoriteProductListSlice';
import Card from '@Components/ui/card';
import styles from './styles';
import MoreDetail from '@Components/combine/moreDetail';
import { NUMOFCOLUMNS, defaultUserConfigs, pageColors } from '@Constants';
import Configs from '@Constants/config';
import Nodata from '@Components/views/nodata';
const MyFavoriteScreen = () => {
  const favoritedProducts = useAppSelector(
    selectFavoriteProductList,
  ).favoriteProductList;

  const renderTopHeaderView = useMemo(() => {
    return (
      <View style={styles.topWrapper}>
        <View style={styles.topContainer}>
          <Text style={styles.bigTitle}>My Favorites</Text>
        </View>
      </View>
    );
  }, []);
  const renderFavoriteListView = useMemo(() => {
    return (
      <FlatList
        data={favoritedProducts}
        style={{ flex: 1 }}
        numColumns={NUMOFCOLUMNS.num}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
        getItemLayout={(_, index) => ({
          length: defaultUserConfigs.ITEM_WIDTH,
          offset: defaultUserConfigs.ITEM_WIDTH * index,
          index,
        })}
        ListEmptyComponent={() => (
          <Nodata title={'Henüz favoriye eklenmiş ürün bulunmuyor'} />
        )}
        contentContainerStyle={styles.contentWrapper}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <Card
            allProducts={favoritedProducts}
            product={item}
            itemIndex={index}
            listCount={favoritedProducts?.length!}
          />
        )}
      />
    );
  }, [favoritedProducts]);
  return (
    <MoreDetail style={styles.container} colors={[...pageColors.FavoritePage]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {renderTopHeaderView}
          {renderFavoriteListView}
        </View>
      </SafeAreaView>
    </MoreDetail>
  );
};

export default React.memo(MyFavoriteScreen);
