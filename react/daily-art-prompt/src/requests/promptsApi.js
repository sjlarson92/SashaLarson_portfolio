import axios from "axios";
import * as TYPES from "../store/actions";

export const getPromptsAction = () => dispatch => {
  axios
    .get("http://localhost:8080/prompt/all")
    .then(response => {
      dispatch({
        type: TYPES.SET_INITIAL_PROMPTS,
        payload: {
          prompts: response.data
        }
      });
    })
    .catch(error => {
      console.log("Failed to fetch prompt data from API with error: ", error);
    });
};
