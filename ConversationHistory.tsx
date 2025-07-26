import React from "react";
import { useChat } from "../context/ChatContext";

const ConversationHistory: React.FC = () => {
  const {
    conversations,
    selectConversation,
    selectedConversationId,
    startNewConversation,
  } = useChat();

  return (
    <div style={styles.sidebar}>
      <div style={styles.header}>
        <span>Conversations</span>
        <button style={styles.newBtn} onClick={startNewConversation}>
          +
        </button>
      </div>
      <div style={styles.list}>
        {conversations.length === 0 && (
          <div style={{ color: "#888", textAlign: "center", padding: 16 }}>
            No conversations yet.
          </div>
        )}
        {conversations.map((conv) => (
          <div
            key={conv.id}
            style={{
              ...styles.item,
              background:
                conv.id === selectedConversationId ? "#e8f0fe" : "transparent",
            }}
            onClick={() => selectConversation(conv.id)}
          >
            <div style={{ fontWeight: 500, fontSize: 15 }}>
              {new Date(conv.createdAt).toLocaleString()}
            </div>
            <div style={{ fontSize: 13, color: "#555" }}>
              {conv.messages[0]?.text?.slice(0, 30) || "Empty session"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  sidebar: {
    width: 240,
    background: "#f5f7fa",
    borderRight: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
  },
  header: {

