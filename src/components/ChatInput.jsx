import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import '../styles/chatStyle.css';

const ChatInput = ({ onSendMessage, onClearChat, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-form">
        <button 
          type="button" 
          className="clear-button"
          onClick={onClearChat}
          title="Clear conversation"
        >
          <MdClear />
        </button>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask MindMeld anything..."
          disabled={isLoading}
          className="chat-input"
        />
        
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="send-button"
          title="Send message"
        >
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;