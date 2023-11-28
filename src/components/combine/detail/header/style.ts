import { FONTS } from "@Constants";
import { moderateScale } from "@Core/helpers/styleHelpers";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      height:moderateScale(20),
      paddingHorizontal: moderateScale(10),
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    headerTitle: {
      fontSize: moderateScale(18),
      fontWeight: '600',
      fontFamily: FONTS.poppinsBold,
    },
  });

export default styles;  