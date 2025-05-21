import { create } from 'zustand';

export type Sender = 'user' | 'ai';

export interface Message {
  id: string;
  sender: Sender;
  text: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (msg: Omit<Message, 'id'>) => void;
  isTyping: boolean;
  setIsTyping: (isTyping: boolean) => void;
}

interface AddMessage {
    (msg: Omit<Message, 'id'>): void;
}

interface SetIsTyping {
    (isTyping: boolean): void;
}

interface ChatStore extends ChatState {}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [
        {
            id: '1',
            sender: 'ai',
            text: "Hi, I'm your support companion. How are you feeling today?",
        },
    ],
    isTyping: false,
    setIsTyping: ((isTyping: boolean) => set({ isTyping })) as SetIsTyping,
    addMessage: ((msg: Omit<Message, 'id'>) =>
        set((state) => ({
            messages: [
                ...state.messages,
                {
                    ...msg,
                    id: (state.messages.length + 1).toString(),
                },
            ],
        }))) as AddMessage,
}));
