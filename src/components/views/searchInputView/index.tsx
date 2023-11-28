import React, { FC, memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ISearchInputViewProps } from './index.d';
const SearchInputView: FC<ISearchInputViewProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={style ?? styles.container} {...props}>
      {children ?? <></>}
    </View>
  );
};

export default memo(SearchInputView);
