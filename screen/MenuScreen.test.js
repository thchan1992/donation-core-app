import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import MenuScreen from "./MenuScreen";

describe("MenuScreen", () => {
  it("should match the snapshot", () => {
    const component = renderer.create(<MenuScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
