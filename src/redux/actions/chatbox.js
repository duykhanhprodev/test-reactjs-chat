import { LOAD_DATA } from "../constants";

export const loadMessage = (text) => ({
  type: LOAD_DATA,
  data: [1,2,3]
});
