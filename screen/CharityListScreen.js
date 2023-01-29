import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import CharityListItem from "../components/CharityListItem";
import { FlatList } from "react-native-gesture-handler";
import { charitySuggestionScreenMsg } from "../constants/msg";

//This component renders a list of charities on the screen and allows the user to navigate to a specific charity's details screen when a charity is selected from the list. It uses a FlatList to display the data and a CharityListItem component for each charity.
const CharityListScreen = ({ navigation, route }) => {
  // Helper function to render each charity list item
  const renderCharityList = (itemData) => {
    return (
      <CharityListItem
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
      <Text style={styles.instrucText}>{charitySuggestionScreenMsg}</Text>
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
