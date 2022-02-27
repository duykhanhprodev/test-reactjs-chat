import { LOAD_DATA, LOGIN } from "../constants";

export const loadMessage = () => ({
  type: LOAD_DATA,
  data: [1, 2, 3],
});

export const login = (name) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    data: name,
  });
};
