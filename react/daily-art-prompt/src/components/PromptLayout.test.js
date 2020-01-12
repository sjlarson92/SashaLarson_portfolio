import React from "react";
import {
  PromptLayout,
  mapStateToProps,
  dispatchFunctions
} from "./PromptLayout.js";
import { shallow } from "enzyme";
import {
  updateNextDateAction,
  updatePreviousDateAction
} from "../store/dispatchFunctions";

describe("<PromptLayout>", () => {
  const defaultProps = {
    prompts: {
      text: "na na na na na na na na BATMAN!!!"
    },
    date: "2020-01-11",
    updateNextDate: jest.fn(),
    updatePreviousDate: jest.fn()
  };
  describe("<div> for mainContentContainer", () => {
    it("should have a prompt-row className", () => {
      const wrapper = shallow(<PromptLayout {...defaultProps} />);
      const result = wrapper
        .find({ "data-testid": "mainContentContainer" })
        .prop("className");
      expect(result).toEqual("prompt-row");
    });

    describe("<PromptButton> for previousButton", () => {
      it("renders correct text", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(
          wrapper.find({ "data-testid": "previousButton" }).prop("text")
        ).toEqual("Previous");
      });
      it("should call updatePreviousDate when clicked", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ "data-testid": "previousButton" }).simulate("click");
        expect(defaultProps.updatePreviousDate).toHaveBeenCalledWith();
      });
    });

    describe("<Prompt>", () => {
      describe("when there are prompts", () => {
        it("should render", () => {
          const props = {
            ...defaultProps,
            prompts: {
              mood: "I'm up all night to get lucky"
            }
          };
          const wrapper = shallow(<PromptLayout {...props} />);
          const result = wrapper.find({ "data-testid": "prompt" });
          expect(result).toHaveLength(1);
        });
        it("should render with correct prompt prop", () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
          const result = wrapper
            .find({ "data-testid": "prompt" })
            .prop("prompt");
          expect(result).toEqual(defaultProps.prompts[defaultProps.date]);
        });
      });

      describe("when there are no prompts", () => {
        it("should not render <Prompt>", () => {
          const props = {
            ...defaultProps,
            prompts: {}
          };
          const wrapper = shallow(<PromptLayout {...props} />);
          const result = wrapper.find({ "data-testid": "prompt" });
          expect(result).toHaveLength(0);
        });
      });
    });

    describe("<PromptButton> for nextButton", () => {
      it("renders correct text", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(
          wrapper.find({ "data-testid": "nextButton" }).prop("text")
        ).toEqual("Next");
      });
      it("should call updateNextDate with correct params when clicked", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ "data-testid": "nextButton" }).simulate("click");
        expect(defaultProps.updateNextDate).toHaveBeenCalledWith();
      });
    });
  });
});

describe("mapStateToProps", () => {
  it("should map date to props", () => {
    const date = "my favorite dates are when I get to stay home and drink wine";
    const result = mapStateToProps({
      date
    });
    expect(result).toEqual({
      date
    });
  });
  it("should map prompts to props", () => {
    const text = "did you know elephants can't jump?";
    const result = mapStateToProps({
      prompts: { text }
    });
    expect(result).toEqual({
      prompts: { text }
    });
  });
});

describe("dispatchFunctions", () => {
  it("should have the correct actions", () => {
    expect(dispatchFunctions).toEqual({
      updateNextDate: updateNextDateAction,
      updatePreviousDate: updatePreviousDateAction
    });
  });
});
