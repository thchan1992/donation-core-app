import React from "react";
import renderer from "react-test-renderer";
import CharityListScreen from "./CharityListScreen";

describe("CharityListScreen", () => {
  const navigation = { navigate: jest.fn() };
  const route = {
    params: { charityList: [{ name: "charity 1", imageUrl: "image.com" }] },
  };
  let component;
  beforeEach(() => {
    component = renderer.create(
      <CharityListScreen navigation={navigation} route={route} />
    );
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should call navigation.navigate when item is pressed", () => {
    const instance = component.root;
    const charityListItem = instance.find(
      (el) => el.type.name === "CharityListItem"
    );
    charityListItem.props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith("CharityScreen", {
      charity: expect.any(Object),
    });
  });
});
