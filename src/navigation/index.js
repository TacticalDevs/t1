import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import TestScreen from '../screens/TestScreen';
import HomeBtnTabNavigator from './homeBtnTabNavigator';
import CreatePost from '../screens/CreatePost';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeBtnTabNavigator} />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: true, title: 'Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
