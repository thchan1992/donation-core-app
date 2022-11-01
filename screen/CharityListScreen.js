import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
const CharityListScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {route.params.charityList.map((obj) => {
          return (
            <PrimaryButton
              text={obj.name}
              onPress={() => {
                navigation.navigate("CharityScreen", { charity: obj });
              }}
            />
          );
        })}
      </ScrollView>
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
