import React from "react";
import renderer from "react-test-renderer";
import CharityScreen from "./CharityScreen";
import { act } from "react-test-renderer";

// describe("<CharityScreen />", () => {
//   const navigation = { navigate: jest.fn() };
//   const route = {
//     params: {
//       charity: { name: "charity 1", imageUrl: "image.com", info: "info" },
//     },
//   };
//   it("has 3 child", () => {
//     const tree = renderer
//       .create(<CharityScreen navigation={navigation} route={route} />)
//       .toJSON();
//     expect(tree.children.length).toBe(3);
//   });
// });

describe("CharityScreen", () => {
  const navigation = { navigate: jest.fn() };
  const route = {
    params: {
      charity: { name: "charity 1", imageUrl: "image.com", info: "info" },
    },
  };
  let component;
  beforeEach(() => {
    component = renderer.create(
      <CharityScreen navigation={navigation} route={route} />
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should call navigation.navigate when donate button is pressed", () => {
    const instance = component.root;
    const donateButton = instance.findByProps({ text: "Donate" });
    expect(donateButton).toBeTruthy();
    act(() => {
      donateButton.props.onPress();
    });
    expect(navigation.navigate).toHaveBeenCalledWith("GetAmountScreen", {
      charity: expect.any(Object),
    });
  });

});
