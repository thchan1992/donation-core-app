import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CharityScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>we suggest: {route.params.charity.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CharityScreen;
