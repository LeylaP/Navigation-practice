import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import CallsScreen from '../scteens/CallsScreen';
import SettingsScreen from '../scteens/SettingsScreen';
import UpdatesScreen from '../scteens/UpdatesScreen';
import ChatScreen from '../scteens/ChatScreen';
import CommunityScreen from '../scteens/CommunityScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { IconButton } from 'react-native-paper';


const Tab = createBottomTabNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
     <Tab.Navigator initialRouteName='Chat' screenOptions={{
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray',
        
     }} >
      <Tab.Screen title='Settings' name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <IconButton
    icon="home"
    size={30}
    color="#900"
    onPress={() => console.log('Pressed')}
  />
          ),
        }}/>
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{tabBarBadge: 3}}  />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})