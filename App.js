import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuScreen from "./screen/MenuScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MenuScreen" component={MenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator();