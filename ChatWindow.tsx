import React from "react";
import { useChat } from "../context/ChatContext";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import ConversationHistory from "./ConversationHistory";

const ChatWindow: React.FC = () => {
  const { loading } = useChat();

  return (
    <div style={styles.container}>
      <ConversationHistory />
      <div style={styles.chatSection}>
        <h2>AI Chat</h2>
        <div style={styles.messageList}>
          <MessageList />
        </div>
        <UserInput disabled={loading} />
      </div>
    </div>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "80vh",
    maxWidth: 900,
    margin: "40px auto",
    border: "1px solid #eee",
    borderRadius: 10,
    overflow: "hidden",
    background: "#fff",
  },
  chatSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  messageList: {
    flex: 1,
    overflowY: "auto",
    marginBottom: 10,
    background: "#f8f8f8",
    borderRadius: 5,
    padding: 10,
  },
};

export default ChatWindow;