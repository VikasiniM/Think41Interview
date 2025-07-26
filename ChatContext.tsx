import React, { createContext, useContext, useState, useEffect } from "react";

export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
};

export type Conversation = {
  id: string;
  messages: Message[];
  createdAt: number;
};

type ChatContextType = {
  currentMessages: Message[];
  loading: boolean;
  userInput: string;
  setUserInput: (val: string) => void;
  sendMessage: (msg: string) => void;
  conversations: Conversation[];
  selectConversation: (id: string) => void;
  selectedConversationId: string | null;
  startNewConversation: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const CHAT_STORAGE_KEY = "think41_conversations";

const generateId = () => Math.random().toString(36).slice(2);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load conversations from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem(CHAT_STORAGE_KEY);
    if (data) {
      const loaded: Conversation[] = JSON.parse(data);
      setConversations(loaded);
      if (loaded.length) setSelectedConversationId(loaded[0].id);
    }
  }, []);

  // Persist conversations to localStorage
  useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(conversations));
  }, [conversations]);

  const currentMessages =
    conversations.find((c) => c.id === selectedConversationId)?.messages || [];

  const selectConversation = (id: string) => setSelectedConversationId(id);

  const startNewConversation = () => {
    const newConv: Conversation = {
      id: generateId(),
      createdAt: Date.now(),
      messages: [],
    };
    setConversations([newConv, ...conversations]);
    setSelectedConversationId(newConv.id);
  };

  const sendMessage = (msg: string) => {
    if (!msg.trim() || loading || !selectedConversationId) return;
    setLoading(true);
    const userMsg: Message = {
      id: generateId(),
      sender: "user",
      text: msg,
      timestamp: Date.now(),
    };
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? { ...conv, messages: [...conv.messages, userMsg] }
          : conv
      )
    );
    setUserInput("");

    // Simulate AI reply (replace this with real API call)
    setTimeout(() => {
      const aiMsg: Message = {
        id: generateId(),
        sender: "ai",
        text: "AI Response: " + msg,
        timestamp: Date.now(),
      };
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === selectedConversationId
            ? { ...conv, messages: [...conv.messages, aiMsg] }
            : conv
        )
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <ChatContext.Provider
      value={{
        currentMessages,
        loading,
        userInput,
        setUserInput,
        sendMessage,
        conversations,
        selectConversation,
        selectedConversationId,
        startNewConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};