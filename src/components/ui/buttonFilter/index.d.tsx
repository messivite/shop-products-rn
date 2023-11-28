import { ButtonProps } from 'react-native';

export interface IFilterButtonProps extends ButtonProps {
  filterItem: string;
  selectedItem: string | null | undefined;
  onPress: () => void;
}
