import React from "react";
import { useChat } from "../context/ChatContext";

const UserInput: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const { userInput, setUserInput, sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(userInput);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Type your message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={styles.input}
        disabled={disabled}
      />
      <button type="submit" style={styles.button} disabled={disabled || !userInput.trim()}>
        Send
      </button>
    </form>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  form: {
    display: "flex",
    gap: 10,
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "10px 20px",
    fontSize: 16,
    cursor: "pointer",
  },
};

export default UserInput;