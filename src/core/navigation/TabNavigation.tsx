import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParams } from '@Interfaces/navigation/types';
import MyFavoriteScreen from '@Screens/MyFavoriteScreen';
import ListScreen from '@Screens/ListScreen';
import CustomTabBar from '../../components/CustomTabBar';
import { BlurView } from '@react-native-community/blur';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from '@Core/helpers/styleHelpers';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from '@Constants';
const Tab = createBottomTabNavigator<BottomTabParams>();

export default function TabNavigation() {
  const menuBlur = useMemo(() => {
    return (
      <View style={{ flex: 1 }}>
        <View style={localStyles.blurContainer}>
          <BlurView
            blurType="light"
            blurAmount={2}
            reducedTransparencyFallbackColor="white"
            style={localStyles.blurView}
          />
        </View>
      </View>
    );
  }, []);
  const TabText = ({ text, focused, icon }: any) => (
    <View style={localStyles.tabViewContainer}>
      <IoniconsIcon
        name={icon}
        size={moderateScale(30)}
        color={focused ? Colors.black : Colors.white}
      />
      <Text
        numberOfLines={1}
        style={[
          localStyles.tabText,
          {
            color: focused ? Colors.black : Colors.white,
          },
        ]}>
        {text}
      </Text>
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => menuBlur,
        tabBarStyle: [localStyles.tabBarStyle],
        tabBarItemStyle: {
          height: localStyles.tabBarStyle.height - moderateScale(10),
        },
        tabBarShowLabel: false,
      }}
      initialRouteName={'ListScreen'}>
      <Tab.Screen
        name={'ListScreen'}
        component={ListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText
              text={'Home'}
              focused={focused}
              icon={focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'MyFavoriteScreen'}
        component={MyFavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabText
              text={'Favorites'}
              focused={focused}
              icon={focused ? 'heart' : 'heart-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyles = StyleSheet.create({
  tabBarStyle: {
    height: moderateScale(80),
    paddingHorizontal: moderateScale(10),
    position: 'absolute',
    borderTopWidth: 0,
  },
  tabViewContainer: {
    alignItems: 'center',
  },
  blurContainer: {
    height: moderateScale(80),
    overflow: 'hidden',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  tabText: {
    marginTop: moderateScale(10),
    textAlign: 'center',
  },
  blurView: {
    flex: 1,
    backgroundColor: ' rgba(61, 53, 105, 0.7)',
  },
});
