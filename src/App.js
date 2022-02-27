import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMessage } from "./redux/actions/chatbox";

function App() {
  const data = useSelector((state) => state.chatbox);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessage());
  }, [dispatch]);

  console.log("data", data);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
