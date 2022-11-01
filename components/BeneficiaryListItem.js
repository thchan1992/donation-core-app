import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const BeneficiaryListItem = ({ name, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={{
          height: 100,
          width: 190,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
        source={imageUrl}
      />
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeneficiaryListItem;

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 150,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "grey",
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
  },
});
