import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { get } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { loadHistoryMessage } from "../../redux/actions/chatbox";
import { setNewMessage } from "../../utils/helper";
const ChatBox = (props) => {
  const { page, user, messages = [], loading } = props;
  const dispatch = useDispatch();
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
    setTimeout(() => {
      wrapRef.current.scrollTop = wrapRef.current.scrollHeight;
    }, 150);
  };

  const handleOnScroll = (e) => {
    if (
      !loading &&
      wrapRef.current.scrollTop <= 10 &&
      get(messages, "0.id") > 0
    ) {
      dispatch(loadHistoryMessage(page + 1, messages[0].id));

      setTimeout(() => {
        wrapRef.current.scrollTop = 60;
      }, 300);
    }
  };

  return (
    <div className="container-chat-box">
      <div className="pd24 wrap-chat-box">
        <div ref={wrapRef} className="wrap-messages" onScroll={handleOnScroll}>
          {loading && (
            <div className="loading">
              <LoadingOutlined />{" "}
            </div>
          )}
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
