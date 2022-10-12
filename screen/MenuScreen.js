import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { selectedCharity } from "../data/charityData";

import PrimaryButton from "../components/PrimaryButton";

const MenuScreen = ({ navigation }) => {
  const onPressHandler = (opt) => {
    navigation.navigate("CharityScreen", { charity: selectedCharity(opt) });
  };

  return (
    <View style={styles.container}>
      <PrimaryButton
        text={"Homeless"}
        onPress={() => {
          onPressHandler("homeless");
        }}
      />
      <PrimaryButton
        text={"Refugee"}
        onPress={() => {
          onPressHandler("refugee");
        }}
      />
      <PrimaryButton
        text={"Orphan"}
        onPress={() => {
          onPressHandler("orphan");
        }}
      />
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

export default MenuScreen;
