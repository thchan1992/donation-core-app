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
          borderColor: "#FF304F",
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
    backgroundColor: "#28C7FA",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#FF304F",
  },
  text: {
    alignSelf: "center",
    padding: 2.5,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    color: "black",
  },
});
