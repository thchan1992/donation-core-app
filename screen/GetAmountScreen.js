import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NumberInput from "../components/NumberInput";
import { getAmountScreenMsg } from "../constants/msg";

const GetAmountScreen = ({ navigation, route }) => {
  // State to keep track of the donation amount entered by the user
  const [donateAmount, setDonateAmount] = useState(null);
  // Charity object passed in as a prop via the route params
  const { charity } = route.params;
  // Function to show an alert if the user tries to submit an invalid donation amount
  const showAlert = () => {
    Alert.alert(
      "Warning",
      "Please Insert the donation amount, or make sure donation amount is not larger than £1000.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };
  // Function to handle the form submission, navigate to the next screen if the donation amount is valid
  const handleSubmit = () => {
    console.log(donateAmount);
    if (donateAmount == null || donateAmount == 0 || donateAmount > 1000) {
      showAlert();
    } else {
      navigation.navigate("CardPaymentScreen", {
        charity: charity,
        donateAmount: donateAmount,
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={charity.imageUrl} />
        <Text style={styles.instrucText}>
          {getAmountScreenMsg(charity.name)}
        </Text>
        <View style={[{ height: 400 }, styles.inputContainer]}>
          <NumberInput
            value={donateAmount}
            setter={setDonateAmount}
            placeholder={"Amount"}
            height={40}
            maxWidth={160}
            minWidth={160}
            maxLength={6}
            isPound={true}
          />
          <PrimaryButton text={"Donate"} onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
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
    // justifyContent: "center",
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
