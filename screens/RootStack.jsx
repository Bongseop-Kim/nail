import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: '회원가입'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
