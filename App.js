import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuScreen from "./screen/MenuScreen";
import CharityScreen from "./screen/CharityScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetAmountScreen from "./screen/GetAmountScreen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
          <Stack.Screen name="CharityScreen" component={CharityScreen} />
          <Stack.Screen name="GetAmountScreen" component={GetAmountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator();
