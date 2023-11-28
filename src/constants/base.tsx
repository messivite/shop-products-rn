import { Dimensions, Platform } from 'react-native';
import Colors from './colors'; //color palette
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const PLATFORM_OS = Platform.OS;
const PADDING = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

const MARGIN = {
  md: 3,
};

const NUMOFCOLUMNS = {
  num: 4,
};

const CardItemRows = {
  row: 3,
};

const FONTS = {
  primary: 'Poppins',
  poppinsBlack: 'Poppins-Black',
  poppinsBold: 'Poppins-Bold',
  poppinsExtraBold: 'Poppins-ExtraBold',
  poppinsExtraLight: 'Poppins-ExtraLight',
  poppinsLight: 'Poppins-Light',
  poppinsMedium: 'Poppins-Medium',
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  poppinsThin: 'Poppins-Thin',
};
const defaultUserConfigs = {
  ITEM_WIDTH: 100,
};
const apiPageUrls = {
  productListPath: '/products',
};
const pageColors = {
  ListPage: ['#211339', '#121212', '#fff'],
  DetailPage: ['#6155A6', '#A685E2', '#FFABE1'],
  FavoritePage: ['#6155A6', '#A685E2', '#FFABE1'],
};
export {
  Colors,
  FONTS,
  MARGIN,
  PADDING,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  defaultUserConfigs,
  PLATFORM_OS,
  NUMOFCOLUMNS,
  CardItemRows,
  apiPageUrls,
  pageColors,
};
