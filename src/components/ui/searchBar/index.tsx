import React, { FC, memo } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { ISearchBarProps } from './index.d';

const SearchBar: FC<ISearchBarProps> = ({ searchText, ...props }) => {
  return (
    <TextInput
      style={styles.container}
      value={searchText}
      placeholder="Search Products.."
      {...props}
    />
  );
};

export default memo(SearchBar);
