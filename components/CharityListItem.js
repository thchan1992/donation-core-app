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
          borderWidth: 1.5,
          borderColor: "black",
        }}
        source={imageUrl}
      />
      <View>
        <Text
          style={[
            styles.text,
            name.length > 10 ? styles.smallerText : styles.text,
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharityListItem;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 180,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    backgroundColor: "grey",
    borderColor: "black",
  },
  text: {
    alignSelf: "center",
    padding: 3,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },

  smallerText: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
  },
});
