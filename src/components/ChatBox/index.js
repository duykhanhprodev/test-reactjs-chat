import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useState } from "react";
const ChatBox = () => {
  const [msg, setMsg] = useState("");
  const user = {
    name: "AAA",
    id: "111",
  };
  const messages = [
    {
      user: { name: "AAA", id: "111" },
      content: "ME",
    },
    {
      user: { name: "AAA", id: "222" },
      content: "AAAAA",
    },
    {
      user: { name: "AAA", id: "333" },
      content: "AAAAA",
    },
    {
      user: { name: "AAA", id: "111" },
      content: "ME",
    },
  ];

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleOnSend = (e) => {
    e.preventDefault();
    setMsg("");
  };
  return (
    <div className="container-chat-box">
      <div className="wrap-messages">
        {messages.map((msg) => (
          <div
            className={`wrap-message ${msg.user.id === user.id ? "self" : ""}`}
          >
            <div className="avatar">
              <UserOutlined />
            </div>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="wrap-input-message">
        <form onSubmit={handleOnSend}>
          <Input placeholder="" value={msg} onChange={handleOnChange} />
          <Button onClick={handleOnSend}>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
