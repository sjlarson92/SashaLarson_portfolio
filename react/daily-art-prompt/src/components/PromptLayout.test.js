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
    prompts: [
      {
        id: 1,
        date: "2019-11-19",
        text: "i am a prompt"
      },
      {
        id: 2,
        date: "2019-01-19",
        text: "i love testing my code"
      }
    ],
    date: "2020-01-11",
    updateNextDate: jest.fn(),
    updatePreviousDate: jest.fn()
  };
  describe("<div> for mainContentContainer", () => {
    it("should have a prompt-row className", () => {
      const wrapper = shallow(<PromptLayout {...defaultProps} />);
      const result = wrapper
        .find({ "data-testid": "mainContentContainer" })
        .props().className;
      expect(result).toEqual("prompt-row");
    });

    describe("<PromptButton> for previousButton", () => {
      it("renders correct text", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        expect(
          wrapper.find({ "data-testid": "previousButton" }).prop("text")
        ).toEqual("Previous");
      });
      it("should call updatePreviousDate", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ "data-testid": "previousButton" }).simulate("click");
        expect(defaultProps.updatePreviousDate).toHaveBeenCalledWith();
      });
    });

    describe("<Prompt>", () => {
      describe("when prompts.length is greater than 0", () => {
        it("should render", () => {
          const wrapper = shallow(<PromptLayout {...defaultProps} />);
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

      describe("when prompts.length is 0", () => {
        it("should not render  <Prompt>", () => {
          const props = {
            ...defaultProps,
            prompts: []
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
      it("should call updateNextDate with correct params", () => {
        const wrapper = shallow(<PromptLayout {...defaultProps} />);
        wrapper.find({ "data-testid": "nextButton" }).simulate("click");
        expect(defaultProps.updateNextDate).toHaveBeenCalledWith();
      });
    });
  });
});

describe("mapStateToProps", () => {
  it("should map date to props", () => {
    const result = mapStateToProps({ date: "2020-01-11" });
    expect(result).toEqual({ date: "2020-01-11" });
  });
  it("should map prompts to props", () => {
    const result = mapStateToProps({ prompts: [{ text: "prompt" }] });
    expect(result).toEqual({ prompts: [{ text: "prompt" }] });
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
