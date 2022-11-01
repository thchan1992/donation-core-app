import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import CharityListItem from "../components/CharityListItem";
import { FlatList } from "react-native-gesture-handler";
const CharityListScreen = ({ navigation, route }) => {
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
      <Text style={styles.instrucText}>
        Choose which charity you would like to donate
      </Text>
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
  instrucText: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    fontSize: 25,
  },
});
