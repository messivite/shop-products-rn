import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import DetailsScreen from '@Screens/DetailScreen';
import { MainStackParams } from '@Interfaces/navigation/types';

import AppHeader from '@Components/combine/appHeader';
const Stack = createNativeStackNavigator<MainStackParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TabbarNavigation">
        <Stack.Screen name="TabbarNavigation" component={TabNavigation} />

        <Stack.Group
          screenOptions={{
            presentation: 'containedModal',
          }}>
          <Stack.Screen
            name="DetailScreen"
            options={{
              headerShown: true,
              header: props => <AppHeader {...props} />,
            }}
            component={DetailsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
