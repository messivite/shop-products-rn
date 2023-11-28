import { Colors, PADDING } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: moderateScale(40),
    borderWidth: moderateScale(0.2),
    borderColor: Colors.cardBoxShadow,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(PADDING.md),
  },
});
export default styles;
