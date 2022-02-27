import React, { useEffect } from "react";
import "./styles/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadMessage } from "./redux/actions/chatbox";
import LoginForm from "./components/LoginForm";
import ChatBox from "./components/ChatBox";

function App() {
  const data = useSelector((state) => state.chatbox);
  const { name } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMessage());
  }, [dispatch]);

  return (
    <div className="App">
      <main>{name ? <ChatBox /> : <LoginForm />}</main>
    </div>
  );
}

export default App;
