import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NumberInput from "../components/NumberInput";

const GetAmountScreen = ({ navigation, route }) => {
  const [donateAmount, setDonateAmount] = useState(null);
  const { charity } = route.params;

  const handleSubmit = () => {
    navigation.navigate("CardPaymentScreen", {
      charity: charity,
      donateAmount: donateAmount,
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={charity.imageUrl} />
      <ScrollView>
        <Text style={styles.instrucText}>
          How much would you like to donate to {charity.name}?
        </Text>
        <View style={styles.inputContainer}>
          <NumberInput
            value={donateAmount}
            setter={setDonateAmount}
            placeholder={"Amount"}
            height={40}
            maxWidth={160}
            minWidth={160}
            maxLength={5}
            isPound={true}
          />
          <PrimaryButton text={"Donate"} onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
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
  image: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "#FF304F",
    borderRadius: 8,
    padding: 30,
  },
  instrucText: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});

export default GetAmountScreen;
