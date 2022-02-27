export const loadData = (page = 0, last) => {
  let data = [];
  try {
    data = JSON.parse(window.localStorage.getItem("messages")) || [];
  } catch (e) {
    console.log(e);
  }

  if (page > 0) {
    const first = last - 25 * page > 0 ? last - 25 * page : 0;
    return data.slice(first, last);
  } else {
    return data.slice(-25);
  }
};

export const loadNewData = (offset) => {
  let data = [];
  try {
    data = JSON.parse(window.localStorage.getItem("messages")) || [];
  } catch (e) {
    console.log(e);
  }
  return data.slice(offset);
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
