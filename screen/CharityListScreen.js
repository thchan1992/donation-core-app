import { View, Text } from "react-native";
import { useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
const CharityListScreen = ({ navigation, route }) => {
  return (
    <View>
      {route.params.charityList.map((obj) => {
        return (
          <PrimaryButton
            text={obj.name}
            onPress={() => {
              navigation.navigate("CharityScreen", { charity: obj });
            }}
          />
        );
      })}
    </View>
  );
};
export default CharityListScreen;
