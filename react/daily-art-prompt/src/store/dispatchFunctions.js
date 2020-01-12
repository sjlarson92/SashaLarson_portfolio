import * as TYPES from "../store/actions";
import moment from "moment";

export const updateNextDateAction = () => (dispatch, getState) => {
  const nextDate = moment(getState().date)
    .add(1, "day")
    .format("YYYY-MM-DD");
  if (getState().prompts[nextDate] !== undefined) {
    dispatch({
      type: TYPES.UPDATE_DATE,
      payload: {
        date: nextDate
      }
    });
  }
};

export const updatePreviousDateAction = () => (dispatch, getState) => {
  const previousDate = moment(getState().date)
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  if (getState().prompts[previousDate] !== undefined) {
    dispatch({
      type: TYPES.UPDATE_DATE,
      payload: {
        date: previousDate
      }
    });
  }
};
