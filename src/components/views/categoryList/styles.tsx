import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  categoryList: {
    gap: 20,
  },
  categoryItemContainer: {
    height: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
