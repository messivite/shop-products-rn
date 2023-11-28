import React, { FC, memo, useMemo } from 'react';
import { Colors } from '@Constants';
import { Pressable, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { IFilterButtonProps } from './index.d';
import useGeneralHelper from '@Hooks/generalHelper';

const ButtonFilter: FC<IFilterButtonProps> = memo(
  ({ selectedItem, filterItem, onPress, ...props }) => {
    const { convertToHumanReadable } = useGeneralHelper();
    const renderButtonLayout = useMemo(() => {
      return (
        <>
          <LinearGradient
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[
              Colors.iconPrimary200,
              Colors.iconPrimary300,
              Colors.iconPrimary400,
            ]}>
            <Text style={[styles.text, { color: Colors.black }]}>
              {convertToHumanReadable(filterItem)}
            </Text>
          </LinearGradient>
        </>
      );
    }, [selectedItem]);
    return (
      <Pressable style={styles.center} onPress={onPress} {...props}>
        {selectedItem === filterItem ? (
          renderButtonLayout
        ) : (
          <Text style={styles.text}>{convertToHumanReadable(filterItem)}</Text>
        )}
      </Pressable>
    );
  },
);

export default ButtonFilter;
