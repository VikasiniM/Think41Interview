import React from "react";
import { useChat } from "../context/ChatContext";
import Message from "./Message";

const MessageList: React.FC = () => {
  const { currentMessages } = useChat();

  return (
    <>
      {currentMessages.length === 0 && (
        <div style={{ color: "#888", textAlign: "center" }}>
          No messages yet.
        </div>
      )}
      {currentMessages.map((msg) => (
        <Message key={msg.id} {...msg} />
      ))}
    </>
  );
};

export default MessageList;