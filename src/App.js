import React, { useEffect } from "react";
import "./styles/chatbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadMessage } from "./redux/actions/chatbox";
import LoginForm from "./components/LoginForm";
import ChatBox from "./components/ChatBox";

function App() {
  const data = useSelector((state) => state.chatbox);
  const { user, messages } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadMessage());

    setInterval(() => {
      dispatch(loadMessage());
    }, 300);
  }, [dispatch]);
  return (
    <div className="App">
      <main>
        {user.id ? (
          <ChatBox messages={messages.data} user={user} />
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
}

export default App;
