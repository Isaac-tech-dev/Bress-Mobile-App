import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
//import * as LightTheme from '../constants/themes/LightTheme.json';
//import * as DarkTheme from '../constants/themes/DarkTheme.json';
//import AuthStackNavigation from "./AuthStackNavigation";
import RootStackNavigation from "./RootStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//import { useAppSelector } from "../redux/hooks/hook";

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
