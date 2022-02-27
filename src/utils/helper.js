import { sortBy } from "lodash";

export const loadData = () => {
  let data = [];
  try {
    data = JSON.parse(window.localStorage.getItem("messages")) || [];
  } catch (e) {
    console.log(e);
  }
  return data;
};

export const setNewMessage = (newMsg, cb) => {
  const data = JSON.parse(localStorage.getItem("messages")) || [];
  data.push({
    ...newMsg,
    time: new Date().getTime(),
  });
  const dataSort = sortBy(data, "time");
  localStorage.setItem("messages", JSON.stringify(dataSort));
};
