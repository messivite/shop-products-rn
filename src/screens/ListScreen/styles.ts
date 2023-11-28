import { Colors, FONTS } from "@Constants";
import { moderateScale } from "@Core/helpers/styleHelpers";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    mainTitle: {
      fontSize: 36,
      fontWeight: '600',
      fontFamily: FONTS.poppinsRegular,
    },
    productWrapper:{
      marginHorizontal: moderateScale(10),
      flex: 1,
    },
    loadingWrapper:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subTitle: {
      fontSize: moderateScale(18),
      color:  Colors.grayText,
      fontFamily: FONTS.poppinsRegular,
    },
    categoryList: {
      gap: 20,
    },
    categoryItemContainer: {
      height: hp(7),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  export default styles;