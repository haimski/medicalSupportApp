import React, { useState } from 'react';
import { useChatStore } from './chatStore';
import { getAIReply } from '../../utils/GetAIReply';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);
  const setTyping = useChatStore((state) => state.setIsTyping);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add the message to the store
    addMessage({ sender: 'user', text: input });

    // typing indicator
    setTyping(true);

    // Mock sending the message
    setTimeout(() => {
        addMessage({ 
            sender: 'ai', 
            text: getAIReply(input)
        });
        setTyping(false);
    }
    , 1000);

    setInput('');
  };

  return (
    <div className="flex gap-2">
      <input autoFocus
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
            }
        }}
        className="flex-grow p-2 border rounded-md"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
