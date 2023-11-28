import { Colors, FONTS } from '@Constants';
import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    marginHorizontal: 5,
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,

    elevation: 6,
  },
  favoriteIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 17,
    fontWeight: '600',

    fontFamily: FONTS.poppinsBold,
  },
  titleText: {
    color: Colors.grayText,
    fontSize: 15,
    fontFamily: FONTS.poppinsRegular,
  },
});
export default styles;
