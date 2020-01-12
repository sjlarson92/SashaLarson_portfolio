import React from "react";
import { EntryScreen, dispatchFunctions } from "./EntryScreen";
import { mount, shallow } from "enzyme";
import { getImagesAction } from "./requests/imageApi";
import { getPromptsAction } from "./requests/promptsApi";

import * as TYPES from "./store/actions";

jest.mock("./DailyArtPromptApp");

const defaultProps = {
  getImages: jest.fn(),
  getPrompts: jest.fn(),
  getDate: jest.fn()
};

describe("<EntryScreen>", () => {
  it("should call getImages upon initial render", () => {
    mount(<EntryScreen {...defaultProps} />);
    expect(defaultProps.getImages).toHaveBeenCalledWith();
  });

  it("should call getPrompts upon initial render", () => {
    mount(<EntryScreen {...defaultProps} />);
    expect(defaultProps.getPrompts).toHaveBeenCalledWith();
  });
  it("should call getDate upon initial render", () => {
    mount(<EntryScreen {...defaultProps} />);
    expect(defaultProps.getDate).toHaveBeenCalledWith();
  });

  it("should render <DailyArtPromptApp>", () => {
    const wrapper = shallow(<EntryScreen />);
    expect(wrapper.find({ "data-testid": "dailyArtPromptApp" })).toHaveLength(
      1
    );
  });
});

describe("dispatchFunctions", () => {
  it("should have getImages equal to getImagesAction", () => {
    expect(dispatchFunctions.getImages).toEqual(getImagesAction);
  });
  it("should have getPrompts equal to getPromptsAction", () => {
    expect(dispatchFunctions.getPrompts).toEqual(getPromptsAction);
  });
  it("should dispatch when getDate is called with correct params", () => {
    const dispatch = jest.fn();
    const anonymousFunction2 = dispatchFunctions.getDate();
    anonymousFunction2(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: TYPES.SET_INITIAL_DATE });
  });
});
