import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { horizontalLine } from "../util/styling";
const CharityScreen = ({ navigation, route }) => {
  const [showDet, setShowDet] = useState(false);
  const { charity } = route.params;
  return (
    <View style={styles.container}>
      {!showDet && <Image style={styles.image} source={charity.imageUrl} />}
      <Text style={styles.text}>{charity.name}</Text>
      <View
        style={[
          { flexDirection: "row" },
          { alignItems: "center" },
          showDet ? horizontalLine.horizontalLine : undefined,
        ]}
      >
        <PrimaryButton
          text={"Donate"}
          onPress={() => {
            navigation.navigate("GetAmountScreen", { charity: charity });
          }}
        />
        {!showDet && (
          <PrimaryButton
            text={"Detail"}
            onPress={() => {
              setShowDet(true);
            }}
          />
        )}
        {showDet && (
          <PrimaryButton
            text={"Hide"}
            onPress={() => {
              setShowDet(false);
            }}
          />
        )}
      </View>
      {showDet && (
        <ScrollView>
          <Text style={styles.infoText}>{charity.info}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    paddingTop: 40,
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "#FF304F",
    borderRadius: 8,
    padding: 30,
  },
  text: {
    alignSelf: "center",
    padding: 3,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    color: "white",
  },
  infoText: {
    padding: 10,
    fontSize: 30,
    color: "white",
  },
});

export default CharityScreen;
