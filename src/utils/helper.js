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

export const setNewMessage = (newData, cb) => {
  const data = JSON.parse(localStorage.getItem("messages")) || [];
  data.push({
    id: data.length,
    ...newData,
    time: new Date().getTime(),
  });
  localStorage.setItem("messages", JSON.stringify(data));
};
