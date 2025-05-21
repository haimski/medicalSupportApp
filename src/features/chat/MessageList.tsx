import React, { useEffect, useRef } from 'react';
import { useChatStore } from './chatStore';

const MessageList = () => {
    const messages = useChatStore((state) => state.messages);
    const isTyping = useChatStore((state) => state.isTyping);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    , [messages]);

  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`max-w-xs p-3 rounded-lg ${
            msg.sender === 'user'
              ? 'bg-blue-100 self-end text-right'
              : 'bg-pink-100 self-start text-left'
          }`}
        >
          {msg.text}
        </div>
      ))}
      {isTyping && (
        <div className="max-w-xs px-4 py-3 rounded-2xl bg-pink-100 self-start text-left text-sm italic opacity-70">
          AI is typing...
        </div>
      )}
    </div>
  );
};

export default MessageList;
