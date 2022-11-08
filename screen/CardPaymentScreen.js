import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import NumberInput from "../components/NumberInput";
import PrimaryButton from "../components/PrimaryButton";
import { ScrollView } from "react-native-gesture-handler";
import { donationMsg } from "../constants/msg";

const CardPaymentScreen = ({ navigation, route }) => {
  const { charity, donateAmount } = route.params;
  const [cardNum, setCardNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expDate, setExpDate] = useState("");
  const fixCardNum = "1111000011110000";
  const fixCvv = "123";
  const fixExpDate = "01/01";

  const showAlert = () => {
    Alert.alert(
      "Warning",
      "The system does not recognise this credit card, please try again.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

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
          <PrimaryButton text="Confirm" onPress={handlePayment} />
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
