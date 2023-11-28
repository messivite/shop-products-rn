//import liraries
import React, { FC, memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ProductCardProps } from './index.d';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Colors } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';

const Header: FC<ProductCardProps> = ({ title, subTitle, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Pressable {...props}>
          <IoniconsIcon
            name={'funnel'}
            color={Colors.white}
            size={moderateScale(34)}
          />
        </Pressable>
      </View>
      <Text style={styles.caption}>{subTitle}</Text>
    </View>
  );
};

export default memo(Header);
