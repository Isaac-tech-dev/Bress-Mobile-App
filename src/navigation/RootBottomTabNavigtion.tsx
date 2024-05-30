import { StyleSheet, View } from "react-native";
import React from "react";
import { HOME, BUDGET, INSIGHT, PROFILE } from "../svg";
import Home from "../screens/main/Home";
import Budget from "../screens/main/Budget";
import Insight from "../screens/main/Insight";
import Profile from "../screens/main/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";

export type RootBottomTabParamList = {
  Home: undefined;
  Budget: undefined;
  Insight: undefined;
  Profile: undefined;
};

const RootBottomTab = createBottomTabNavigator<RootBottomTabParamList>();

const RootBottomTabNavigtion = () => {
  return (
    <RootBottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#2C14DD",
          paddingHorizontal: 20,
          paddingVertical: 10,
          height: 50,
          borderTopWidth: 0,
        },
      }}
    >
      <RootBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className={`flex-col justify-center items-center`}>
              {focused ? (
                <SvgXml xml={HOME} width={30} height={30} />
              ) : (
                <SvgXml xml={HOME} width={30} height={30} />
              )}
            </View>
          ),
        }}
      />

      <RootBottomTab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className={`flex-col justify-center items-center`}>
              {focused ? (
                <SvgXml xml={BUDGET} width={30} height={30} />
              ) : (
                <SvgXml xml={BUDGET} width={30} height={30} />
              )}
            </View>
          ),
        }}
      />

      <RootBottomTab.Screen
        name="Insight"
        component={Insight}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className={`flex-col justify-center items-center`}>
              {focused ? (
                <SvgXml xml={INSIGHT} width={30} height={30} />
              ) : (
                <SvgXml xml={INSIGHT} width={30} height={30} />
              )}
            </View>
          ),
        }}
      />

      <RootBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className={`flex-col justify-center items-center`}>
              {focused ? (
                <SvgXml xml={PROFILE} width={30} height={30} />
              ) : (
                <SvgXml xml={PROFILE} width={30} height={30} />
              )}
            </View>
          ),
        }}
      />
    </RootBottomTab.Navigator>
  );
};

export default RootBottomTabNavigtion;

const styles = StyleSheet.create({});
