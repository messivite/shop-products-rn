import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: Colors.iconPrimary900,
    fontFamily: FONTS.poppinsRegular,
  },
  caption: {
    fontSize: moderateScale(14),
    color: Colors.grayText,
    fontFamily: FONTS.poppinsRegular,
  },
});
export default styles;
