import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { setNewMessage } from "../../utils/helper";
const ChatBox = ({ user, messages = [] }) => {
  const [msg, setMsg] = useState("");
  const wrapRef = useRef(null);
  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.scrollTop = wrapRef.current.scrollHeight;
    }
  }, [wrapRef]);

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleOnSend = (e) => {
    e.preventDefault();
    setNewMessage({
      user,
      content: msg,
    });
    setMsg("");
    wrapRef.current.scrollTop = wrapRef.current.scrollHeight;
  };
  const handleOnScroll = (e) => {
    if (wrapRef.current.scrollTop === 0) {
      console.log("load more");
    }
  };
  return (
    <div className="container-chat-box">
      <div className="pd24">
        <div ref={wrapRef} className="wrap-messages" onScroll={handleOnScroll}>
          {messages.map((msg, index) => (
            <div
              className={`wrap-message ${
                msg.user.id === user.id ? "self" : ""
              }`}
              key={index}
            >
              <div className="avatar">
                <UserOutlined />
              </div>
              <div className="content-msg">
                <h6>{msg.user.id === user.id ? "You" : msg.user.name}</h6>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap-input-message">
        <div className="pd24">
          <form onSubmit={handleOnSend}>
            <Input placeholder="" value={msg} onChange={handleOnChange} />
            <Button onClick={handleOnSend}>Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
