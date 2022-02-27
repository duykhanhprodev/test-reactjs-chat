import { loadData } from "../../utils/helper";
import {
  LOADING,
  LOAD_DATA,
  LOAD_HISTORY,
  LOAD_NEW_DATA,
  LOGIN,
} from "../constants";

export const loadMessage =
  ({ page }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    setTimeout(() => {
      const data = loadData("INIT", page);
      dispatch({
        type: LOAD_DATA,
        data: data,
      });
    }, 500);
  };

export const loadHistoryMessage = (page, last) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  setTimeout(() => {
    const data = loadData("HISTORY", page, last);
    dispatch({
      type: LOAD_HISTORY,
      data,
      page,
    });
  }, 500);
};

export const loadNewMessage = (last) => async (dispatch) => {
  const data = loadData("NEW", 0, last);
  dispatch({
    type: LOAD_NEW_DATA,
    data: data,
  });
};

export const login = (name) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    data: name,
  });
};
