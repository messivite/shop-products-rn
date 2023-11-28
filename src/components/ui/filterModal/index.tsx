import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import { BlurView } from '@react-native-community/blur';
import React, { FC } from 'react';
import {
  FlatList,
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { ISortingModalProps } from './index.d';

const FilterModal: FC<ISortingModalProps> = ({
  open,
  selected,
  onPress,
  closePress,
  ...props
}) => {
  const sortOpinions = [
    {
      id: 1,
      param: 'price_high-to-low',
      name: 'Price - High to Low',
    },
    {
      id: 2,
      param: 'price_low-to-high',
      name: 'Price - Low to High',
    },

    {
      id: 3,
      param: 'rating_asc',
      name: 'Rating - (Asc)',
    },
    {
      id: 4,
      param: 'rating_desc',
      name: 'Rating - (Desc)',
    },
  ];

  return (
    <Modal animationType="fade" transparent={true} visible={open} {...props}>
      <BlurView
        blurAmount={2}
        style={{
          flex: 1,
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginHorizontal: moderateScale(20),
                marginBottom: moderateScale(20),
              }}>
              <Pressable
                onPress={closePress}
                style={{
                  padding: 2,
                  borderRadius: 20,
                  backgroundColor: Colors.grayText,
                }}>
                <IoniconsIcon name="close" size={25} color={Colors.white} />
              </Pressable>
            </View>
            <FlatList
              data={sortOpinions}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    marginBottom: 20,
                  }}
                />
              )}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Pressable
                    key={index}
                    style={[
                      styles.sortButtonWrapper,
                      {
                        backgroundColor:
                          selected === item.param
                            ? Colors.successColor
                            : Colors.gradient100,
                      },
                    ]}
                    onPress={() =>
                      selected !== item.param
                        ? onPress(item.param)
                        : onPress(null)
                    }>
                    <Text style={styles.modalText}>Sort: {item.name}</Text>
                  </Pressable>
                </View>
              )}
            />
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  modalView: {
    marginHorizontal: moderateScale(30),
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppinsBold,
  },
  sortButtonWrapper: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    width: moderateScale(250),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
  },
});

export default FilterModal;
