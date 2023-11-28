import { PADDING } from '@Constants';

import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(PADDING.sm),
    height: moderateScale(40),
    marginHorizontal: moderateScale(PADDING.md),
  },
});
export default styles;
