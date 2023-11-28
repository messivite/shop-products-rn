import { moderateScale } from '@Core/helpers/styleHelpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: moderateScale(10),
    marginBottom: moderateScale(10),
    paddingBottom: moderateScale(60),
  },
});
export default styles;
