import { StyleSheet } from 'react-native';
import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: moderateScale(110),
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 0.4,
  },
  headerTitle: {
    fontSize: moderateScale(19),
    fontWeight: '600',
    fontFamily: FONTS.poppinsSemiBold,
  },
});
export default styles;
