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
  const [donateAmount, setDonateAmount] = useState(null);
  const { charity } = route.params;

  const showAlert = () => {
    Alert.alert("Warning", "Please Insert the donation amount", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handleSubmit = () => {
    console.log(donateAmount);
    if (donateAmount == null || donateAmount == 0) {
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
            maxLength={5}
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
