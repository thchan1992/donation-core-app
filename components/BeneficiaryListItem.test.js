import renderer from "react-test-renderer";
import React from "react";
import BeneficiaryListItem from "./BeneficiaryListItem";
import { TouchableOpacity } from "react-native";

describe("BeneficiaryListItem", () => {
  let onPress;

  beforeEach(() => {
    onPress = jest.fn();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BeneficiaryListItem
          name="Test Charity"
          imageUrl={require("../assets/adaptive-icon.png")}
          onPress={onPress}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onPress when pressed", () => {
    const component = renderer.create(
      <BeneficiaryListItem
        name="Test Charity"
        imageUrl={require("../assets/adaptive-icon.png")}
        onPress={onPress}
      />
    );
    const instance = component.root;
    const button = instance.findByType(TouchableOpacity);
    button.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
