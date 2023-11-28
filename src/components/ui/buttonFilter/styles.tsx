import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(10),
    color: Colors.white,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(15),
    color: Colors.openWhite,
    fontFamily: FONTS.poppinsBold,
  },
});
export default styles;
