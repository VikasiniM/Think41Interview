import React from "react";
import { Message as MessageType } from "../context/ChatContext";

const Message: React.FC<MessageType> = ({ sender, text }) => {
  const isUser = sender === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "6px 0",
      }}
    >
      <div
        style={{
          background: isUser ? "#007bff" : "#eee",
          color: isUser ? "#fff" : "#222",
          borderRadius: 16,
          padding: "10px 16px",
          maxWidth: 380,
          fontSize: 16,
          boxShadow: "0 2px 6px #0001",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;