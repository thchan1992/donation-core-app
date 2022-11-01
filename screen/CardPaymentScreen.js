import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import NumberInput from "../components/NumberInput";
import PrimaryButton from "../components/PrimaryButton";

const CardPaymentScreen = ({ navigation, route }) => {
  const { charity, donateAmount } = route.params;
  const [cardNum, setCardNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const handlePayment = () => {
    navigation.navigate("ReceiptScreen", {
      charity: charity,
      donateAmount: donateAmount,
    });
  };

  const handleExpDate = (e) => {
    setExpDate(e);
    if (e.length == 2) {
      setExpDate((e) => e + "/");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.instrucText}>
        Your donation amount to {charity.name} is: {donateAmount}
      </Text>
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
