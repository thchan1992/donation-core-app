import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const FlatListItem = ({ name, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={{ height: 100, width: 100 }} source={imageUrl} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "grey",
  },
  text: {
    alignSelf: "center",
    padding: 10,
  },
});
