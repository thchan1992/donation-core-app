import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const ReceiptScreen = ({ navigation, route }) => {
  // handleCompleted function will reset the navigation stack and navigate to the MenuScreen
  const handleCompleted = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MenuScreen" }],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.instrucText}>
        Thank you for your £{route.params.donateAmount} donation to{" "}
        {route.params.charity.name}!
      </Text>
      <PrimaryButton text={"Done"} onPress={handleCompleted} />
    </View>
  );
};

export default ReceiptScreen;

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
