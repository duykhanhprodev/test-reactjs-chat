import { LOAD_DATA } from "../constants";

const initialState = {
  messages: {
    data: [],
    loading: true,
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

    default:
      return state;
  }
};

export default chatBox;
