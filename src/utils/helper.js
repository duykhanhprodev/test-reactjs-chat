export const loadData = (type = "NEW", page = 0, last) => {
  let data = [];
  try {
    data = JSON.parse(window.localStorage.getItem("messages")) || [];
  } catch (e) {
    console.log(e);
  }
  if (type === "INIT") {
    return data.slice(-25);
  } else if (type === "NEW") {
    return data.slice(last);
  } else if (type === "HISTORY") {
    const first = last - 25 * page > 0 ? last - 25 * page : 0;
    return data.slice(first, last);
  }
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
