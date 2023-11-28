import { ModalProps } from 'react-native';

export interface ISortingModalProps extends ModalProps {
  open: boolean;
  selected: string | null;
  onPress: (item: string | null) => void;
  closePress: () => void;
}
