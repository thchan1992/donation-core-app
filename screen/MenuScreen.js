import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { selectedCharity } from "../data/charityData";
import { FlatList } from "react-native-gesture-handler";
import PrimaryButton from "../components/PrimaryButton";
import { beneficiaryList, charityList } from "../data/charityData";
import BeneficiaryListItem from "../components/BeneficiaryListItem";
import { menuScreenMsg } from "../constants/msg";

//This component displays the list of beneficiaries and allow the user to select one of the beneficiaries. When a beneficiaries is selected, it filters the charity list based on the selected beneficiary and navigates to CharityListScreen to display the filtered charity list.
const MenuScreen = ({ navigation }) => {
  const renderBeneficiaryList = (itemData) => {
    return (
      <BeneficiaryListItem
        name={itemData.item.beneficiary}
        imageUrl={itemData.item.imageUrl}
        onPress={() => {
          console.log();
          const arr = charityList.filter((char) => {
            return char.beneficiary.beneficiary == itemData.item.beneficiary;
          });
          navigation.navigate("CharityListScreen", { charityList: arr });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instrucText}>{menuScreenMsg}</Text>
      <FlatList
        data={beneficiaryList()}
        keyExtractor={(bene) => bene.beneficiary}
        renderItem={renderBeneficiaryList}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#002651",
    alignItems: "center",
    justifyContent: "center",
  },
  instrucText: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});

export default MenuScreen;
