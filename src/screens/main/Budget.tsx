import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";


const Budget = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>Budget</Text>
    </View>
    </SafeAreaView>
  )
}

export default Budget

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2C14DD",
      paddingHorizontal: 20,
    },
  });