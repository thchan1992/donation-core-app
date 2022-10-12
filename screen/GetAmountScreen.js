import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NumberInput from "../components/NumberInput";

const GetAmountScreen = ({ navigation, route }) => {
  const [donateAmount, setDonateAmount] = useState(null);
  const { charity } = route.params;

  const handleSubmit = () => {
    console.log(
      "go to the card payment screen with the amount: ",
      donateAmount
    );
  };

  return (
    <View style={styles.container}>
      <Text>How much would you like to donate to {charity.name}?</Text>
      <View style={styles.inputContainer}>
        <NumberInput
          value={donateAmount}
          setter={setDonateAmount}
          placeholder={"Donation Amount"}
        />
        <PrimaryButton text={"Donate"} onPress={handleSubmit} />
      </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GetAmountScreen;
