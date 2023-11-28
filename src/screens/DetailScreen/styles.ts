import { Colors, FONTS } from "@Constants";
import { moderateScale } from "@Core/helpers/styleHelpers";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    
      marginHorizontal:10,
    },
    wrapperContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    cardContainer: {
      flex: 1,
      paddingVertical:moderateScale(20),

      marginTop:moderateScale(10),
      height:'100%',
      backgroundColor: Colors.white,
      shadowColor: 'rgba(97, 85, 166,.9)',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.32,
      shadowRadius: 10.46,
      elevation: 5,
      borderTopRightRadius:moderateScale(10),

    },
    ratingText:{
      fontSize: moderateScale(18),
      fontFamily: FONTS.poppinsMedium,
    },
    mainWrapper:{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: moderateScale(10),
    },
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: moderateScale(24),
      marginHorizontal:moderateScale(5),
      fontWeight: '600',
      fontFamily: FONTS.poppinsBold,
    },
    description: {
      fontSize: moderateScale(15),
      fontWeight: '400',
      fontFamily: FONTS.poppinsRegular,
      marginVertical: moderateScale(5)
    },
    priceText: {
      fontSize: moderateScale(24),
      fontWeight: '600',
      fontFamily: FONTS.poppinsExtraBold,
      marginHorizontal:moderateScale(5)
    },
    discountText: {
      fontSize: moderateScale(15),
      fontWeight: '500',
      color: Colors.white,
      textAlign:'center',
      fontFamily:FONTS.poppinsBold ,
    },
    discountWrapper:{
      backgroundColor: Colors.red,
      width: moderateScale(150),
      position: 'absolute',
      right: 0,
      top: moderateScale(-20),
      borderTopRightRadius: moderateScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: moderateScale(5),
      paddingVertical: moderateScale(5),
    },
    priceWrapper:{
      marginVertical: moderateScale(10),
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceCaption:{
      fontFamily: FONTS.poppinsRegular,
      fontSize: moderateScale(22),
    },
    productDetailWrapper:{
      marginHorizontal: moderateScale(10)
    }
  });
  export default styles;