import React, { FC, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface IMoreDetailProps extends LinearGradientProps {
  style?: ViewStyle[] | ViewStyle;
  children: ReactNode;
  colors: string[];
}
const MoreDetail: FC<IMoreDetailProps> = ({ children, style, colors }) => {
  return (
    <LinearGradient
      colors={colors ?? ['#211339', '#121212', '#093317']}
      style={{ ...style }}>
      {children}
    </LinearGradient>
  );
};

export default React.memo(MoreDetail);
