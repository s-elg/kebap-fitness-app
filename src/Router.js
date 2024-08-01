import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberPage from './pages/MemberPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ //18. dk
        headerShown: false //bu tüm screenlerin headerları için, Stack.Screen componentinde aynı işlemi option propuyla yapıyoruz
      }}>
        <Stack.Screen name= 'WelcomeScreen' component = {Welcome} />
        <Stack.Screen name= 'MemberSignScreen' component = {MemberSign} />
        <Stack.Screen name = 'MemberPageScreen' component = {MemberPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}