import { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import '../styles/chatStyle.css';

const ConversationWindow = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="conversation-window">
      {messages.length === 0 ? (
        <div className="welcome-message">
          <h2>Welcome to MindMeld</h2>
          <p>Your intelligent AI companion</p>
          <p>Ask me anything to start our conversation!</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))
      )}
      
      {isLoading && (
        <div className="typing-indicator">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ConversationWindow;