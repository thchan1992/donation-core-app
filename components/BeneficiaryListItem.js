import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const BeneficiaryListItem = ({ name, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={{
          height: 150,
          width: 200,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 8,
          borderWidth: 1.5,
          borderColor: "black",
        }}
        source={imageUrl}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BeneficiaryListItem;

const styles = StyleSheet.create({
  button: {
    height: 180,
    width: 200,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "grey",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "black",
  },
  text: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
