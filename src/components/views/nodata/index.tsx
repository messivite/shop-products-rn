//import liraries
import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { INoDataProps } from './index.d';
import { Colors } from '@Constants';

const NoDataView: FC<INoDataProps> = ({ title, ...props }) => {
  return (
    <View style={styles.container} {...props}>
      <Text
        style={{
          color: Colors.white,
        }}>
        {title ?? 'No data'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(NoDataView);
