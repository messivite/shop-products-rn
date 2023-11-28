import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { ProductModel, IProductWithId } from '@Models/ProductModel';

export type MainRouteProps<RouteName extends keyof MainStackParams> = RouteProp<
  MainStackParams,
  RouteName
>;

export type TabRouteProps<RouteName extends keyof BottomTabParams> = RouteProp<
  BottomTabParams,
  RouteName
>;

export type MainStackParams = {
  TabbarNavigation: NavigatorScreenParams<BottomTabParams>;
  DetailScreen: {
    products: IProductWithId[];
    productId: number;
  };
};

export type BottomTabParams = {
  ListScreen: {};
  MyFavoriteScreen: {};
};
