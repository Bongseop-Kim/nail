import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {HomeIcon} from '../iconComponents/HomeIcon';
import SearchScreen from './SearchScreen';
import {SearchIcon} from '../iconComponents/SearchIcon';
import UserMenuScreen from './UserMenuScreen';
import {UserIcon} from '../iconComponents/UserIcon';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '진단 하기',
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="UserMenu"
        component={UserMenuScreen}
        options={{
          title: '사용자 메뉴',
          tabBarIcon: UserIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
