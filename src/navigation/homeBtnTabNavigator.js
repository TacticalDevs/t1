import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeBtnTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#fff'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={25} color="#fff" />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={() => <Text>Search</Text>}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={24} color="#fff" />
          )
        }}
      />
      <Tab.Screen
        name="Post"
        component={() => <Text>POST</Text>}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="picasa" size={35} color="orange" />
          ),
          tabBarLabel: () => null
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={() => <Text>Inbox</Text>}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="inbox" size={25} color="#fff" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <Text>Profile</Text>}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={25} color="#fff" />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBtnTabNavigator;
