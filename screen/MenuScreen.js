import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { selectedCharity } from "../data/charityData";
import { FlatList } from "react-native-gesture-handler";
import PrimaryButton from "../components/PrimaryButton";
import { beneficiaryList, charityList } from "../data/charityData";
import BeneficiaryListItem from "../components/BeneficiaryListItem";

const MenuScreen = ({ navigation }) => {
  const renderBeneficiaryList = (itemData) => {
    return (
      <BeneficiaryListItem
        name={itemData.item.beneficiary}
        imageUrl={itemData.item.imageUrl}
        onPress={() => {
          const arr = charityList.filter((char) => {
            return char.beneficiary == itemData.item.beneficiary;
          });
          navigation.navigate("CharityListScreen", { charityList: arr });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Choose who you would like to donate</Text>
      <FlatList
        data={beneficiaryList}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MenuScreen;
