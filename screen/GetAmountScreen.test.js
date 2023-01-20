import React from "react";
import renderer from "react-test-renderer";
import { Alert } from "react-native";
import GetAmountScreen, { styles } from "./GetAmountScreen";
import PrimaryButton from "../components/PrimaryButton";
import NumberInput from "../components/NumberInput";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native/Libraries/Alert/Alert", () => {
  return {
    alert: jest.fn(),
  };
});

describe("GetAmountScreen", () => {
  const mockNavigation = { navigate: jest.fn() };
  const mockRoute = {
    params: {
      charity: {
        name: "Test Charity",
        imageUrl: require("../assets/adaptive-icon.png"),
        info: "Test charity information",
      },
    },
  };

  it("renders correctly with default state", () => {
    const tree = renderer
      .create(<GetAmountScreen navigation={mockNavigation} route={mockRoute} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigates to "CardPaymentScreen" with correct params when "Donate" button is pressed and donation amount is valid', () => {
    const component = renderer.create(
      <GetAmountScreen navigation={mockNavigation} route={mockRoute} />
    );
    const instance = component.root;
    const numberInput = instance.findByType(NumberInput);
    numberInput.props.setter(5);
    const donateButton = instance.findByType(PrimaryButton);
    donateButton.props.onPress();
    expect(mockNavigation.navigate).toHaveBeenCalledWith("CardPaymentScreen", {
      charity: mockRoute.params.charity,
      donateAmount: 5,
    });
  });

  it('shows alert when "Donate" button is pressed and donation amount is invalid', () => {
    const component = renderer.create(
      <GetAmountScreen navigation={mockNavigation} route={mockRoute} />
    );
    const instance = component.root;
    const numberInput = instance.findByType(NumberInput);
    numberInput.props.setter(null);
    const donateButton = instance.findByType(PrimaryButton);
    donateButton.props.onPress();
    expect(Alert.alert).toHaveBeenCalled();
  });
});
