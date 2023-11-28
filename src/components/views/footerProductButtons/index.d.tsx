import { ViewProps } from 'react-native';

export interface IFooterProductsButtons extends ViewProps {
  leftButtonTitle: string;
  rightButtonTitle: string;
  leftPress: () => void;
  rightPress: () => void;
}
