import { loadData, loadNewData } from "../../utils/helper";
import { LOAD_DATA, LOAD_HISTORY, LOGIN } from "../constants";

export const loadMessage =
  ({ page }) =>
  async (dispatch) => {
    const data = loadData({ page });
    dispatch({
      type: LOAD_DATA,
      data: data,
    });
  };

export const loadHistoryMessage = (page, last) => async (dispatch) => {
  const data = loadData(page, last);
  dispatch({
    type: LOAD_HISTORY,
    data,
    page,
  });
};

export const loadNewMessage = (offset) => async (dispatch) => {
  const data = loadNewData(offset);
  dispatch({
    type: LOAD_DATA,
    data: data,
  });
};

export const login = (name) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    data: name,
  });
};
