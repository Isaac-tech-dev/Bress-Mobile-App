import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";


const Insight = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>Insight</Text>
    </View>
    </SafeAreaView>
  )
}

export default Insight

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2C14DD",
      paddingHorizontal: 20,
    },
  });