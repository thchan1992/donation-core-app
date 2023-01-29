import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import NumberInput from "../components/NumberInput";
import PrimaryButton from "../components/PrimaryButton";
import { ScrollView } from "react-native-gesture-handler";
import { donationMsg } from "../constants/msg";

const CardPaymentScreen = ({ navigation, route }) => {
  // Destructuring route params to get charity and donate amount
  const { charity, donateAmount } = route.params;
  // State hooks to keep track of card number, cvv, and expiration date input by user
  const [cardNum, setCardNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expDate, setExpDate] = useState("");
  // Hardcoded values for testing purposes
  const fixCardNum = "1111111111111111";
  const fixCvv = "111";
  const fixExpDate = "11/11";

  // Function to show an alert when card details are invalid
  const showAlert = () => {
    Alert.alert(
      "Warning",
      "The system does not recognise this credit card, please try again.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  // Function to handle payment, check if card details are valid, and navigate to receipt screen
  const handlePayment = () => {
    if (cardNum == fixCardNum && cvv == fixCvv && expDate == fixExpDate) {
      navigation.navigate("ReceiptScreen", {
        charity: charity,
        donateAmount: donateAmount,
      });
    } else {
      showAlert();
    }
  };
  // Function to handle expiration date input, adding a forward slash after 2 characters to look like a exp date
  const handleExpDate = (e) => {
    setExpDate(e);
    if (e.length == 2 && expDate.length == 1) {
      setExpDate((e) => e + "/");
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.instrucText}>
          {donationMsg(charity.name, donateAmount)}
        </Text>

        <View style={{ alignItems: "center", height: 550 }}>
          <NumberInput
            value={cardNum}
            setter={setCardNum}
            placeholder={"Card Number"}
            height={29}
            maxWidth={300}
            minWidth={300}
            maxLength={16}
          />
          <NumberInput
            value={cvv}
            setter={setCvv}
            placeholder={"CVV"}
            height={29}
            maxWidth={80}
            minWidth={80}
            maxLength={3}
          />
          <NumberInput
            value={expDate}
            setter={handleExpDate}
            placeholder={"EXP DATE"}
            height={29}
            maxWidth={150}
            minWidth={150}
            maxLength={5}
          />
          <PrimaryButton
            text="Confirm"
            onPress={handlePayment}
            id={"confirm-button"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  instrucText: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
  },
});

export default CardPaymentScreen;
