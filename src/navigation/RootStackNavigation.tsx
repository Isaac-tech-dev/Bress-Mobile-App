import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RootBottomTabNavigtion from './RootBottomTabNavigtion'


export type RootStackParamList = {
  MainTab: undefined;
  MenuDescription: {
    id: string;
    image: string;
    name: string;
    description: string;
    price: number;
  };
  EditProfile: undefined;
  Settings: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <RootStack.Screen name="MainTab" component={RootBottomTabNavigtion} />
    </RootStack.Navigator>
  )
}

export default RootStackNavigation

const styles = StyleSheet.create({})