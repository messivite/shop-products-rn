//import liraries
import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import React, { Component, FC, memo } from 'react';
import { View, Text, StyleSheet, Pressable, ViewProps } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { IFooterProductsButtons } from './index.d';

const FooterProductButtons: FC<IFooterProductsButtons> = ({
  leftButtonTitle,
  rightButtonTitle,
  leftPress,
  rightPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.buttonWrapper,
          {
            backgroundColor: Colors.iconPrimary300,
          },
        ]}
        onPress={leftPress}>
        <IoniconsIcon name="chevron-back-outline" size={moderateScale(20)} />
        <Text style={styles.buttonText}>{leftButtonTitle}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.buttonWrapper,
          {
            backgroundColor: Colors.iconPrimary300,
            flexDirection: 'row-reverse',
          },
        ]}
        onPress={rightPress}>
        <IoniconsIcon name="chevron-forward-outline" size={moderateScale(20)} />
        <Text style={styles.buttonText}>{rightButtonTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    paddingHorizontal: moderateScale(30),
    paddingBottom: moderateScale(30),
  },
  buttonText: {
    fontFamily: FONTS.poppinsSemiBold,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    width: moderateScale(140),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(10),
  },
});

export default memo(FooterProductButtons);
