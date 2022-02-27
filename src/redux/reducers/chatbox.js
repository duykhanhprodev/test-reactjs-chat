import { LOAD_DATA, LOGIN } from "../constants";

const initialState = {
  messages: {
    data: [],
    loading: true,
  },
  user: {
    name: "",
    id: "",
  },
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
        user: { name: action.data, id: new Date().getTime() },
      };

    default:
      return state;
  }
};

export default chatBox;
