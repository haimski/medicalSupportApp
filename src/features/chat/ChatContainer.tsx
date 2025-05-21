import React, { useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChatStore } from './chatStore';

const ChatContainer = () => {
  const messages = useChatStore((state) => state.messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <div className="px-4 py-3 border-b text-lg font-semibold bg-pink-50">
        Breast Cancer Support Companion
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>

      <div className="p-4 border-t">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;
