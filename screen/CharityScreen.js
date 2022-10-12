import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const CharityScreen = ({ navigation, route }) => {
  const [showDet, setShowDet] = useState(false);
  const { charity } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={charity.imageUrl} />
      <Text>we suggest: {charity.name}</Text>
      {!showDet && (
        <PrimaryButton
          text={"Show Detail"}
          onPress={() => {
            setShowDet(true);
          }}
        />
      )}
      {showDet && (
        <>
          <PrimaryButton
            text={"Hide"}
            onPress={() => {
              setShowDet(false);
            }}
          />
          <Text>{charity.info}</Text>
        </>
      )}
      <PrimaryButton
        text={"Donate"}
        onPress={() => {
          navigation.navigate("GetAmountScreen", { charity: charity });
        }}
      />
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
  image: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "black",
  },
});

export default CharityScreen;
