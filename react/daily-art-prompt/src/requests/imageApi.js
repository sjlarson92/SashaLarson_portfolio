import axios from "axios";
import _ from "lodash";
import * as TYPES from "../store/actions";

export const getImagesAction = () => dispatch => {
  _.times(3, () =>
    axios.get("http://localhost:8080/image").then(response => {
      dispatch({
        type: TYPES.SET_INITIAL_IMAGES,
        payload: {
          image: response.data
        }
      });
    })
  );
};
