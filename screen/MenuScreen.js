import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { selectedCharity } from "../data/charityData";

import PrimaryButton from "../components/PrimaryButton";
import { beneficiaryList, charityList } from "../data/charityData";

const MenuScreen = ({ navigation }) => {
  const onPressHandler = (opt) => {
    const arr = charityList.filter((char) => {
      return char.beneficiary == opt;
    });
    navigation.navigate("CharityListScreen", { charityList: arr });
  };

  return (
    <View style={styles.container}>
      <Text>Choose who you would like to donate</Text>
      <ScrollView>
        {beneficiaryList.map((obj) => {
          return (
            <PrimaryButton
              text={obj}
              onPress={() => {
                console.log(obj);
                onPressHandler(obj);
              }}
            />
          );
        })}
      </ScrollView>
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
