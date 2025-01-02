export type MessageProps = {
  message: string;
  imageUrl?: string;
};

export type ChatMessage = {
  id: string;
  message: string;
  imageUrl?: string;
  isReceived: boolean;
};
