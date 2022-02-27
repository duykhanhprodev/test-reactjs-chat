import { loadData } from "../../utils/helper";
import { LOAD_DATA, LOGIN } from "../constants";

export const loadMessage = (name) => async (dispatch) => {
  const data = loadData();
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
