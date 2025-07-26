export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
};

export type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
};