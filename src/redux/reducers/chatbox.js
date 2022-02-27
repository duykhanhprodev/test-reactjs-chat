import { LOAD_DATA, LOGIN } from "../constants";

const initialState = {
  messages: {
    data: [],
    loading: true,
  },
  name: "",
};

const chatBox = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        messages: {
          data: action.data,
          loading: false,
        },
      };
    case LOGIN:
      return {
        ...state,
        name: action.data,
      };

    default:
      return state;
  }
};

export default chatBox;
