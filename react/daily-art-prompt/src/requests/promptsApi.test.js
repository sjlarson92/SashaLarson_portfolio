import { getPromptsAction } from "./promptsApi";
import axios from "axios";
import * as TYPES from "../store/actions";

jest.mock("axios");

jest.mock("../EntryScreen");

const dispatch = jest.fn();

const response = {
  data: {
    prompts: "array of prompt objects"
  }
};

describe("getPromptsAction", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call api with correct params", () => {
    axios.get.mockResolvedValue(response);
    getPromptsAction()(dispatch);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/prompt/all");
  });
});

describe("when api response is resolved", () => {
  it("should call dispatch with correct parameters", () => {
    axios.get.mockResolvedValue(response);
    getPromptsAction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.SET_INITIAL_PROMPTS,
      payload: {
        prompts: response.data
      }
    });
  });
});
describe("when api response is rejected", () => {
  it("should not call dispatch", () => {
    jest.clearAllMocks();
    axios.get.mockRejectedValue();
    getPromptsAction()(dispatch);
    expect(dispatch).not.toHaveBeenCalled();
  });
});
