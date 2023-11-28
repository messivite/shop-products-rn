import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  categoryList: {
    gap: 20,
  },
  categoryItemContainer: {
    height: moderateScale(50),
    marginBottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
