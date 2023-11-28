import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 854;
const screenSize = Math.sqrt(width * height) / 100;

const scale = (size: any) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: any, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale, screenSize };
