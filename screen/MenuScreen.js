import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Homeless</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Refugee</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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
