import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

//This component is a CharityListItem component which is used to display a charity's name and image in a list. It receives a name, imageUrl, and onPress props and has a touchable area to trigger the provided onPress function. It also adjusts the font size of the name based on the name's length to ensure it fits within the component.
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
          borderColor: "#FF304F",
        }}
        source={imageUrl}
      />
      <View>
        <Text
          style={[
            styles.text,
            name.length > 11 ? styles.smallerText : styles.text,
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
    backgroundColor: "#28C7FA",
    borderColor: "#FF304F",
  },
  text: {
    alignSelf: "center",
    padding: 3,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
    color: "black",
  },

  smallerText: {
    alignSelf: "center",
    padding: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 12,
    color: "black",
  },
});
