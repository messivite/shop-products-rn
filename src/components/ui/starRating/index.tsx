import { FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import React, { memo } from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const StarRating = ({ rating }: any) => {
  const renderStars = () => {
    const stars = [];
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;

    const starStyle = {
      marginRight: moderateScale(5),
      color: 'orange',
      fontSize: moderateScale(25),
    };

    for (let i = 0; i < integerPart; i++) {
      stars.push(<IoniconsIcon key={'de' + i} name="star" style={starStyle} />);
    }

    if (decimalPart >= 0.25 && decimalPart <= 0.75) {
      stars.push(
        <IoniconsIcon
          key={'half_' + decimalPart}
          name="star-half"
          style={starStyle}
        />,
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <IoniconsIcon
          key={`empty-${i}`}
          name="star-outline"
          style={starStyle}
        />,
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default memo(StarRating);
