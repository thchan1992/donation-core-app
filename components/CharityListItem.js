import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

const CharityListItem = ({ name, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={{
          height: 150,
          width: 150,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 8,
          borderWidth: 3,
          borderColor: "black",
        }}
        source={imageUrl}
      />
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharityListItem;

const styles = StyleSheet.create({
  button: {
    width: 150,
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
