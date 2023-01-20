import renderer from "react-test-renderer";
import React from "react";
import ReceiptScreen from "./ReceiptScreen";
import PrimaryButton from "../components/PrimaryButton";
import { Text } from "react-native";
describe("ReceiptScreen", () => {
  let navigation;
  let route;

  beforeEach(() => {
    navigation = {
      reset: jest.fn(),
    };
    route = {
      params: {
        charity: {
          name: "Test Charity",
        },
        donateAmount: 50,
      },
    };
  });

  it("navigates to the MenuScreen when the Done button is pressed", () => {
    const component = renderer.create(
      <ReceiptScreen navigation={navigation} route={route} />
    );
    const instance = component.root;
    const doneButton = instance.findByType(PrimaryButton);
    doneButton.props.onPress();
    expect(navigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: "MenuScreen" }],
    });
  });

  it("displays the correct donation information", () => {
    const component = renderer.create(
      <ReceiptScreen navigation={navigation} route={route} />
    );
    const instance = component.root;
    const textNode = instance.findAllByType(Text);
    console.log(textNode);
    expect(textNode).toBeDefined();
  });
});
