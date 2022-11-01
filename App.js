import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MenuScreen from "./screen/MenuScreen";
import CharityScreen from "./screen/CharityScreen";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetAmountScreen from "./screen/GetAmountScreen";
import CardPaymentScreen from "./screen/CardPaymentScreen";
import ReceiptScreen from "./screen/ReceiptScreen";
import CharityListScreen from "./screen/CharityListScreen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FF304F",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#002651" },
          }}
        >
          <Stack.Screen
            options={{ title: "" }}
            name="MenuScreen"
            component={MenuScreen}
          />
          <Stack.Screen
            options={{ title: "" }}
            name="CardPaymentScreen"
            component={CardPaymentScreen}
          />
          <Stack.Screen
            options={{ title: "" }}
            name="CharityScreen"
            component={CharityScreen}
          />
          <Stack.Screen
            options={{ title: "" }}
            name="GetAmountScreen"
            component={GetAmountScreen}
          />

          <Stack.Screen
            options={{ title: "" }}
            name="ReceiptScreen"
            component={ReceiptScreen}
          />
          <Stack.Screen
            options={{ title: "" }}
            name="CharityListScreen"
            component={CharityListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const Stack = createNativeStackNavigator();
