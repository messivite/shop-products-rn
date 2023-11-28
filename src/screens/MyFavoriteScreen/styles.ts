import { Colors, FONTS } from "@Constants";
import { moderateScale } from "@Core/helpers/styleHelpers";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bigTitle: {
      fontSize: moderateScale(32),
      fontWeight: '600',
      fontFamily: FONTS.poppinsSemiBold,
    },
    subTitle: {
      fontSize: moderateScale(14),
      color:  Colors.openWhite,
      fontFamily: FONTS.poppinsMedium,
    },
    contentWrapper:{
      marginVertical: moderateScale(20), 
      gap: 10
    },
    topWrapper:{
      marginHorizontal: moderateScale(20)
    },
    topContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });
  export default styles;