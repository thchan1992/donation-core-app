import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 70,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#28C7FA",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#FF304F",
  },
  text: {
    alignSelf: "center",
    padding: 16,
    fontWeight: "bold",
    fontSize: 30,
  },
});
