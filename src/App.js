import React, { useEffect, useRef } from "react";
import "./styles/chatbox.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadMessage, loadNewMessage } from "./redux/actions/chatbox";
import LoginForm from "./components/LoginForm";
import ChatBox from "./components/ChatBox";

function App() {
  const dispatch = useDispatch();
  const refMsgs = useRef();
  const data = useSelector((state) => state.chatbox);
  const { user, messages } = data;
  const { page } = messages;
  refMsgs.current = messages.data;

  useEffect(() => {
    dispatch(loadMessage({ page: 0 }));
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => {
      const lastMsg = refMsgs.current[refMsgs.current.length - 1];
      dispatch(loadNewMessage(lastMsg.id));
    }, 300);
  }, [dispatch]);
  return (
    <div className="App">
      <main>
        {user.id ? (
          <ChatBox page={page} messages={refMsgs.current} user={user} />
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
}

export default App;
