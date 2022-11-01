import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import BeneficiaryListItem from "../components/BeneficiaryListItem";
import { FlatList } from "react-native-gesture-handler";
const CharityListScreen = ({ navigation, route }) => {
  const renderCharityList = (itemData) => {
    return (
      <BeneficiaryListItem
        name={itemData.item.name}
        imageUrl={itemData.item.imageUrl}
        onPress={() => {
          navigation.navigate("CharityScreen", { charity: itemData.item });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.charityList}
        keyExtractor={(char) => char.name}
        renderItem={renderCharityList}
        numColumns={1}
      />
    </View>
  );
};
export default CharityListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
