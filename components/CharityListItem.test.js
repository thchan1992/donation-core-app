import renderer from "react-test-renderer";
import React from "react";
import CharityListItem from "./CharityListItem";
import { TouchableOpacity, Text } from "react-native";

describe("CharityListItem", () => {
  let onPress;

  beforeEach(() => {
    onPress = jest.fn();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CharityListItem
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
      <CharityListItem
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
