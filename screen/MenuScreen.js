import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { selectedCharity } from "../data/charityData";

const MenuScreen = ({ navigation }) => {
  const onPressHandler = (opt) => {
    navigation.navigate("CharityScreen", { charity: selectedCharity(opt) });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressHandler("homeless");
        }}
      >
        <Text style={styles.text}>Homeless</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressHandler("refugee");
        }}
      >
        <Text style={styles.text}>Refugee</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressHandler("orphan");
        }}
      >
        <Text style={styles.text}>Orphan</Text>
      </TouchableOpacity>
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
  button: {
    width: 100,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "grey",
  },
  text: {
    alignSelf: "center",
    padding: 10,
  },
});

export default MenuScreen;
