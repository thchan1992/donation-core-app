import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const ReceiptScreen = ({ navigation, route }) => {
  const handleCompleted = () => {
    navigation.replace("MenuScreen");
  };
  return (
    <View style={styles.container}>
      <Text>
        Thank you for your {route.params.donateAmount} donation to{" "}
        {route.params.charity.name}
      </Text>
      <PrimaryButton text={"Done"} onPress={handleCompleted} />
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
