import { unionBy } from "lodash";
import {
  LOADING,
  LOAD_DATA,
  LOAD_HISTORY,
  LOAD_NEW_DATA,
  LOGIN,
} from "../constants";

const initialState = {
  messages: {
    data: [],
    loading: true,
    page: 0,
  },
  user: {
    name: "",
    id: "",
  },
};

const chatBox = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        messages: {
          ...state.messages,
          loading: true,
        },
      };
    case LOAD_DATA:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: unionBy([...state.messages.data, ...action.data], "id"),
          loading: false,
        },
      };
    case LOAD_HISTORY:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: unionBy([...action.data, ...state.messages.data], "id"),
          loading: false,
          page: action.page || 0,
        },
      };
    case LOAD_NEW_DATA:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: unionBy([...state.messages.data, ...action.data], "id"),
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
